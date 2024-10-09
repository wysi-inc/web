import { Elysia, error, t } from "elysia";
import { api_beatmap_details } from "../api/beatmap";
import { BeatmapCollectionCard } from "../components/beatmap/BeatmapCollectionCard";
import BeatmapScoreTable from "../components/beatmap/BeatmapScoreTable";
import BeatmapsList from "../components/beatmap/BeatmapsList";
import BeatmapsetPage from "../components/beatmap/BeatmapsetPage";
import BeatmapsetSearch from "../components/beatmap/BeatmapsetSearch";
import HtmxPage from "../libs/routes";
import { modeUnion, scoresUnion } from "../types/osu";
import { plugins } from "./plugins";

const queryBodyElysia = {
    body: t.Object({
        title: t.Optional(t.String()),
        artist: t.Optional(t.String()),
        mapper: t.Optional(t.String()),
        bpm_min: t.Optional(t.String()),
        bpm_max: t.Optional(t.String()),
        sr_min: t.Optional(t.String()),
        sr_max: t.Optional(t.String()),
        len_min: t.Optional(t.String()),
        len_max: t.Optional(t.String()),
        year_min: t.Optional(t.String()),
        year_max: t.Optional(t.String()),
        ar_min: t.Optional(t.String()),
        ar_max: t.Optional(t.String()),
        cs_min: t.Optional(t.String()),
        cs_max: t.Optional(t.String()),
        hp_min: t.Optional(t.String()),
        hp_max: t.Optional(t.String()),
        od_min: t.Optional(t.String()),
        od_max: t.Optional(t.String()),
        mode: t.Optional(t.Any()),
        status: t.Optional(t.Any()),
        offset: t.Optional(t.String()),
        sorting: t.Optional(t.String()),
    })
}

const beatmap_routes_data = new Elysia({ prefix: "" })
    .get("/:id", async ({ params, set }) => {
        const res = await api_beatmap_details(params.id);
        if (!res) return error(404, "Beatmap doesn't exist");
        return set.redirect = `/beatmapsets/${res.beatmapset_id}/${params.id}`;
    }, {
        params: t.Object({
            id: t.Numeric()
        })
    })

const beatmapsets_routes_data = new Elysia({ prefix: "" })
    .use(plugins)
    .get("/", ({ lang, request, user }) => (
        <HtmxPage lang={lang} headers={request.headers} user={user}>
            <BeatmapsetSearch />
        </HtmxPage>
    ))
    .post("/list", ({ body }) => (
        <BeatmapsList body={body} offset={"0"} />
    ), queryBodyElysia)
    .post("/list/:offset", ({ body, params }) => (
        <BeatmapsList body={body} offset={params.offset} />
    ), queryBodyElysia)
    .get("/:set_id", ({ lang, request, params, user }) => (
        <HtmxPage lang={lang} headers={request.headers} user={user}>
            <BeatmapsetPage set_id={params.set_id} user={user} />
        </HtmxPage>
    ), {
        params: t.Object({
            set_id: t.Numeric()
        })
    })
    .get("/:set_id/:beatmap_id", ({ lang, request, params, user }) => (
        <HtmxPage lang={lang} headers={request.headers} user={user}>
            <BeatmapsetPage set_id={params.set_id} beatmap_id={params.beatmap_id} user={user} />
        </HtmxPage>
    ), {
        params: t.Object({
            set_id: t.Numeric(),
            beatmap_id: t.Numeric()
        })
    })
    .post("/:set_id/:beatmap_id/scores/:mode/:type", ({ params, user, body }) => (
        <BeatmapScoreTable b_id={params.beatmap_id} mode={params.mode} body={body} user={user} type={params.type} />
    ), {
        params: t.Object({
            set_id: t.Numeric(),
            beatmap_id: t.Numeric(),
            mode: modeUnion,
            type: scoresUnion
        })
    })
    .post("/collectioncard/:hash", ({ params }) => (
        <BeatmapCollectionCard hash={params.hash} />
    ))


export const beatmaps_routes = new Elysia()
    .use(new Elysia({ prefix: "/beatmapsets" }).use(beatmapsets_routes_data))
    .use(new Elysia({ prefix: "/beatmapset" }).use(beatmapsets_routes_data))
    .use(new Elysia({ prefix: "/set" }).use(beatmapsets_routes_data))
    .use(new Elysia({ prefix: "/s" }).use(beatmapsets_routes_data))
    .use(new Elysia({ prefix: "/beatmaps" }).use(beatmap_routes_data))
    .use(new Elysia({ prefix: "/beatmap" }).use(beatmap_routes_data))
    .use(new Elysia({ prefix: "/map" }).use(beatmap_routes_data))
    .use(new Elysia({ prefix: "/b" }).use(beatmap_routes_data))
