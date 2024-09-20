import { Elysia, t } from 'elysia'
import HtmxPage from '../libs/routes';
import type { Route } from '../types/osu';
import Admin from '../components/web/Admin';
import { verifyUser } from '../libs/auth';
import { addBadge } from '../db/users/update_user';
import Alert from '../components/web/Alert';

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
    .put("/badges", async ({ body, jwt, cookie, set }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || user.admin !== true) {
            set.status = 401;
            set.redirect = "/";
            return "Unauthorized";
        }
        console.log(body);
        const [done, msg] = await addBadge(body.id, body.badge);
        if (!done) return <Alert type='error' msg={msg} />;
        return <Alert type='success' msg={msg} />;
    }, {
        body: t.Object({
            id: t.String(),
            badge: t.String()
        })
    })
