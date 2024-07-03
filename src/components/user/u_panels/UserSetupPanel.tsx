import TabletDisplay from "./setup/TabletDisplay";
import KeyboardDisplay from "./setup/KeyboardDisplay";
import Computer from "./setup/Computer";
import MouseDisplay from "./setup/MouseDisplay";
import Peripherals from "./setup/Peripherals";
import { User } from "@/src/models/User";

type Props = {
    logged_id?: number;
    page_id: number;
}

async function UserSetupPanel({ logged_id, page_id }: Props) {

    const editable = page_id === logged_id;

    const user = await User.findOne({ user_id: page_id });
    const setup = user?.setup;

    if (!setup) return <>This user hasn't specified their setup</>;

    return <div id="setup_panel">
        <form id="setup_form" hx-post={editable ? `/users/${page_id}/setup` : ""}
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
            {editable ? <>
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
                <script src="/public/js/setup.js" />
            </> : <></>
            }
        </form>
    </div>;
}

export default UserSetupPanel;
