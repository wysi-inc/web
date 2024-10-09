import { Elysia, t } from "elysia";
import Rankings from "../components/user/Rankings";
import HtmxPage from "../libs/routes";
import type { Category, Mode } from "../types/osu";
import { plugins } from "./plugins";

const ranking_routes_data = new Elysia()
    .use(plugins)
    .get("/", async ({ lang, request, user }) => (
        <HtmxPage lang={lang} headers={request.headers} user={user}>
            <Rankings user={user}
                mode={"osu"}
                category={"performance"}
                page={1}
            />
        </HtmxPage>
    ))
    .get("/:mode/:category", ({ query, lang, params, request, user }) => (
        <HtmxPage lang={lang} headers={request.headers} user={user}>
            <Rankings
                mode={params.mode as Mode}
                category={params.category as Category}
                page={1}
                country={query?.country}
            />
        </HtmxPage>
    ), {
        query: t.Optional(t.Object({
            country: t.Optional(t.String())
        }))
    })
    .get("/:mode/:category/:page", ({ query, lang, params, request, user }) => (
        <HtmxPage lang={lang} headers={request.headers} user={user}>
            <Rankings
                mode={params.mode as Mode}
                category={params.category as Category}
                page={Number(params.page) | 0}
                country={query?.country}
            />
        </HtmxPage>
    ), {
        query: t.Optional(t.Object({
            country: t.Optional(t.String())
        }))
    })

export const ranking_routes = new Elysia()
    .use(new Elysia({ prefix: "/rankings" }).use(ranking_routes_data))
