import type { Setup } from "@/src/models/User";
import Tablet from "./setup/Tablet";
import Keyboard from "./setup/Keyboard";
import Components from "./setup/Components";

type Props = {
    id: number;
    setup: Setup | undefined;
    editable: boolean;
}

const UserSetupPanel = (props: Props) => {

    if (!props.setup) return <div>No setup found</div>;

    return <div>
        <form id="setup_form" hx-post={`/users/${props.id}/setup`}
            hx-trigger="submit" hx-swap="none"
            class="flex flex-wrap justify-end gap-2">
            <fieldset class="peer grid w-full grid-cols-2 gap-4"
                id="setup_fieldset" disabled>
                <Tablet tablet={props.setup.tablet} />
                <Keyboard keyboard={props.setup.keyboard} />
                <Components
                    computer={props.setup.computer}
                    peripherals={props.setup.peripherals}
                />
            </fieldset>
            {props.editable && <>
                <button type="submit" class="block peer-disabled:hidden btn btn-sm btn-success"
                    id="setup_form_submit">
                    <i class="fa-solid fa-check" />
                </button>
                <button type="reset" class="block peer-disabled:hidden btn btn-sm btn-error"
                    id="setup_form_cancel">
                    <i class="fa-solid fa-xmark" />
                </button>
                <button type="button" class="hidden peer-disabled:block btn btn-sm btn-warning"
                    id="setup_form_edit">
                    <i class="fa-solid fa-pen-to-square" />
                </button>
            </>}
        </form>
        <script src="/public/js/setup.js" />
    </div>;
}

export default UserSetupPanel;
