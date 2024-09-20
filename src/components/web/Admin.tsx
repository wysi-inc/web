import { DonationModel } from "@/src/models/Donations";
import { User } from "@/src/models/User";
import Panel from "../user/Panel";
import Reports from "./admin/Reports";
import { ReportModel } from "@/src/models/Report";
import Badges from "./admin/Badges";
import AdminAdmins from "./admin/AdminAdmins";
import type { UserCookie } from "@/src/types/users";

async function Admin(p: { t: any, user: UserCookie }) {

    const user_count = await User.countDocuments();

    const users_with_setup = await User.countDocuments({ setup: { $exists: true, $ne: null } });

    const donation_count = await DonationModel.countDocuments();

    const report_count = await ReportModel.countDocuments();

    return (<>
        <section class="rounded-lg stats bg-base-300 stats-vertical md:stats-horizontal shadow">
            <div class="stat">
                <div class="stat-title">Donations</div>
                <div class="stat-value">{donation_count.toLocaleString()}</div>
            </div>
            <div class="stat">
                <div class="stat-title">Stored Users</div>
                <div class="stat-value">{user_count.toLocaleString()}</div>
            </div>
            <div class="stat">
                <div class="stat-title">Custom Setups</div>
                <div class="stat-value">{users_with_setup.toLocaleString()}</div>
            </div>
        </section>

        <Panel icon={<i class="fa-solid fa-certificate" />} title="Badges" code="reports" t={p.t}>
            <Badges />
        </Panel>

        <Panel icon={<i class="fa-solid fa-screwdriver-wrench" />} title="Admins" code="reports" t={p.t}>
            <AdminAdmins user={p.user} />
        </Panel>

        <Panel icon={<i class="fa-solid fa-triangle-exclamation" />} title={`Reports (${report_count})`} code="reports" t={p.t}>
            <Reports />
        </Panel>

    </>);
}

export default Admin;
