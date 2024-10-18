import { Elysia, t } from "elysia";
import Alert from "../components/web/Alert";
import { deleteReport, submitReport } from "../db/web/reports";
import { isAdmin } from "./admin";
import { plugins } from "./plugins";

export const reportRoutes = new Elysia({ prefix: '/report' })
    .use(plugins)
    .put("/:target", async ({ set, params, body, user }) => {
        if (!user) {
            set.status = 401;
            return "Unauthorized";
        }
        const report_id = await submitReport(body, Number(params.target), user.id);
        if (report_id === -1) return <Alert type="error" msg="Your report could not be submited. Try again later!" />;
        return <Alert type="success" msg={<>Your report has been submited. Report number: <kbd class="kbd kbd-sm text-white">{report_id}</kbd></>} />;
    }, {
        body: t.Object({
            category: t.String(),
            description: t.String(),
        })
    })
    .delete("/:id", async ({ params, set, user }) => {
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
