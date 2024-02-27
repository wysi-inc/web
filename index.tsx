import { Elysia } from "elysia";
import { html } from "@elysiajs/html";
import { staticPlugin } from '@elysiajs/static'
import { auth } from "osu-api-extended";
import mongoose from "mongoose";
import type { BeatmapCategory, Mode } from "./src/types/osu";
import type { ScoreCategory } from "./src/types/osu";
import type { ProfileMedal } from "./src/types/medals";
import Home from "./src/components/web/Home";
import Rankings from "./src/components/users/Rankings";
import Beatmaps from "./src/components/beatmaps/Beatmaps";
import UserPage from "./src/components/users/UserPage";
import BaseHtml from "./src/components/BaseHtml";
import SearchResults from "./src/components/web/SearchResults";
import BeatmapsList from "./src/components/beatmaps/BeatmapsList";
import UserScoresList from "./src/components/users/u_panels/u_components/UserScoresList";
import UserBeatmapsList from "./src/components/users/u_panels/u_components/UserBeatmapsList";
import UserMostList from "./src/components/users/u_panels/u_components/UserMostList";
import UserSkinsPanel from "./src/components/users/u_panels/UserSkinsPanel";
import UserSetupPanel from "./src/components/users/u_panels/UserSetupPanel";
import UserScoresPanel from "./src/components/users/u_panels/UserScoresPanel";
import UserBeatmapsPanel from "./src/components/users/u_panels/UserBeatmapsPanel";
import UserMostPanel from "./src/components/users/u_panels/UserMostPanel";
import UserSummaryPanel from "./src/components/users/u_panels/UserSummaryPanel";
import UserMedalsPanel from "./src/components/users/u_panels/UserMedalsPanel";
import { updateMedals } from "./src/resources/db-medal";

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
    .get("/", ({ request, html }) => getPage(request, html, <Home />))
    .post("/search", ({ html, body }) => html(<SearchResults query={(body as any).q} />))
    .group("/rankings", (_) => _
        .get("/", ({ request, html }) => getPage(request, html,
            <Rankings mode="osu" page={1} category="performance" />
        ))
        .get("/:mode/:category/:page", ({ request, html, params }) => getPage(request, html,
            <Rankings mode={params.mode} category={params.category} page={Number(params.page)} />
        ))
    )
    .group("/users/:id", (_) => _
        .get("/", ({ request, html, params }) => getPage(request, html,
            <UserPage id={params.id} mode={undefined} />
        ))
        .get("/:mode", ({ request, html, params }) => getPage(request, html,
            <UserPage id={params.id} mode={params.mode as Mode} />
        ))
        .post("/:mode/scores/:category/list", ({ request, html, params, query }) => htmxOnly(request, html,
            <UserScoresList id={Number(params.id)}
                mode={params.mode as Mode}
                category={params.category as ScoreCategory}
                offset={Number(query.offset)}
                limit={Number(query.limit)}
            />
        ))
        .post("/:mode/beatmaps/:category/list", ({ request, html, params, query }) => htmxOnly(request, html,
            <UserBeatmapsList id={Number(params.id)}
                category={params.category as BeatmapCategory}
                offset={Number(query.offset)}
                limit={Number(query.limit)}
            />
        ))
        .post("/:mode/most/list", ({ request, html, params, query }) => htmxOnly(request, html,
            <UserMostList id={Number(params.id)} offset={Number(query.offset)} limit={Number(query.limit)} />
        ))
    )
    .group("/user/:id/:mode/panels", (_) => _
        .post("/scores_summary", ({ request, html, params }) => getPage(request, html,
            <UserSummaryPanel id={Number(params.id)} mode={params.mode as Mode} />
        ))
        .post("/scores/:category", ({ request, html, params }) => getPage(request, html,
            <UserScoresPanel id={Number(params.id)} mode={params.mode as Mode} category={params.category as ScoreCategory} />
        ))
        .post("/beatmaps/:category", ({ request, html, params }) => getPage(request, html,
            <UserBeatmapsPanel id={Number(params.id)} category={params.category as BeatmapCategory} />
        ))
        .post("/most_played", ({ request, html, params }) => getPage(request, html,
            <UserMostPanel id={Number(params.id)} />
        ))
        .post("/skins", ({ request, html, params }) => getPage(request, html,
            <UserSkinsPanel id={Number(params.id)} />
        ))
        .post("/setup", ({ request, html, params }) => getPage(request, html,
            <UserSetupPanel id={Number(params.id)} />
        ))
        .post("/medals", ({ request, html, body }) => {
            const medals: ProfileMedal[] = (body as any)?.medals?.map((m: string) => JSON.parse(m) as ProfileMedal);
            return getPage(request, html,
                <UserMedalsPanel user_medals={medals} />
            )
        })
    )
    .group("/beatmaps", (_) => _
        .get("/", ({ request, html, body }) => getPage(request, html,
            <Beatmaps query={body} />
        ))
        .post("/list", ({ html, body }) => html(
            <BeatmapsList query={body} />
        ))

    )
    .listen(port);

function getPage(request: Request, html: any, children: JSX.Element): JSX.Element {
    if (request.headers.has("hx-request")) {
        return children;
    }
    return html(
        <BaseHtml>{children}</BaseHtml>
    );
}

function htmxOnly(request: Request, html: any, children: JSX.Element): JSX.Element {
    if (!request.headers.has("hx-request")) {
        return "wrong request";
    }
    return html(children);
}

console.log(`Server running in port ${app.server?.port}`)
