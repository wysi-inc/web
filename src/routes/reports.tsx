import { Elysia, t } from "elysia";
import { verifyUser } from "../libs/auth";
import { deleteReport, submitReport } from "../db/web/reports";
import type { Route } from "../types/osu";
import Alert from "../components/web/Alert";
import { isAdmin } from "./admin";

export const reportRoutes = new Elysia({ prefix: '/report' })
    .put("/:target", async ({ set, params, body, jwt, cookie }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user) {
            set.status = 401;
            return "Unauthorized";
        }
        const report_id = await submitReport(body, Number(params.target), user.id);
        if (report_id === -1) return <Alert type="error" msg="Your report could not be submited. Try again later!" />;
        return <Alert type="success" msg={<>Your report has been submited. Report number: <kbd class="text-white kbd kbd-sm">{report_id}</kbd></>} />;
    }, {
        body: t.Object({
            category: t.String(),
            description: t.String(),
        })
    })
    .delete("/:id", async ({ params, set, jwt, cookie }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || !isAdmin(user)) {
            set.status = 401;
            return "Unauthorized";
        }
        const deleted = await deleteReport(Number(params.id));
        if (!deleted) {
            set.status = 500;
            return "Something went wrong";
        }
        return "Report deleted successfully";
    })
