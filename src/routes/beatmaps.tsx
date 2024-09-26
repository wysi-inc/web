import { Elysia, t } from 'elysia'
import { modeUnion, type Mode, type Route } from '../types/osu';
import BeatmapsetSearch from '../components/beatmap/BeatmapsetSearch';
import BeatmapsList from '../components/beatmap/BeatmapsList';
import BeatmapsetPage from '../components/beatmap/BeatmapsetPage';
import BeatmapScoreTable from '../components/beatmap/BeatmapScoreTable';
import HtmxPage from '../libs/routes';
import { BeatmapCollectionCard } from '../components/beatmap/BeatmapCollectionCard';
import { verifyUser } from '../libs/auth';
import { v2 } from 'osu-api-extended';
import { apicall } from '../tasks/logs';
import { plugins } from './plugins';
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
        mode: t.Optional(t.String()),
        status: t.Optional(t.String()),
        offset: t.Optional(t.String()),
        sorting: t.Optional(t.String()),
    })
}

export const beatmapRoutes = new Elysia({ prefix: '/beatmaps' })
    .get("/:id", async ({ params, set }) => {
        const res = await v2.beatmap.id.details(params.id) as any;
        apicall();
        if (res.error) return "Beatmap does not exist";
        return set.redirect = `/beatmapsets/${res.beatmapset_id}/${params.id}`;
    }, {
        params: t.Object({
            id: t.Numeric()
        })
    })

export const beatmapsetRoutes = new Elysia({ prefix: '/beatmapsets' })
    .use(plugins)
    .get("/", async ({ lang, t, request, jwt, cookie }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <BeatmapsetSearch />
        </HtmxPage>
    ))
    .post("/list", ({ body }) => (
        <BeatmapsList body={body} offset={"0"} />
    ), queryBodyElysia)
    .post("/list/:offset", ({ body, params }) => (
        <BeatmapsList body={body} offset={params.offset} />
    ), queryBodyElysia)
    .get("/:set_id", async ({ lang, t, request, jwt, cookie, params }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <BeatmapsetPage set_id={params.set_id} />
        </HtmxPage>
    ), {
        params: t.Object({
            set_id: t.Numeric()
        })
    })
    .get("/:set_id/:beatmap_id", async ({ lang, t, request, jwt, cookie, params }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <BeatmapsetPage set_id={params.set_id} beatmap_id={params.beatmap_id} />
        </HtmxPage>
    ), {
        params: t.Object({
            set_id: t.Numeric(),
            beatmap_id: t.Numeric()
        })
    })
    .post("/:set_id/:beatmap_id/scores/:mode", async ({ params, jwt, cookie, body }) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        return <BeatmapScoreTable b_id={params.beatmap_id} logged_id={user?.id} mode={params.mode} body={body} />
    }, {
        params: t.Object({
            set_id: t.Numeric(),
            beatmap_id: t.Numeric(),
            mode: modeUnion
        })
    })
    .post("/collectioncard/:hash", ({ params }) => (
        <BeatmapCollectionCard hash={params.hash} />
    ))

