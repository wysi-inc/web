import type { Setup } from "@/src/models/User";
import Tablet from "./setup/Tablet";

type Props = {
    setup: Setup | undefined;
}

const UserSetupPanel = (props: Props) => {

    if (!props.setup) return <div>No setup found</div>;

    return (
        <div>
            <form>
                <Tablet tablet={props.setup.tablet} />
            </form>
        </div>
    );
}

export default UserSetupPanel;
