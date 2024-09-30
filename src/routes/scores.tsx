import { Elysia } from "elysia";
import HtmxPage from "../libs/routes";
import ScorePage from "../components/score/ScorePage";
import { plugins } from "./plugins";

export const scoresRoutes = new Elysia({ prefix: '/scores/:id' })
    .use(plugins)
    .get("/", ({ params, lang, t, request, user }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
            <ScorePage score_id={Number(params.id)} />
        </HtmxPage>
    ))
