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

    return <div id="setup_panel">
        <form id="setup_form" hx-post={editable ? `/users/${p.page_id}/setup` : ""}
            hx-trigger="submit" hx-swap="outerHTML" hx-target="#setup_panel"
            class="flex flex-col-reverse gap-2">
            <fieldset class="group w-full grid md:grid-cols-2 gap-4"
                id="setup_fieldset" disabled>
                <TabletDisplay editable={editable} tablet={p.setup?.tablet} />
                <KeyboardDisplay editable={editable} keyboard={p.setup?.keyboard} />
                <MouseDisplay editable={editable} mouse={p.setup?.mouse} />
                <Peripherals editable={editable} peripherals={p.setup?.peripherals} />
                <Computer editable={editable} computer={p.setup?.computer} />
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
