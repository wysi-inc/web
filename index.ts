import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { auth } from "osu-api-extended";
import { staticPlugin } from '@elysiajs/static'
import { updateMedals } from "./src/db/medals";
import { rankingRoutes } from "./src/routes/rankings";
import { userRoutes } from "./src/routes/user";
import { beatmapRoutes } from "./src/routes/beatmaps";
import { jsonRoutes } from "./src/routes/json";
import { homeController, oauthController, searchController } from "./src/controllers/web";
import mongoose from "mongoose";
import jwt from "@elysiajs/jwt";

export const port: number = process.env.PORT as any;
export const mongo_uri: string = process.env.MONGO_URI as any;
export const osu_id: number = process.env.OSU_ID as any;
export const osu_secret: string = process.env.OSU_SECRET as any;
export const osu_redirect: string = process.env.OSU_REDIRECT as any;

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

const oauthQuery = {
    query: t.Object({
        code: t.String(),
        state: t.Any()
    })
}

const searchBody = {
    body: t.Object({
        q: t.String()
    })
}

new Elysia()
    .use(staticPlugin())
    .use(html())
    .use(jwt({
        name: 'cookiezi',
        secret: 'test'
    }))
    .get("/", homeController)
    .get("/oauth", oauthController, oauthQuery)
    .post("/search", searchController, searchBody)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(jsonRoutes)
    .listen(port)
    .onError((err) => console.error("[ EE ]", err))
    .onRequest(({ request }) => console.log(request.method, request.url))
    .onStart(() => console.info(`[ OK ] Listening on port ${port}`))
