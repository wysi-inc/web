import { Elysia, t } from 'elysia'
import type { Category, Mode, Route } from '../types/osu';
import Rankings from '../components/user/Rankings';
import HtmxPage from '../libs/routes';

import { plugins } from './plugins';
export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    .use(plugins)
    .get("/", async ({ lang, t, request, user }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
            <Rankings user={user}
                mode={"osu"}
                category={"performance"}
                page={1}
            />
        </HtmxPage>
    ))
    .get("/:mode/:category", ({ query, lang, t, params, request, user }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
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
    .get("/:mode/:category/:page", ({ query, lang, t, params, request, user }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
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
