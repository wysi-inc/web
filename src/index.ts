import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { cookie } from '@elysiajs/cookie'
import { jwt } from '@elysiajs/jwt'
import * as mongoose from 'mongoose';
import { auth } from "osu-api-extended";
import { getUser, getUserBeatmaps, getUserList, getUserMostPlayed, getUserScores, searchUser, updateUserSetup } from "./controllers/users";
import { getMedals, updateMedals } from "./controllers/medals";
import { getBeatmap, getBeatmapScores } from "./controllers/beatmaps";
import { login, logout } from "./controllers/web";

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

const app = new Elysia()
    .onRequest(({ request }) => console.log(request.method, request.url))
    .use(cors())
    .use(jwt({
        name: "jwt",
        secret: osu_secret,
    }))
    .use(cookie())
    .get("/", () => "Bon dia i bon' hora!")
    .get('/profile', async ({ jwt, set, cookie: { auth } }) => {
        const profile = await jwt.verify(auth);
        if (!profile) {
            set.status = 401;
            return 'Unauthorized';
        }
        return `Hello ${profile.username}`;
    })
    .get("/login/:code", async ({ jwt, setCookie, params, request }) => await login(jwt, setCookie, params, request))
    .get("/logout", ({ setCookie }) => logout(setCookie))
    .get("/is_logged_in", async ({ jwt, set, cookie: { auth } }) => {
        const profile = await jwt.verify(auth);
        if (!profile) {
            set.status = 401;
            return 'Unauthorized';
        }
        return getUser({ params: { id: profile.id } });
    })
    .group("/users", (_) => _
        .get("/:id", (req) => getUser(req))
        .get("/:id/:mode", (req) => getUser(req))
        .get("/:id/beatmaps", (req) => getUserBeatmaps(req))
        .get("/:id/scores", (req) => getUserBeatmaps(req))
        .get("/:id/scores/:mode", (req) => getUserScores(req))
        .get("/:id/mostplayed", (req) => getUserMostPlayed(req))
        .post("/setup", async ({ jwt, set, cookie: { auth }, request }) => {
            if (!request.body) return;
            if (!request.body["setup"]) return;
            const profile = await jwt.verify(auth);
            if (!profile) {
                set.status = 401;
                return 'Unauthorized';
            }
            return await updateUserSetup(profile.id as any, request.body["setup"]);
        })
    )
    .group("/rankings", (_) => _
        .get("/search/:query", (req) => searchUser(req))
        .get("/list/:mode/:category/:page", (req) => getUserList(req))
    )
    .group("/beatmaps", (_) => _
        .get("/:id", (req) => getBeatmap(req))
        .get("/:id/scores/:mode", (req) => getBeatmapScores(req))
    )
    .get("medals", () => getMedals())
    .onError(({ code, error }) => {
        switch (code) {
            case 'VALIDATION':
                return error.message;
            case 'NOT_FOUND':
                return 'Route not found';
            case 'INTERNAL_SERVER_ERROR':
                return 'Internal server error';
            default:
                return 'Something went wrong :(';
        }
    })
    .listen(5000);

console.log(`[ OK ] Server is running at port ${app.server?.port}`);
