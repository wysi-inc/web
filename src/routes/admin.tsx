import { Elysia } from 'elysia'
import HtmxPage from '../libs/routes';
import type { Route } from '../types/osu';
import Admin from '../components/web/Admin';
import { verifyUser } from '../libs/auth';

export const adminRoutes = new Elysia({ prefix: '/admin' })
    .get("/", async ({ lang, t, set, request, jwt, cookie }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || user.admin !== true) {
            set.status = 401;
            set.redirect = "/";
            return "Unauthorized";
        }
        return (
            <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
                <Admin t={t} />
            </HtmxPage>
        );
    })
