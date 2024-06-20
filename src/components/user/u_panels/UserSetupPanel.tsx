import type { Setup } from "@/src/models/User";
import TabletDisplay from "./setup/TabletDisplay";
import KeyboardDisplay from "./setup/KeyboardDisplay";
import Computer from "./setup/Computer";
import MouseDisplay from "./setup/MouseDisplay";
import Peripherals from "./setup/Peripherals";

type Props = {
    logged_id?: number;
    page_id: number;
    setup?: Setup;
}

const UserSetupPanel = ({ logged_id, page_id, setup }: Props) => {

    let form_post = "";
    let editable = false;
    if (page_id === logged_id) {
        form_post = `/users/${page_id}/setup`;
        editable = true;
    }

    return <div id="setup_panel">
        <form id="setup_form" hx-post={`/users/${page_id}/setup`}
            hx-trigger="submit" hx-swap="outerHTML" hx-target="#setup_panel"
            class="flex flex-col-reverse gap-2">
            <fieldset class="group w-full grid md:grid-cols-2 gap-4"
                id="setup_fieldset" disabled>
                <TabletDisplay editable={editable} tablet={setup?.tablet} />
                <KeyboardDisplay editable={editable} keyboard={setup?.keyboard} />
                <MouseDisplay editable={editable} mouse={setup?.mouse} />
                <Peripherals editable={editable} peripherals={setup?.peripherals} />
                <Computer editable={editable} computer={setup?.computer} />
            </fieldset>
            {editable &&
                <div class="flex flex-row-reverse gap-2">
                    <button type="reset" class="hidden btn btn-sm btn-error"
                        id="setup_form_cancel">
                        <i class="fa-solid fa-xmark" />
                    </button>
                    <button type="submit" class="hidden btn btn-sm btn-success"
                        id="setup_form_submit">
                        <i class="fa-solid fa-check" />
                    </button>
                    <button type="button" class="block btn btn-sm btn-accent"
                        id="setup_form_edit">
                        <i class="fa-solid fa-pen-to-square" />
                    </button>
                </div>
            }
        </form>
        <script src="/public/js/setup.js" />
    </div>;
}

export default UserSetupPanel;
