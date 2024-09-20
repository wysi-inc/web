import { Elysia, t } from 'elysia'
import HtmxPage from '../libs/routes';
import type { Route } from '../types/osu';
import Admin from '../components/web/Admin';
import { verifyUser } from '../libs/auth';
import { addBadge, removeBadge, removeRole, setRole } from '../db/users/update_user';
import Alert from '../components/web/Alert';
import type { UserCookie } from '../types/users';

export const ROLES = ["owner", "admin"];

export function isAdmin(user: UserCookie) {
    if (user.role === "owner") return true;
    if (user.role === "admin") return true;
    return false;
}

export const adminRoutes = new Elysia({ prefix: '/admin' })
    .get("/", async ({ lang, t, set, request, jwt, cookie }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || !isAdmin(user)) {
            set.redirect = "/";
            return "Unauthorized";
        }
        return (
            <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
                <Admin t={t} user={user} />
            </HtmxPage>
        );
    })
    .put("/badges", async ({ body, jwt, cookie, set }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || !isAdmin(user)) {
            set.status = 401;
            return "Unauthorized";
        }
        const [done, msg] = await addBadge(body.id, Number(body.badge));
        if (!done) return <Alert type='error' msg={msg} />;
        return <Alert type='success' msg={msg} />;
    }, {
        body: t.Object({
            id: t.String(),
            badge: t.String()
        })
    })
    .delete("/badges/:id/:badge", async ({ params, jwt, cookie, set }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || !isAdmin(user)) {
            set.status = 401;
            return "Unauthorized";
        }
        const [done, msg] = await removeBadge(Number(params.id), Number(params.badge));
        if (!done) return <Alert type='error' msg={msg} />;
        return <Alert type='success' msg={msg} />;
    })
    .put("/roles", async ({ body, jwt, cookie, set }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || user.role !== "owner") {
            set.status = 401;
            return "Unauthorized";
        }
        const [done, msg] = await setRole(body.id, body.role);
        if (!done) return <Alert type='error' msg={msg} />;
        return <Alert type='success' msg={msg} />;
    }, {
        body: t.Object({
            id: t.String(),
            role: t.String()
        })
    })
    .delete("/roles/:id", async ({ params, jwt, cookie, set }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || user.role !== "owner") {
            set.status = 401;
            return "Unauthorized";
        }
        const [done, msg] = await removeRole(Number(params.id));
        if (!done) return <Alert type='error' msg={msg} />;
        return <Alert type='success' msg={msg} />;
    })
