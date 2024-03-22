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
            <form id="setup_form" class="flex flex-wrap-reverse gap-2">
                <fieldset class="peer grid w-full grid-cols-2 gap-4"
                    id="setup_fieldset" disabled>
                    <Tablet tablet={props.setup.tablet} />
                    <Keyboard keyboard={props.setup.keyboard} />
                </fieldset>
                <button type="submit" class="block peer-disabled:hidden btn btn-sm btn-success"
                    id="setup_form_submit">
                    <i class="fa-solid fa-check" />
                </button>
                <button type="button" class="block peer-disabled:hidden btn btn-sm btn-error"
                    id="setup_form_cancel">
                    <i class="fa-solid fa-xmark" />
                </button>
                <button type="button" class="hidden peer-disabled:block btn btn-sm btn-warning"
                    id="setup_form_edit">
                    <i class="fa-solid fa-pen-to-square" />
                </button>
            </form>
            <script src="/public/js/setup.js" />
        </div>
    );
}

export default UserSetupPanel;
