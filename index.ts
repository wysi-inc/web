import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { jwt } from "@elysiajs/jwt";
import { readdir } from "node:fs/promises";

import { auth } from "osu-api-extended";
import mongoose from "mongoose";

import { baseRoutes } from "./src/routes/base";
import { rankingRoutes } from "./src/routes/rankings";
import { userRoutes } from "./src/routes/user";
import { beatmapRoutes, beatmapsetRoutes } from "./src/routes/beatmaps";
import { updateMedals } from "./src/db/medals/update_medals";
import { apiRoutes } from "./src/routes/api";

const port = Number(process.env.PORT as string);
const mongo_uri = process.env.MONGO_URI as string;

export const osu_id = Number(process.env.OSU_ID);
export const osu_secret = String(process.env.OSU_SECRET);
export const osu_redirect = String(process.env.OSU_REDIRECT);
export const osu_api_key = String(process.env.OSU_API_KEY);

export const crowdin_id = Number(process.env.CROWDIN_ID);
export const crowdin_secret = String(process.env.CROWDIN_SECRET);

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

async function getTranslations() {
    try {
        const dirs = await readdir("./locales");
        const translations: any = {};
        for (let dir of dirs) {
            const file = Bun.file(`./locales/${dir}/translation.json`);
            const contents = await file.json();
            translations[dir] = contents;
        }
        return translations;
    } catch (err) {
        console.error(err);
        return {};
    }
}

const translations = await getTranslations();

const jwtcfg = jwt({
    secret: process.env.OSU_SECRET as string,
    cookie: "auth",
    cookieOptions: {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 31 * 2,
        path: '/',
    }
})

new Elysia()
    .onRequest(({ request }) => {
        const ip = request.headers.get("x-forwarded-for");
        const route = request.url.split("/").slice(3).join("/");
        const method = request.method;
        console.log(`${(ip || "0.0.0.0").padStart(15, " ")} ${method.padStart(6, " ")}::/${route}`);
    })
    .derive(({ cookie }) => {
        const lang = cookie?.lang?.value || "en";
        return {
            t: translations[lang],
            lang
        }
    })
    .use(jwtcfg)
    .get("/favicon.ico", Bun.file("./public/favicon.ico"))
    .use(apiRoutes)
    .use(html())
    .use(baseRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(beatmapsetRoutes)
    //.onError(() => "some")
    .use(staticPlugin())
    .onStart(() => console.info(`[ OK ] Listening on port ${port}`))
    .listen(port);
