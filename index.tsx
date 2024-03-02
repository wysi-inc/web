import { Elysia } from "elysia";
import { staticPlugin } from '@elysiajs/static'
import { auth } from "osu-api-extended";
import mongoose from "mongoose";
import { updateMedals } from "./src/db/medals";

import { baseRoutes } from "./src/routes/base";
import { rankingRoutes } from "./src/routes/rankings";
import { userRoutes } from "./src/routes/user";
import { beatmapRoutes } from "./src/routes/beatmaps";
import { jsonRoutes } from "./src/routes/json";

const port: number = process.env.PORT as any;
const mongo_uri: string = process.env.MONGO_URI as any;
const osu_id: number = process.env.OSU_ID as any;
const osu_secret: string = process.env.OSU_SECRET as any;

function connect(): void {
    mongoose.connect(mongo_uri)
        .then(() => console.log("[ OK ] Connected to MongoDB"))
        .catch((err) => console.log("[ EE ] Couldn't connect to MongoDB\n", err));

    auth.login(osu_id, osu_secret, ["public"])
        .then((res) => res?.expires_in ?
            console.log("[ OK ] Connected to osu!API") :
            console.log("[ EE ] Couldn't connect to osu!API\n", res)
        ).catch((err) => console.log(err));

    updateMedals();
}

connect();
setInterval(() => connect(), 1000 * 60 * 60 * 23);

new Elysia()
    .use(staticPlugin())
    .use(baseRoutes)
    .use(rankingRoutes)
    .use(userRoutes)
    .use(beatmapRoutes)
    .use(jsonRoutes)
    .listen(port)
    .onError((err) => console.log("[ EE ]", err))
    .onRequest(({ request }) => console.log(request.method, request.url))
    .onStart(() => console.log(`[ OK ] Listening on port ${port}`))
