import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { auth } from "osu-api-extended";
import Home from "./src/components/web/Home";
import Rankings from "./src/components/users/Rankings";
import Beatmaps from "./src/components/beatmaps/Beatmaps";
import UserPage from "./src/components/users/UserPage";
import type { Mode } from "./src/types/osu";
import BaseHtml from "./src/components/BaseHtml";
import SearchResults from "./src/components/web/SearchResults";
import BeatmapsList from "./src/components/beatmaps/BeatmapsList";

const port: number = process.env.PORT as any;

// const mongo_uri: string = process.env.MONGO_URI as any;
const osu_id: number = process.env.OSU_ID as any;
const osu_secret: string = process.env.OSU_SECRET as any;

function connect(): void {
    auth.login(osu_id, osu_secret, ["public"])
        .then((res) => res?.expires_in ?
            console.log("[ OK ] Connected to osu!API") :
            console.log("[ EE ] Couldn't connect to osu!API\n", res)
        ).catch((err) => console.log(err));
}

connect();
setInterval(() => connect(), 1000 * 60 * 60 * 23);
const app: any = new Elysia()
    .use(staticPlugin())
    .use(html())
    .onRequest(({ request }) => console.log(request.method, request.url))
    .get("/", ({ html }) => html(<Home />))
    .get("/search", ({ html, query }) => html(<SearchResults query={query.q}/>))
    .get("/rankings", ({ html }) => html(
        <BaseHtml>
            <Rankings mode="osu" page={1} category="performance" />
        </BaseHtml>
    ))
    .post("/rankings", ({ html }) => html(
        <Rankings mode="osu" page={1} category="performance" />
    ))
    .get("/rankings/:mode/:category/:page", ({ html, params }) => html(
        <BaseHtml>
            <Rankings mode={params.mode} category={params.category} page={Number(params.page)} />
        </BaseHtml>
    ))
    .post("/rankings/:mode/:category/:page", ({ html, params }) => html(
        <Rankings mode={params.mode} category={params.category} page={Number(params.page)} />
    ))
    .get("/users/:id/:mode", ({ html, params }) => html(
        <BaseHtml>
            <UserPage id={params.id} mode={params.mode as Mode} />
        </BaseHtml>
    ))
    .post("/users/:id/:mode", ({ html, params }) => html(
        <UserPage id={params.id} mode={params.mode as Mode} />
    ))
    .get("/beatmaps", ({ html }) => html(
        <BaseHtml>
            <Beatmaps />
        </BaseHtml>
    ))
    .post("/beatmaps", ({ html }) => html(
        <Beatmaps />
    ))
    .post("/beatmaps/list", ({html, query}) => html(
    <div></div>
    ))

app.listen(port);

console.log("Server started at http://localhost:4000")
