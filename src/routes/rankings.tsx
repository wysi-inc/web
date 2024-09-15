import { Elysia } from 'elysia'
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
    .get("/:mode/:category", ({ lang, t, params, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Rankings
                mode={params.mode as Mode}
                category={params.category as Category}
                page={1}
            />
        </HtmxPage>
    ))
    .get("/:mode/:category/:page", ({ lang, t, params, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Rankings
                mode={params.mode as Mode}
                category={params.category as Category}
                page={Number(params.page)}
            />
        </HtmxPage>
    ))
