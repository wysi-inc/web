import TabletDisplay from "./setup/TabletDisplay";
import KeyboardDisplay from "./setup/KeyboardDisplay";
import Computer from "./setup/Computer";
import MouseDisplay from "./setup/MouseDisplay";
import Peripherals from "./setup/Peripherals";
import { User, type Setup } from "@/src/models/User";

type Props = {
    logged_id?: number,
    page_id: number,
    setup?: Setup,
}

async function UserSetupPanel(p: Props) {

    const editable = p.page_id === p.logged_id;

    if (!p.setup) {
        const user = await User.findOne({ user_id: p.page_id });
        if (!user || !user.setup && !editable) return <>This user hasn't specified their setup</>;
        else if (user?.setup) p.setup = user.setup as any;
    }

    return (
        <div id="setup_panel">
            <form id="setup_form" class="peer flex flex-col-reverse gap-2"
                hx-put={editable ? `/users/${p.page_id}/setup/submit` : undefined}
                hx-trigger="submit" hx-swap="outerHTML" hx-target="#setup_panel" onchange="setupFormChange(this)" onsubmit="this.disabled = true">
                <fieldset class="group w-full grid md:grid-cols-2 gap-4"
                    id="setup_fieldset" disabled>
                    <TabletDisplay editable={editable} tablet={p.setup?.tablet} />
                    <KeyboardDisplay editable={editable} keyboard={p.setup?.keyboard} />
                    <MouseDisplay editable={editable} mouse={p.setup?.mouse} />
                    <Peripherals editable={editable} peripherals={p.setup?.peripherals} />
                    <Computer editable={editable} computer={p.setup?.computer} />
                </fieldset>
            </form>
            {editable ? <>
                <button type="button" class="peer-has-[:enabled]:hidden btn btn-sm btn-accent"
                    id="setup_form_edit" onclick="document.getElementsById('setup_fieldset').disabled = false">
                    <i class="fa-solid fa-pen-to-square" />
                </button>
                <button type="reset" class="peer-has-[:disabled]:hidden btn btn-sm btn-error"
                    id="setup_form_cancel" onclick="document.getElementsById('setup_fieldset').reset()">
                    <i class="fa-solid fa-xmark" />
                </button>
                <button type="submit" class="peer-has-[:disabled]:hidden btn btn-sm btn-success"
                    id="setup_form_submit" onclick="document.getElementsById('setup_fieldset').submit();">
                    <i class="fa-solid fa-check" />
                </button>
                <script src="/public/js/setup.js" />
            </> : <></>}
        </div>
    );
}

export default UserSetupPanel;
