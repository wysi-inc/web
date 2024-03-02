import { Elysia, t } from 'elysia'
import { html } from "@elysiajs/html";
import { getPage } from '../resources/pages'
import Beatmaps from '../components/beatmap/Beatmaps';
import BeatmapsList from '../components/beatmap/BeatmapsList';

const queryBodyElysia = {
    body: t.Object({
        title: t.Optional(t.String()),
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
        mode_osu: t.Optional(t.String()),
        mode_taiko: t.Optional(t.String()),
        mode_fruits: t.Optional(t.String()),
        mode_mania: t.Optional(t.String()),
        status_ranked: t.Optional(t.String()),
        status_approved: t.Optional(t.String()),
        status_qualified: t.Optional(t.String()),
        status_loved: t.Optional(t.String()),
        status_pending: t.Optional(t.String()),
        status_wip: t.Optional(t.String()),
        status_graveyard: t.Optional(t.String()),
        offset: t.Optional(t.String())
    })
}

export const beatmapRoutes = new Elysia({ prefix: '/beatmaps' })
    .use(html())
    .get("/", ({ request, html }) => getPage(request, html,
        <Beatmaps query={undefined} />
    ))
    .post("/list", ({ html, body }) => html(
        <BeatmapsList query={body} />
    ), queryBodyElysia)

