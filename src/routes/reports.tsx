import { Elysia, t } from "elysia";
import { verifyUser } from "../libs/auth";
import { deleteReport, submitReport } from "../db/web/reports";
import type { Route } from "../types/osu";

export const reportRoutes = new Elysia({ prefix: '/report' })
    .put("/:target", async ({ set, params, body, jwt, cookie }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user) {
            set.status = 401;
            return "Unauthorized";
        }
        const report_id = await submitReport(body, Number(params.target), user.id);
        if (report_id === -1) return (
            <div role="alert" class="alert alert-error">
                <i class="fa-solid fa-circle-xmark" />
                <span>Your report could not be submited. Try again later!</span>
            </div>
        );
        return (
            <div role="alert" class="alert alert-success">
                <i class="fa-solid fa-circle-check" />
                <span>Your report has been submited. Report number: <kbd class="text-white kbd kbd-sm">{report_id}</kbd></span>
            </div>
        );
    }, {
        body: t.Object({
            category: t.String(),
            description: t.String(),
        })
    })
    .delete("/:id", async ({ params, set, jwt, cookie }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || !user.admin) {
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
