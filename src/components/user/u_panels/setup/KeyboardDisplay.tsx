import { isEmpty } from "@/src/libs/web_utils";
import type { Setup } from "@/src/models/User";
import { txt } from "@/src/tasks/files";
import { K2 } from "./Keyboards/K2";
import { K3, K3_SayoDevice, K3_Wooting_UwU } from "./Keyboards/K3";
import { K4 } from "./Keyboards/K4";
import { K60 } from "./Keyboards/K60";
import { K75 } from "./Keyboards/K75";
import { KFull } from "./Keyboards/KFull";
import { KTkl } from "./Keyboards/KTkl";
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

export const Key = ({ char, code, width, keys, height }: KeyProps) => (
    <label class="m-0 cursor-pointer rounded-sm border border-base-content bg-opacity-75 p-0 text-center has-[:checked]:bg-secondary"
        style={{
            fontSize: '0.5rem',
            width: `${width}rem`,
            height: `${height || 1}rem`,
            lineHeight: `${height || 1}rem`,
        }}>
        {char}
        <input name={`keyboard_key_${code}`} class="hidden"
            type="checkbox" checked={keys?.includes(code)} />
    </label>
);

export const Empty = () => <div class="size-4" />

export const KEYBOARD_LAYOUTS = ["k2", "k3", "k3_uwu", "k3_sayo", "k4", "k60", "k75", "ktkl", "kfull", ""]

function KeyboardDisplay(p: {
    keyboard: Setup["keyboard"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.keyboard);

    if (!p.editable && empty) return <></>;

    return <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} flex flex-col rounded-lg bg-neutral`}>
        <div class="flex flex-row items-center justify-between pe-2">
            <h1 class="px-2 py-1 text-neutral-content">{txt(p.lang, "user.sections.setup.tabs.keyboard")}</h1>
            {p.editable ?
                <div class="tooltip tooltip-left ms-auto"
                    data-tip={`Click on the keys you use to highlight them.`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex grow flex-col gap-2 rounded-lg bg-base-300 p-2">
            <div class="flex h-36 items-center justify-center" id="keyboard_display">
                {p.keyboard?.layout === "k2" && <K2 keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "k3" && <K3 keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "k3_uwu" && <K3_Wooting_UwU keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "k3_sayo" && <K3_SayoDevice keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "k4" && <K4 keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "k60" && <K60 keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "k75" && <K75 keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "ktkl" && <KTkl keys={p.keyboard?.keys} />}
                {p.keyboard?.layout === "kfull" && <KFull keys={p.keyboard?.keys} />}
            </div>
            <div class="flex grow flex-col gap-2">
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{txt(p.lang, "user.sections.setup.name")}:</span>
                    </div>
                    <input id="keyboard_name" name="keyboard_name"
                        type="text" placeholder={txt(p.lang, "user.sections.setup.name")}
                        class="peer input input-sm input-bordered w-full disabled:hidden" value={p.keyboard?.name || ""} />
                    <span class="input input-sm hidden bg-base-300 peer-disabled:block">{p.keyboard?.name}</span>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{txt(p.lang, "user.sections.setup.kb_layout")}:</span>
                    </div>
                    <select class="peer select select-bordered select-sm w-full disabled:hidden" name="keyboard_layout">
                        <option value="k0" selected={!p.keyboard?.layout}>{txt(p.lang, "user.sections.setup.layout.k0")}</option>
                        <option value="k2" selected={p.keyboard?.layout === "k2"}>{txt(p.lang, "user.sections.setup.layout.k2")}</option>
                        <option value="k3" selected={p.keyboard?.layout === "k3"}>{txt(p.lang, "user.sections.setup.layout.k3")}</option>
                        <option value="k3_uwu" selected={p.keyboard?.layout === "k3_uwu"}>Wooting UwU</option>
                        <option value="k3_sayo" selected={p.keyboard?.layout === "k3_sayo"}>Sayo Device O3C</option>
                        <option value="k4" selected={p.keyboard?.layout === "k4"}>{txt(p.lang, "user.sections.setup.layout.k4")}</option>
                        <option value="k60" selected={p.keyboard?.layout === "k60"}>{txt(p.lang, "user.sections.setup.layout.k60")}</option>
                        <option value="k75" selected={p.keyboard?.layout === "k75"}>{txt(p.lang, "user.sections.setup.layout.k75")}</option>
                        <option value="ktkl" selected={p.keyboard?.layout === "ktkl"}>{txt(p.lang, "user.sections.setup.layout.ktkl")}</option>
                        <option value="kfull" selected={p.keyboard?.layout === "kfull"}>{txt(p.lang, "user.sections.setup.layout.kfull")}</option>
                    </select>
                    <span class="input input-sm hidden bg-base-300 peer-disabled:block">
                        {p.keyboard?.layout ? txt(p.lang, `user.sections.setup.layout.${p.keyboard.layout.split("_")[0]}`) : undefined}
                    </span>
                </label>
                <div class="peer/rt form-control">
                    <label class="label cursor-pointer">
                        <span class="label-text">Rapid Trigger:</span>
                        <input type="checkbox" checked={p.keyboard?.rt || false} class="checkbox-secondary checkbox" name="keyboard_rt" />
                    </label>
                </div>
                <div class="hidden flex-row flex-wrap gap-2 peer-has-[:checked]/rt:flex">
                    <SetupInput editable={p.editable} id="keyboard_actuation" name="Actuation" measure="mm" value={p.keyboard?.actuation} type="number" />
                    <SetupInput editable={p.editable} id="keyboard_press" name="↓" measure="mm" value={p.keyboard?.press} type="number" />
                    <SetupInput editable={p.editable} id="keyboard_release" name="↑" measure="mm" value={p.keyboard?.release} type="number" />
                </div>
                <div class="hidden" id="keyboard_store">
                    <template id="k0_temp">
                        <div />
                    </template>
                    <template id="k2_temp">
                        <K2 />
                    </template>
                    <template id="k3_temp">
                        <K3 />
                    </template>
                    <template id="k3_uwu_temp">
                        <K3_Wooting_UwU />
                    </template>
                    <template id="k3_sayo_temp">
                        <K3_SayoDevice />
                    </template>
                    <template id="k4_temp">
                        <K4 />
                    </template>
                    <template id="k60_temp">
                        <K60 />
                    </template>
                    <template id="k75_temp">
                        <K75 />
                    </template>
                    <template id="ktkl_temp">
                        <KTkl />
                    </template>
                    <template id="kfull_temp">
                        <KFull />
                    </template>
                </div>
            </div>
        </div>
    </div>;
}

export default KeyboardDisplay;
