import { Elysia } from "elysia";
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
import { updateMedals } from "./src/db/medals/update_medals";

const port = Number(process.env.PORT as string);
const mongo_uri = process.env.MONGO_URI as string;

export const osu_id = Number(process.env.OSU_ID as string);
export const osu_secret = process.env.OSU_SECRET as string;
export const osu_redirect = process.env.OSU_REDIRECT as string;
export const osu_api_key = process.env.OSU_API_KEY as string;

function connect(): void {
    mongoose.connect(mongo_uri)
        .then(() => console.info("[ OK ] Connected to MongoDB"))
        .catch((err) => console.error("[ EE ] Couldn't connect to MongoDB\n", err));

    auth.login(osu_id, osu_secret, ["public"])
        .then((res) => res?.expires_in ?
            console.info("[ OK ] Connected to osu!API") :
            console.error("[ EE ] Couldn't connect to osu!API\n", res)
        ).catch((err) => console.error(err));

    auth.set_v1(osu_api_key);

    updateMedals();
}

connect();
setInterval(() => connect(), 1000 * 60 * 60 * 23);

new Elysia()
    .onRequest(({ request }) => {
        // const agent = request.headers.get("user-agent");
        const ip = request.headers.get("x-forwarded-for");
        const route = request.url.split("/").slice(3).join("/");
        const method = request.method;
        const time = new Date().toTimeString().split(" ")[0];
        time.split(":").length === 2 && time.concat(":00");
        console.log(`[ ${time} ] -> ${ip}${method}::/${route}`);
    })
    .use(jwt({
        secret: process.env.OSU_SECRET as string,
        cookie: "auth",
        cookieOptions: {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 31 * 2,
            path: '/',
        }
    }))
    .use(staticPlugin())
    .use(html())
    .get("/favicon.ico", () => Bun.file("./public/favicon.ico"))
    .use(baseRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(jsonRoutes)
    //.onError(() => "some")
    .onStart(() => console.info(`[ OK ] Listening on port ${port}`))
    .listen(port)
