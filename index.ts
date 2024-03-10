import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { jwt } from "@elysiajs/jwt";
import { cookie } from "@elysiajs/cookie";
import { staticPlugin } from '@elysiajs/static'
import { baseRoutes } from "./src/routes/base";
import { rankingRoutes } from "./src/routes/rankings";
import { userRoutes } from "./src/routes/user";
import { beatmapRoutes } from "./src/routes/beatmaps";
import { jsonRoutes } from "./src/routes/json";
import { updateMedals } from "./src/db/medals";

import mongoose from "mongoose";
import { auth } from "osu-api-extended";

export const port: number = Number(process.env.PORT as string);
export const osu_id: number = Number(process.env.OSU_ID as string);
export const osu_secret: string = process.env.OSU_SECRET as string;
export const osu_redirect: string = process.env.OSU_REDIRECT as string;
export const mongo_uri: string = process.env.MONGO_URI as string;

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
    .use(html())
    .use(cookie())
    .use(jwt({
        name: 'jwt',
        secret: osu_secret
    }))
    .use(baseRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(jsonRoutes)
    .listen(port)
    .onError((err) => console.error("[ EE ]", err))
    .onRequest(({ request }) => console.log(request.method, request.url))
    .onStart(() => console.info(`[ OK ] Listening on port ${port}`))
