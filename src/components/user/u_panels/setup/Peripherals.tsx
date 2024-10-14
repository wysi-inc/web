import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { isEmpty } from "@/src/libs/web_utils";
import { txt } from "@/src/tasks/files";

function Peripherals(p: {
    peripherals: Setup["peripherals"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.peripherals);

    if (!p.editable && empty) return <></>;

    return (<>
        <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} grid grid-cols-3 rounded-lg bg-base-200`}>
            <div class="center relative flex">
                <h1 class="absolute left-3 top-2">{txt(p.lang, "user.sections.setup.tabs.peripherals")}</h1>
            </div>
            <div class="relative col-span-2 flex grow flex-col gap-2 rounded-lg bg-base-300 px-5 py-4">
                {p.editable ?
                    <div class="tooltip tooltip-left absolute right-2 top-1 cursor-help"
                        data-tip={`Any empty fields won't be shown outside edit mode`}>
                        <i class="fa-solid fa-circle-question" />
                    </div> : null
                }
                <SetupInput editable={p.editable} type="text" id="peripherals_mouse" name={txt(p.lang, "user.sections.setup.tabs.mouse")} value={p.peripherals?.mouse} icon={<i class="size-4 fa-solid fa-computer-mouse" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_mousepad" name={txt(p.lang, "user.sections.setup.peripherals.mousepad")} value={p.peripherals?.mousepad} icon={<i class="size-4 fa-solid fa-square" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_keyboard" name={txt(p.lang, "user.sections.setup.tabs.keyboard")} value={p.peripherals?.keyboard} icon={<i class="size-4 fa-solid fa-keyboard" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_keypad" name={txt(p.lang, "user.sections.setup.peripherals.keypad")} value={p.peripherals?.keypad} icon={<i class="size-4 fa-solid fa-hockey-puck" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_headphones" name={txt(p.lang, "user.sections.setup.peripherals.headphones")} value={p.peripherals?.headphones} icon={<i class="size-4 fa-solid fa-headphones" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_camera" name={txt(p.lang, "user.sections.setup.peripherals.camera")} value={p.peripherals?.camera} icon={<i class="size-4 fa-solid fa-camera" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_microphone" name={txt(p.lang, "user.sections.setup.peripherals.microphone")} value={p.peripherals?.microphone} icon={<i class="size-4 fa-solid fa-microphone" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_monitor" name={txt(p.lang, "user.sections.setup.peripherals.monitor")} value={p.peripherals?.monitor} icon={<i class="size-4 fa-solid fa-desktop" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_audio" name={txt(p.lang, "user.sections.setup.peripherals.audio")} value={p.peripherals?.audio} icon={<i class="size-4 fa-solid fa-sliders" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_desk" name={txt(p.lang, "user.sections.setup.peripherals.desk")} value={p.peripherals?.desk} icon={<i class="size-4 fa-solid fa-database" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_chair" name={txt(p.lang, "user.sections.setup.peripherals.chair")} value={p.peripherals?.chair} icon={<i class="size-4 fa-solid fa-chair" />} />
            </div>
        </div>
    </>);
}

export default Peripherals;
