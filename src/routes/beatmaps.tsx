import { Elysia, t } from 'elysia'
import { html } from "@elysiajs/html";
import { getPage } from '../resources/pages'
import Beatmaps from '../components/beatmap/Beatmaps';
import BeatmapsList from '../components/beatmap/BeatmapsList';
import BeatmapsetPage from '../components/beatmap/BeatmapsetPage';
import BeatmapScoreTable from '../components/beatmap/BeatmapScoreTable';
import type { Mode } from '../types/osu';

const queryBodyElysia = {
    body: t.Object({
        title: t.Optional(t.String()),
        artist: t.Optional(t.String()),
        mapper: t.Optional(t.String()),
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
        offset: t.Optional(t.String())
    })
}

export const beatmapRoutes = new Elysia({ prefix: '/beatmaps' })
    .use(html())
    .get("/", ({ request, html }) => getPage(request, html,
        <Beatmaps />
    ))
    .get("/:set_id", ({ request, html, params }) => getPage(request, html,
        <BeatmapsetPage set_id={Number(params.set_id)} />
    ))

    .get("/:set_id/:beatmap_id", ({ request, html, params }) => getPage(request, html,
        <BeatmapsetPage set_id={Number(params.set_id)} beatmap_id={Number(params.beatmap_id)} />
    ))
    .post("/list", ({ html, body }) => html(
        <BeatmapsList body={body} />
    ), queryBodyElysia)
    .post("/list/:cursor", ({ html, body, params }) => html(
        <BeatmapsList body={body} cursor={params.cursor} />
    ), queryBodyElysia)
    .post("/:set_id/:beatmap_id/scores/:mode", ({ html, body, params }) => html(
        <BeatmapScoreTable id={Number(params.beatmap_id)} mode={params.mode as Mode} />
    ), queryBodyElysia)

