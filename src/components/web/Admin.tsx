import { DonationModel } from "@/src/models/Donations";
import { User } from "@/src/models/User";
import Panel from "../user/Panel";
import Reports from "./admin/Reports";
import { ReportModel } from "@/src/models/Report";
import Badges from "./admin/Badges";
import AdminAdmins from "./admin/AdminAdmins";
import type { UserCookie } from "@/src/types/users";
import Tablets from "./admin/Tablets";

async function Admin(p: { t: any, user: UserCookie }) {

    const user_count = await User.countDocuments();

    const users_with_setup = await User.countDocuments({ setup: { $exists: true, $ne: null } });

    const donations = await DonationModel.find();

    const report_count = await ReportModel.countDocuments();

    return (<>
        <section class="stats shadow rounded-lg bg-base-300 stats-vertical md:stats-horizontal">
            <div class="stat">
                <div class="stat-title"><i class="fa-solid fa-database" /> Profiles Stored</div>
                <div class="stat-value">{user_count.toLocaleString()}</div>
                <div class="stat-desc">Total user profiles saved</div>
            </div>
            <div class="stat">
                <div class="stat-title"><i class="fa-solid fa-computer" /> Profile Setups</div>
                <div class="stat-value">{users_with_setup.toLocaleString()}</div>
                <div class="stat-desc">Profiles with custom setups</div>
            </div>
            <div class="stat">
                <div class="stat-title"><i class="fa-solid fa-heart" /> Donations</div>
                <div class="stat-value">{donations.reduce((a, b) => a + b.amount, 0)}€</div>
                <div class="stat-desc">Across {donations.length.toLocaleString()} contributions</div>
            </div>
        </section>

        <Panel icon={<i class="fa-solid fa-certificate" />} title="Badges" code="badges" t={p.t} manual={true}>
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
