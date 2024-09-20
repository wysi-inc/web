import { Elysia, t } from 'elysia'
import type { Category, Mode, Route } from '../types/osu';
import Rankings from '../components/user/Rankings';
import HtmxPage from '../libs/routes';

export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    .get("/", ({ lang, t, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Rankings
                mode={"osu"}
                category={"performance"}
                page={1}
            />
        </HtmxPage>
    ))
    .get("/:mode/:category", ({ query, lang, t, params, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
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
    .get("/:mode/:category/:page", ({ query, lang, t, params: { mode, category, page }, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Rankings
                mode={mode as Mode}
                category={category as Category}
                page={Number(page) | 0}
                country={query?.country}
            />
        </HtmxPage>
    ), {
        query: t.Optional(t.Object({
            country: t.Optional(t.String())
        }))
    })
