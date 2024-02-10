import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { auth } from "osu-api-extended";
import Home from "./src/components/web/Home";
import Rankings from "./src/components/users/Rankings";
import Beatmaps from "./src/components/beatmaps/Beatmaps";
import UserPage from "./src/components/users/UserPage";
import type { BeatmapCategory, Mode } from "./src/types/osu";
import BaseHtml from "./src/components/BaseHtml";
import SearchResults from "./src/components/web/SearchResults";
import BeatmapsList from "./src/components/beatmaps/BeatmapsList";
import type { ScoreCategory } from "./src/types/osu";
import UserScoresList from "./src/components/users/u_panels/u_components/UserScoresList";
import mongoose from "mongoose";
import { updateMedals } from "./src/resources/db-medal";
import UserBeatmapsList from "./src/components/users/u_panels/u_components/UserBeatmapsList";
import UserMostList from "./src/components/users/u_panels/u_components/UserMostList";

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

const app = new Elysia()
    .use(staticPlugin())
    .use(html())
    .onRequest(({ request }) => console.log(request.method, request.url))
    .get("/", ({ html }) => html(<BaseHtml><Home /></BaseHtml>))
    .post("/", ({ html }) => html(<Home />))
    .get("/search", ({ html, query }) => html(<SearchResults query={query.q} />))
    .group("/rankings", (_) => _
        .get("/", ({ html }) => html(
            <BaseHtml>
                <Rankings mode="osu" page={1} category="performance" />
            </BaseHtml>
        ))
        .post("/", ({ html }) => html(
            <Rankings mode="osu" page={1} category="performance" />
        ))
        .get("/:mode/:category/:page", ({ html, params }) => html(
            <BaseHtml>
                <Rankings mode={params.mode} category={params.category} page={Number(params.page)} />
            </BaseHtml>
        ))
        .post("/:mode/:category/:page", ({ html, params }) => html(
            <Rankings mode={params.mode} category={params.category} page={Number(params.page)} />
        ))
    )
    .group("/users", (_) => _
        .get("/:id/:mode", ({ html, params }) => html(
            <BaseHtml>
                <UserPage id={params.id} mode={params.mode as Mode} />
            </BaseHtml>
        ))
        .post("/:id/:mode", ({ html, params }) => html(
            <UserPage id={params.id} mode={params.mode as Mode} />
        ))
        .get("/:id/", ({ html, params }) => html(
            <BaseHtml>
                <UserPage id={params.id} mode={undefined} />
            </BaseHtml>
        ))
        .post("/:id/", ({ html, params }) => html(
            <UserPage id={params.id} mode={undefined} />
        ))
        .post("/:id/:mode/scores/:category/list", ({ html, params, query }) => html(
            <UserScoresList id={Number(params.id)}
                mode={params.mode as Mode}
                category={params.category as ScoreCategory}
                offset={Number(query.offset)}
                limit={Number(query.limit)}
            />
        ))
        .post("/:id/:mode/beatmaps/:category/list", ({ html, params, query }) => html(
            <UserBeatmapsList id={Number(params.id)}
                category={params.category as BeatmapCategory}
                offset={Number(query.offset)}
                limit={Number(query.limit)}
            />
        ))
        .post("/:id/:mode/most/list", ({ html, params, query }) => html(
            <UserMostList id={Number(params.id)} offset={Number(query.offset)} limit={Number(query.limit)} />
        ))
    )
    .group("/beatmaps", (_) => _
        .get("/", ({ html, body }) => html(
            <BaseHtml>
                <Beatmaps query={body} />
            </BaseHtml>
        ))
        .post("/", ({ html }) => html(
            <Beatmaps query={undefined} />
        ))
        .post("/list", ({ html, body }) => html(
            <BeatmapsList query={body} />
        ))
    ).listen(port);

console.log(`Server running in port ${app.server?.port}`)
