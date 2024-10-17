import { UserModel, type Setup } from "@/src/models/User";
import Computer from "./setup/Computer";
import KeyboardDisplay from "./setup/KeyboardDisplay";
import MouseDisplay from "./setup/MouseDisplay";
import Peripherals from "./setup/Peripherals";
import TabletDisplay from "./setup/TabletDisplay";

async function UserSetupPanel(p: {
    logged_id?: number,
    page_id: number,
    setup?: Setup | null,
    lang: string
}) {

    const editable = p.page_id === p.logged_id;

    if (!p.setup) {
        const user = await UserModel.findOne({ user_id: p.page_id });
        if (!user || !user.setup && !editable) return <>This user hasn't specified their setup</>;
        else if (user?.setup) p.setup = user.setup as any;
    }

    return (<>
        <div id="setup_panel">
            <form id="setup_form" class="group/setup flex flex-col-reverse items-end gap-3"
                hx-put={editable ? `/users/${p.page_id}/setup/submit` : undefined}
                hx-trigger="submit"
                hx-swap="afterbegin" hx-target="#alerts"
                hx-on--after-request="document.getElementById('setup_fieldset').disabled = true"
            >
                <fieldset class="grid w-full gap-4 md:grid-cols-2" id="setup_fieldset" disabled>
                    <TabletDisplay lang={p.lang} editable={editable} tablet={p.setup?.tablet} />
                    <KeyboardDisplay lang={p.lang} editable={editable} keyboard={p.setup?.keyboard} />
                    <MouseDisplay lang={p.lang} editable={editable} mouse={p.setup?.mouse} />
                    <Peripherals lang={p.lang} editable={editable} peripherals={p.setup?.peripherals} />
                    <Computer lang={p.lang} editable={editable} computer={p.setup?.computer} />
                </fieldset>
                {editable ?
                    <div class="-mt-12 flex flex-row gap-2 pt-1">
                        <button type="button" class="btn btn-square btn-accent btn-sm hidden group-has-[:disabled]/setup:block"
                            id="setup_form_edit" onclick="document.getElementById('setup_fieldset').disabled = false">
                            <i class="fa-solid fa-pen-to-square" />
                        </button>
                        <button type="submit" class="btn btn-square btn-success btn-sm group-has-[:disabled]/setup:hidden"
                            id="setup_form_submit">
                            <i class="fa-solid fa-check" />
                        </button>
                        <button type="reset" class="btn btn-square btn-error btn-sm group-has-[:disabled]/setup:hidden"
                            id="setup_form_cancel">
                            <i class="fa-solid fa-xmark" />
                        </button>
                    </div> : null
                }
            </form>
        </div>
    </>);
}

export default UserSetupPanel;
