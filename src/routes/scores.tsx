import { Elysia } from "elysia";
import ScorePage from "../components/score/ScorePage";
import HtmxPage from "../libs/routes";
import { plugins } from "./plugins";

const score_routes_data = new Elysia({ prefix: "/:id" }).use(plugins).get("/", ({ params, set, lang, request, user }) => (
    <HtmxPage lang={lang} set={set} req={request} user={user}>
        <ScorePage score_id={Number(params.id)} />
    </HtmxPage>
));

export const scores_routes = new Elysia()
    .use(new Elysia({ prefix: "/scores" }).use(score_routes_data))
    .use(new Elysia({ prefix: "/score" }).use(score_routes_data));
