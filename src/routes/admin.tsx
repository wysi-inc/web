import { Elysia, error, t } from 'elysia'
import HtmxPage from '../libs/routes';
import type { Route } from '../types/osu';
import Admin from '../components/web/Admin';
import { verifyUser } from '../libs/auth';
import { addBadge, addTablet, removeBadge, removeRole, removeTablet, setRole } from '../db/web/admin';
import Alert from '../components/web/Alert';
import type { UserCookie } from '../types/users';
import { TabletListItem } from '../components/web/admin/Tablets';

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
    .group("/badges", _ => _
        .put("/", async ({ body, jwt, cookie }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await addBadge(body.id, Number(body.badge));
            if (!res.done) {
                return error(res.code, res.msg)
            }
            return <Alert type='success' msg={res.msg} />;
        }, {
            body: t.Object({
                id: t.String(),
                badge: t.String()
            })
        })
        .delete("/:id/:badge", async ({ params, jwt, cookie }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await removeBadge(Number(params.id), Number(params.badge));
            if (!res.done) {
                return error(res.code, res.msg)
            }
            return <Alert type='success' msg={res.msg} />;
        })
    )
    .group("/roles", _ => _
        .put("/", async ({ body, jwt, cookie }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await setRole(body.id, body.role);
            if (!res.done) {
                return error(res.code, res.msg)
            }
            return <Alert type='success' msg={res.msg} />;
        }, {
            body: t.Object({
                id: t.String(),
                role: t.String()
            })
        })
        .delete("/:id", async ({ params, jwt, cookie }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await removeRole(Number(params.id));
            if (!res.done) {
                return error(res.code, res.msg)
            }
            return <Alert type='success' msg={res.msg} />;
        })
    )
    .group("/tablets", _ => _
        .put("/", async ({ body, jwt, cookie }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await addTablet(body.name, Number(body.w), Number(body.h));
            if (!res.done) {
                return error(res.code, res.msg);
            }
            return <TabletListItem id={res.id || ""} tablet={body} />;
        }, {
            body: t.Object({
                name: t.String(),
                w: t.String(),
                h: t.String()
            })
        })
        .delete("/:id", async ({ params, jwt, cookie }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await removeTablet(params.id);
            if (!res.done) {
                return error(res.code, res.msg);
            }
            return <Alert type='success' msg={res.msg} />;
        })
    )
