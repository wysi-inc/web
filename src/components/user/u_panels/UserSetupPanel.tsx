import TabletDisplay from "./setup/TabletDisplay";
import KeyboardDisplay from "./setup/KeyboardDisplay";
import Computer from "./setup/Computer";
import MouseDisplay from "./setup/MouseDisplay";
import Peripherals from "./setup/Peripherals";
import { UserModel, type Setup } from "@/src/models/User";

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
            <form id="setup_form" class="group/setup flex flex-col-reverse items-end gap-2"
                hx-put={editable ? `/users/${p.page_id}/setup/submit` : undefined}
                hx-trigger="submit" hx-swap="outerHTML" hx-target="#setup_panel">
                <fieldset class="grid w-full gap-4 md:grid-cols-2" id="setup_fieldset" disabled>
                    <TabletDisplay lang={p.lang} editable={editable} tablet={p.setup?.tablet} />
                    <KeyboardDisplay lang={p.lang} editable={editable} keyboard={p.setup?.keyboard} />
                    <MouseDisplay lang={p.lang} editable={editable} mouse={p.setup?.mouse} />
                    <Peripherals lang={p.lang} editable={editable} peripherals={p.setup?.peripherals} />
                    <Computer lang={p.lang} editable={editable} computer={p.setup?.computer} />
                </fieldset>
                {editable ?
                    <div class="flex flex-row gap-2">
                        <button type="button" class="btn btn-accent btn-sm hidden group-has-[:disabled]/setup:block"
                            id="setup_form_edit" onclick="document.getElementById('setup_fieldset').disabled = false">
                            <i class="fa-solid fa-pen-to-square" />
                        </button>
                        <button type="reset" class="btn btn-error btn-sm group-has-[:disabled]/setup:hidden"
                            id="setup_form_cancel" onclick="document.getElementById('setup_form').reset(); document.getElementById('setup_fieldset').disabled = true">
                            <i class="fa-solid fa-xmark" />
                        </button>
                        <button type="submit" class="btn btn-success btn-sm group-has-[:disabled]/setup:hidden"
                            id="setup_form_submit">
                            <i class="fa-solid fa-check" />
                        </button>
                        <script src={`/public/js/setup.js?v=${Date.now()}`} />
                    </div> : <></>
                }
            </form>
        </div>
    </>);
}

export default UserSetupPanel;
