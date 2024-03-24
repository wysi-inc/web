import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { jwt } from "@elysiajs/jwt";

import { auth } from "osu-api-extended";
import mongoose from "mongoose";

import { baseRoutes } from "./src/routes/base";
import { rankingRoutes } from "./src/routes/rankings";
import { userRoutes } from "./src/routes/user";
import { beatmapRoutes } from "./src/routes/beatmaps";
import { jsonRoutes } from "./src/routes/json";
import { updateMedals } from "./src/db/medals";
import { Tablet } from "./src/models/Tablet";

const port = Number(process.env.PORT as string);
const mongo_uri = process.env.MONGO_URI as string;

export const osu_id = Number(process.env.OSU_ID as string);
export const osu_secret = process.env.OSU_SECRET as string;
export const osu_redirect = process.env.OSU_REDIRECT as string;

function connect(): void {
    mongoose.connect(mongo_uri)
        .then(() => console.info("[ OK ] Connected to MongoDB"))
        .catch((err) => console.error("[ EE ] Couldn't connect to MongoDB\n", err));

    auth.login(osu_id, osu_secret, ["public"])
        .then((res) => res?.expires_in ?
            console.info("[ OK ] Connected to osu!API") :
            console.error("[ EE ] Couldn't connect to osu!API\n", res)
        ).catch((err) => console.error(err));

    updateMedals();
}

connect();
setInterval(() => connect(), 1000 * 60 * 60 * 23);

new Elysia()
    .use(staticPlugin())
    .use(jwt({
        secret: process.env.OSU_SECRET as string,
        cookie: "auth",
        cookieOptions: {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        }
    }))
    .use(html())
    .use(baseRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(jsonRoutes)
    // .post("/tablet", ({ body }) => {
    //     const tablet = new Tablet({
    //         name: body.name,
    //         w: body.w,
    //         h: body.h,
    //     });
    //     tablet.save();
    //     return "OK";
    // }, {
    //     body: t.Object({
    //         name: t.String(),
    //         w: t.Number(),
    //         h: t.Number(),
    //     })
    // })
    .onError((err) => console.error(err.error))
    .onRequest(({ request }) => console.log(request.method, request.url))
    .onStart(() => console.info(`[ OK ] Listening on port ${port}`))
    .listen(port)
