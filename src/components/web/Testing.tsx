import { UserModel } from "@/src/models/User";
import Panel from "../user/Panel";
import UserSetupPanel from "../user/u_panels/UserSetupPanel";
import { K3, K3_SayoDevice, K3_Wooting_UwU } from "../user/u_panels/setup/Keyboards/K3";

async function Testing() {

    const icon = <i class="fa-solid fa-computer" />;
    const user = await UserModel.findOne({ user_id: 17018032 });

    if (!user) return;

    return (<>
        <Panel title="Setup" code="setup" icon={icon} manual={false}>
            <UserSetupPanel lang="en" setup={user.setup} page_id={17018032} logged_id={17018032} />
        </Panel>
    </>);
}

export default Testing;
