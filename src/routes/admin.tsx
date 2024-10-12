import { Elysia, error, t } from 'elysia';
import Admin from '../components/web/Admin';
import Alert from '../components/web/Alert';
import { TabletListItem } from '../components/web/admin/Tablets';
import { addBadge, addTablet, removeBadge, removeRole, removeTablet, setRole, sortBadges } from '../db/web/admin';
import HtmxPage from '../libs/routes';
import type { UserCookie } from '../types/users';
import { plugins } from './plugins';

export const ROLES = ["owner", "admin"];

export function isAdmin(user: UserCookie) {
    if (user.role === "owner") return true;
    if (user.role === "admin") return true;
    return false;
}

export const adminRoutes = new Elysia({ prefix: '/admin' })
    .use(plugins)
    .get("/", ({ lang, set, request, user }) => {
        if (!user || !isAdmin(user)) {
            set.redirect = "/";
            return "Unauthorized";
        }
        return (
            <HtmxPage lang={lang} req={request} set={set} user={user}>
                <Admin t={t} user={user} />
            </HtmxPage>
        );
    })
    .group("/badges", _ => _
        .put("/", async ({ body, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await addBadge(body.id, Number(body.badge));
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return <Alert type='success' msg={res.msg} />;
        }, {
            body: t.Object({
                id: t.String(),
                badge: t.String()
            })
        })
        .delete("/:id/:badge", async ({ params, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await removeBadge(Number(params.id), Number(params.badge));
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return <Alert type='success' msg={res.msg} />;
        })
        .post("/:id/sort", async ({ params, body, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await sortBadges(Number(params.id), body.badges);
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return res.msg;
        }, {
            body: t.Object({
                badges: t.Array(t.String())
            })
        })
    )
    .group("/roles", _ => _
        .put("/", async ({ body, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await setRole(body.id, body.role);
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return <Alert type='success' msg={res.msg} />;
        }, {
            body: t.Object({
                id: t.Numeric(),
                role: t.String()
            })
        })
        .delete("/:id", async ({ params, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await removeRole(Number(params.id));
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return <Alert type='success' msg={res.msg} />;
        })
    )
    .group("/tablets", _ => _
        .put("/", async ({ body, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await addTablet(body.name, body.w, body.h);
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return <TabletListItem id={res.id || ""} tablet={body} />;
        }, {
            body: t.Object({
                name: t.String(),
                w: t.Numeric(),
                h: t.Numeric()
            })
        })
        .delete("/:id", async ({ params, user }) => {
            if (!user || !isAdmin(user)) return error(401, "Unauthorized")
            const res = await removeTablet(params.id);
            if (res.error) return error(res.code, <Alert type="error" msg={res.msg} />);
            return <Alert type='success' msg={res.msg} />;
        })
    )
