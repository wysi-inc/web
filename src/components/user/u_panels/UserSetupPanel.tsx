import type { Setup } from "@/src/models/User";
import Tablet from "./setup/Tablet";
import Keyboard from "./setup/Keyboard";

type Props = {
    setup: Setup | undefined;
}

const UserSetupPanel = (props: Props) => {

    if (!props.setup) return <div>No setup found</div>;

    return (
        <div>
            <form id="setup_form" class="grid grid-cols-2 gap-2">
                <Tablet tablet={props.setup.tablet} />
                <Keyboard keyboard={props.setup.keyboard} />
            </form>
            <script src="/public/js/setup.js" />
        </div>
    );
}

export default UserSetupPanel;
