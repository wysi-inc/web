import { ReportModel } from "@/src/models/Report";
import type { UserCookie } from "@/src/types/users";
import Panel from "../user/Panel";
import AdminAdmins from "./admin/AdminAdmins";
import Badges from "./admin/Badges";
import Reports from "./admin/Reports";
import Tablets from "./admin/Tablets";
import Title from "./Title";

async function Admin(p: { t: any, user: UserCookie }) {

    const report_count = await ReportModel.countDocuments();

    return (<>
        <Panel icon={<i class="fa-solid fa-certificate" />} title="Badges" code="badges" manual={false}>
            <Badges />
        </Panel>

        <Panel icon={<i class="fa-solid fa-screwdriver-wrench" />} title="Admins" code="admins" manual={true}>
            <AdminAdmins user={p.user} />
        </Panel>

        <Panel icon={<i class="fa-solid fa-triangle-exclamation" />} title={`Reports (${report_count})`} code="reports" manual={true}>
            <Reports />
        </Panel>

        <Panel icon={<i class="fa-solid fa-pen-ruler" />} title="Tablets" code="tablets" manual={true}>
            <Tablets />
        </Panel>
        <Title scripts={["/public/js/drag.js",]} />
    </>);
}

export default Admin;
