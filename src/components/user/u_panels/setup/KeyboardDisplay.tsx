import type { Setup } from "@/src/models/User";
import KTkl from "./Keyboards/KTkl";
import KFull from "./Keyboards/KFull";
import K60 from "./Keyboards/K60";
import K75 from "./Keyboards/K75";
import K2 from "./Keyboards/K2";
import K3 from "./Keyboards/K3";
import K4 from "./Keyboards/K4";
import { isEmpty } from "@/src/libs/web_utils";
import SetupInput from "./SetupInput";

export type KeyboardProps = {
    keys?: string[];
}

type KeyProps = {
    char: string,
    code: string,
    width: number,
    keys?: string[],
    height?: number,
}

export const Key = ({ char, code, width, keys, height }: KeyProps) => {
    return (
        <label class="m-0 cursor-pointer rounded-sm border border-base-content bg-opacity-75 p-0 text-center has-[:checked]:bg-secondary"
            style={{
                fontSize: '0.5rem',
                width: `${width}rem`,
                height: `${height || 1}rem`,
                lineHeight: `${height || 1}rem`,
            }}>
            {char}
            <input name={`keyboard_key_${code}`} type="checkbox"
                checked={keys?.includes(code)} class="appearance-none"
            />
        </label>
    );
}

export const Empty = () => {
    return <div class="size-4" />
}

type Props = {
    keyboard: Setup["keyboard"],
    editable: boolean,
    t: any
}

const layoutText = {
    k2: "2 Keys",
    k3: "3 Keys",
    k4: "4 Keys",
    k60: "60% Keyboard",
    k75: "75% Keyboard",
    ktkl: "Tenkeyless Keyboard",
    kfull: "Full Keyboard",
};

const KeyboardDisplay = ({ t, keyboard, editable }: Props) => {

    const empty = isEmpty(keyboard);

    if (!editable && empty) return <></>;

    return <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} flex flex-col rounded-lg bg-neutral`}>
        <div class="flex flex-row items-center justify-between pe-2">
            <h1 class="px-2 py-1 text-neutral-content">{t.user.sections.setup.tabs.keyboard}</h1>
            {editable ?
                <div class="tooltip tooltip-left ms-auto"
                    data-tip={`Click on the keys you use to highlight them.`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex grow flex-col gap-2 rounded-lg bg-base-300 p-2">
            <div class="flex h-36 items-center justify-center" id="keyboard_display">
                {keyboard?.layout === "k2" && <K2 keys={keyboard?.keys} />}
                {keyboard?.layout === "k3" && <K3 keys={keyboard?.keys} />}
                {keyboard?.layout === "k4" && <K4 keys={keyboard?.keys} />}
                {keyboard?.layout === "k60" && <K60 keys={keyboard?.keys} />}
                {keyboard?.layout === "k75" && <K75 keys={keyboard?.keys} />}
                {keyboard?.layout === "ktkl" && <KTkl keys={keyboard?.keys} />}
                {keyboard?.layout === "kfull" && <KFull keys={keyboard?.keys} />}
            </div>
            <div class="flex grow flex-col gap-2">
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{t.user.sections.setup.name}:</span>
                    </div>
                    <input id="keyboard_name" name="keyboard_name"
                        type="text" placeholder={t.user.sections.setup.name}
                        class="peer input input-sm input-bordered w-full disabled:hidden" value={keyboard?.name || ""} />
                    <span class="input input-sm hidden bg-base-300 peer-disabled:block">{keyboard?.name}</span>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{t.user.sections.setup.kb_layout}:</span>
                    </div>
                    <select class="peer select select-bordered select-sm w-full disabled:hidden" name="keyboard_layout">
                        <option value="k0" selected={!keyboard?.layout}>{t.user.sections.setup.layout.k0}</option>
                        <option value="k2" selected={keyboard?.layout === "k2"}>{t.user.sections.setup.layout.k2}</option>
                        <option value="k3" selected={keyboard?.layout === "k3"}>{t.user.sections.setup.layout.k3}</option>
                        <option value="k4" selected={keyboard?.layout === "k4"}>{t.user.sections.setup.layout.k4}</option>
                        <option value="k60" selected={keyboard?.layout === "k60"}>{t.user.sections.setup.layout.k60}</option>
                        <option value="k75" selected={keyboard?.layout === "k75"}>{t.user.sections.setup.layout.k75}</option>
                        <option value="ktkl" selected={keyboard?.layout === "ktkl"}>{t.user.sections.setup.layout.ktkl}</option>
                        <option value="kfull" selected={keyboard?.layout === "kfull"}>{t.user.sections.setup.layout.kfull}</option>
                    </select>
                    <span class="input input-sm hidden bg-base-300 peer-disabled:block">
                        {keyboard?.layout ? layoutText[keyboard?.layout] : undefined}
                    </span>
                </label>
                <div class="peer/rt form-control">
                    <label class="label cursor-pointer">
                        <span class="label-text">Rapid Trigger:</span>
                        <input type="checkbox" checked={keyboard?.rt || false} class="checkbox-secondary checkbox" name="keyboard_rt" />
                    </label>
                </div>
                <div class="hidden flex-row flex-wrap gap-2 peer-has-[:checked]/rt:flex">
                    <SetupInput editable={editable} id="keyboard_actuation" name="Actuation" measure="mm" value={keyboard?.actuation} type="number" />
                    <SetupInput editable={editable} id="keyboard_press" name="↓" measure="mm" value={keyboard?.press} type="number" />
                    <SetupInput editable={editable} id="keyboard_release" name="↑" measure="mm" value={keyboard?.release} type="number" />
                </div>
                <div class="hidden" id="keyboard_store">
                    <template id="k0_temp">
                        <div />
                    </template>
                    <template id="k2_temp">
                        <K2 keys={[]} />
                    </template>
                    <template id="k3_temp">
                        <K3 keys={[]} />
                    </template>
                    <template id="k4_temp">
                        <K4 keys={[]} />
                    </template>
                    <template id="k60_temp">
                        <K60 keys={[]} />
                    </template>
                    <template id="k75_temp">
                        <K75 keys={[]} />
                    </template>
                    <template id="ktkl_temp">
                        <KTkl keys={[]} />
                    </template>
                    <template id="kfull_temp">
                        <KFull keys={[]} />
                    </template>
                </div>
            </div>
        </div>
    </div>;
}

export default KeyboardDisplay;
