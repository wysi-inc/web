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
    <label class="m-0 cursor-pointer select-none rounded-sm border border-base-content bg-opacity-75 p-0 text-center has-[:disabled]:cursor-default has-[:checked]:bg-secondary"
        style={{
            fontSize: '0.5rem',
            width: `${width}rem`,
            height: `${height || 1}rem`,
            lineHeight: `${height || 1}rem`,
        }}>
        {char}
        <input name={`keyboard_key_${code}`} class="hidden" id={`keyboard_key_${code}`}
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

    return (<>
        <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} grid md:grid-cols-3 rounded-lg bg-base-200`}>
            <div class="p-4 pt-9 relative">
                <h1 class="absolute left-3 top-2">{txt(p.lang, "user.sections.setup.tabs.keyboard")}</h1>
                <div class="center flex max-h-72 max-w-full">
                    <div class="flex h-36 items-center justify-center auto_scale" id="keyboard_display">
                        {(() => {
                            switch (p.keyboard?.layout) {
                                case "k2":
                                    return (<K2 keys={p.keyboard?.keys} />);
                                case "k3":
                                    return (<K3 keys={p.keyboard?.keys} />);
                                case "k3_uwu":
                                    return (<K3_Wooting_UwU keys={p.keyboard?.keys} />);
                                case "k3_sayo":
                                    return (<K3_SayoDevice keys={p.keyboard?.keys} />);
                                case "k4":
                                    return (<K4 keys={p.keyboard?.keys} />);
                                case "k60":
                                    return (<K60 keys={p.keyboard?.keys} />);
                                case "k75":
                                    return (<K75 keys={p.keyboard?.keys} />);
                                case "ktkl":
                                    return (<KTkl keys={p.keyboard?.keys} />);
                                case "kfull":
                                    return (<KFull keys={p.keyboard?.keys} />);
                            }
                        })()}
                    </div>
                </div>
            </div>
            <div class="relative md:col-span-2 flex grow flex-col gap-2 rounded-lg bg-base-300 px-5 py-4">
                {p.editable ?
                    <div class="tooltip tooltip-left absolute right-2 top-1 cursor-help"
                        data-tip={`Click on the keys to highlight them.`}>
                        <i class="fa-solid fa-circle-question" />
                    </div> : null
                }
                <div>
                    <div class="text-xs">{txt(p.lang, "user.sections.setup.name")}:</div>
                    <label class="peer input input-sm input-bordered h-6 w-full px-2 py-1 text-base-content has-[:disabled]:border-0 has-[:disabled]:bg-base-300 has-[:disabled]:p-0">
                        <input id="keyboard_name" name="keyboard_name" class="h-6 bg-transparent"
                            type="text" placeholder={txt(p.lang, "user.sections.setup.name")} value={p.keyboard?.name || ""} />
                    </label>
                </div>
                <div class="has-[:disabled]:hidden">
                    <div class="text-xs">{txt(p.lang, "user.sections.setup.kb_layout")}:</div>
                    <label class="input input-sm input-bordered h-6 w-full px-2 py-1 text-base-content has-[:disabled]:border-0 has-[:disabled]:bg-base-300 has-[:disabled]/setup:p-0">
                        <select name="keyboard_layout" class="h-6 bg-transparent">
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
                    </label>
                </div>
                <div>
                    <label class="peer/rt group-has-[:disabled]/setup:hidden has-[:checked]:block">
                        <div class="flex flex-row items-center gap-2">
                            <input type="checkbox" checked={p.keyboard?.rt || false} class="checkbox-secondary checkbox checkbox-xs group-has-[:disabled]/setup:hidden" name="keyboard_rt" />
                            <div class="text-xs">Rapid Trigger:</div>
                        </div>
                    </label>
                    <div class="hidden peer-has-[:checked]/rt:block">
                        <div class="text-xs hidden group-has-[:disabled]/setup:block">Rapid Trigger:</div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <div class="w-44">
                                <SetupInput editable={p.editable} id="keyboard_actuation" name="Actuation" measure="mm" value={p.keyboard?.actuation} type="number" />
                            </div>
                            <div class="w-24">
                                <SetupInput editable={p.editable} id="keyboard_press" name="↓" measure="mm" value={p.keyboard?.press} type="number" />
                            </div>
                            <div class="w-24">
                                <SetupInput editable={p.editable} id="keyboard_release" name="↑" measure="mm" value={p.keyboard?.release} type="number" />
                            </div>
                        </div>
                    </div>
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
    </>);

}

export default KeyboardDisplay;
