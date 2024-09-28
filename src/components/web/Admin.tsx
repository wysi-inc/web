import Panel from "../user/Panel";
import Reports from "./admin/Reports";
import { ReportModel } from "@/src/models/Report";
import Badges from "./admin/Badges";
import AdminAdmins from "./admin/AdminAdmins";
import type { UserCookie } from "@/src/types/users";
import Tablets from "./admin/Tablets";

async function Admin(p: { t: any, user: UserCookie }) {

    const report_count = await ReportModel.countDocuments();

    return (<>

        <Panel icon={<i class="fa-solid fa-certificate" />} title="Badges" code="badges" t={p.t} manual={false}>
            <Badges />
        </Panel>

        <Panel icon={<i class="fa-solid fa-screwdriver-wrench" />} title="Admins" code="admins" t={p.t} manual={true}>
            <AdminAdmins user={p.user} />
        </Panel>

        <Panel icon={<i class="fa-solid fa-triangle-exclamation" />} title={`Reports (${report_count})`} code="reports" t={p.t} manual={true}>
            <Reports />
        </Panel>

        <Panel icon={<i class="fa-solid fa-pen-ruler" />} title="Tablets" code="tablets" t={p.t} manual={true}>
            <Tablets />
        </Panel>
    </>);
}

export default Admin;
