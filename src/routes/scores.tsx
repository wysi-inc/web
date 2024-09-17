import { Elysia } from "elysia";
import type { Route } from "../types/osu";
import HtmxPage from "../libs/routes";
import ScorePage from "../components/score/ScorePage";

export const scoresRoutes = new Elysia({ prefix: '/scores/:id' })
    .get("/", async ({ params, lang, t, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <ScorePage score_id={Number(params.id)} />
        </HtmxPage>
    ))

