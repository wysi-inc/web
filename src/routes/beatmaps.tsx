import { Elysia, t } from 'elysia'
import { html } from "@elysiajs/html";
import { getPage } from '../resources/pages'
import Beatmaps from '../components/beatmap/Beatmaps';
import BeatmapsList from '../components/beatmap/BeatmapsList';
import BeatmapsetPage from '../components/beatmap/BeatmapsetPage';

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

const queryQueryElysia = {
    query: t.Object({
        cursor: t.Optional(t.String()),
        mode: t.Optional(t.String()),
        section: t.Optional(t.String())
    })
}

export const beatmapRoutes = new Elysia({ prefix: '/beatmaps' })
    .use(html())
    .get("/", ({ request, html }) => getPage(request, html,
        <Beatmaps query={undefined} />
    ))
    .get("/:id", ({ request, html, params }) => getPage(request, html,
        <BeatmapsetPage id={Number(params.id)} />
    ))
    .post("/list", ({ html, body }) => html(
        <BeatmapsList body={body} />
    ), queryBodyElysia)
    .get("/list", ({ html, query }) => html(
        <BeatmapsList query={query} />
    ), queryQueryElysia)
