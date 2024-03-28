import { Elysia, t } from 'elysia'
import type { Mode } from '../types/osu';
import BeatmapsetSearch from '../components/beatmap/BeatmapsetSearch';
import BeatmapsList from '../components/beatmap/BeatmapsList';
import BeatmapsetPage from '../components/beatmap/BeatmapsetPage';
import BeatmapScoreTable from '../components/beatmap/BeatmapScoreTable';
import HtmxPage from '../libs/routes';

const queryBodyElysia = {
    body: t.Object({
        // Search
        title: t.Optional(t.String()),
        artist: t.Optional(t.String()),
        mapper: t.Optional(t.String()),
        // Filters
        bpm_min: t.Optional(t.String()),
        bpm_max: t.Optional(t.String()),
        stars_min: t.Optional(t.String()),
        stars_max: t.Optional(t.String()),
        length_min: t.Optional(t.String()),
        length_max: t.Optional(t.String()),
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
        mode: t.Optional(t.String()),
        status: t.Optional(t.String()),
        offset: t.Optional(t.String()),
        sorting: t.Optional(t.String()),
        sorting_title: t.Optional(t.String()),
    })
}

export const beatmapRoutes = new Elysia({ prefix: '/beatmaps' })
    //@ts-ignore
    .get("/", async ({ request, jwt, cookie }) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <BeatmapsetSearch />
        </HtmxPage>
    ))
    .post("/list", ({ body }) => (
        <BeatmapsList body={body} />
    ), queryBodyElysia)
    .post("/list/:cursor", ({ body, params: { cursor } }) => (
        <BeatmapsList body={body} cursor={cursor} />
    ), queryBodyElysia)
    //@ts-ignore
    .get("/:set_id", async ({ request, jwt, cookie, params: { set_id } }) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <BeatmapsetPage set_id={Number(set_id)} />
        </HtmxPage>
    ))
    //@ts-ignore
    .get("/:set_id/:beatmap_id", async ({ request, jwt, cookie, params: { set_id, beatmap_id } }) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <BeatmapsetPage set_id={Number(set_id)} beatmap_id={Number(beatmap_id)} />
        </HtmxPage>
    ))
    .post("/:set_id/:beatmap_id/scores/:mode", ({ params: { beatmap_id, mode } }) => (
        <BeatmapScoreTable
            id={Number(beatmap_id)}
            mode={mode as Mode}
        />
    ), queryBodyElysia)

