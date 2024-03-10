import { Elysia, t } from 'elysia'
import { beatmapsController, beatmapsetController, beatmapsetListController, beatmapsetScoresController } from '../controllers/beatmaps';

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
    .get("/", beatmapsController)
    .post("/list", beatmapsetListController, queryBodyElysia)
    .post("/list/:cursor", beatmapsetListController, queryBodyElysia)
    .get("/:set_id", beatmapsetController)
    .get("/:set_id/:beatmap_id", beatmapsetController)
    .post("/:set_id/:beatmap_id/scores/:mode", beatmapsetScoresController, queryBodyElysia)

