import type { Setup } from "@/src/models/User";
import TabletDisplay from "./setup/TabletDisplay";
import KeyboardDisplay from "./setup/KeyboardDisplay";
import Components from "./setup/Components";
import MouseDisplay from "./setup/MouseDisplay";

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
            class="flex flex-wrap-reverse justify-end gap-2 -mt-10">
            <fieldset class="peer grid w-full grid-cols-2 gap-4"
                id="setup_fieldset" disabled>
                {setup?.tablet || editable ?
                    <TabletDisplay tablet={setup?.tablet} /> : <></>
                }
                {setup?.keyboard || editable ?
                    <KeyboardDisplay keyboard={setup?.keyboard} /> : <></>
                }
                {setup?.mouse || editable ?
                    <MouseDisplay mouse={setup?.mouse} /> : <></>
                }
                {setup?.computer || setup?.peripherals || editable ?
                    <Components editable={editable}
                        computer={setup?.computer}
                        peripherals={setup?.peripherals}
                    /> : <></>
                }
            </fieldset>
            <div class="h-8" />
            {editable && <>
                <button type="submit" class="block peer-disabled:hidden btn btn-sm btn-success"
                    id="setup_form_submit">
                    <i class="fa-solid fa-check" />
                </button>
                <button type="reset" class="block peer-disabled:hidden btn btn-sm btn-error"
                    id="setup_form_cancel">
                    <i class="fa-solid fa-xmark" />
                </button>
                <button type="button" class="hidden peer-disabled:block btn btn-sm btn-accent"
                    id="setup_form_edit">
                    <i class="fa-solid fa-pen-to-square" />
                </button>
            </>}
        </form>
        <script src="/public/js/setup.js" />
    </div>;
}

export default UserSetupPanel;
