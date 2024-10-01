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

    return <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <div class="flex flex-row justify-between items-center pe-2">
            <h1 class="py-1 px-2 text-neutral-content">Peripherals</h1>
            {p.editable ?
                <div class="ms-auto tooltip tooltip-left"
                    data-tip={`Any empty fields won't be shown outside edit mode`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <SetupInput editable={p.editable} type="text" id="peripherals_mouse" name={txt(p.lang, "user.sections.setup.tabs.mouse")} value={p.peripherals?.mouse} icon={<i class="fa-solid fa-computer-mouse" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_mousepad" name={txt(p.lang, "user.sections.setup.peripherals.mousepad")} value={p.peripherals?.mousepad} icon={<i class="fa-solid fa-square" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_keyboard" name={txt(p.lang, "user.sections.setup.tabs.keyboard")} value={p.peripherals?.keyboard} icon={<i class="fa-solid fa-keyboard" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_keypad" name={txt(p.lang, "user.sections.setup.peripherals.keypad")} value={p.peripherals?.keypad} icon={<i class="fa-solid fa-hockey-puck" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_headphones" name={txt(p.lang, "user.sections.setup.peripherals.headphones")} value={p.peripherals?.headphones} icon={<i class="fa-solid fa-headphones" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_camera" name={txt(p.lang, "user.sections.setup.peripherals.camera")} value={p.peripherals?.camera} icon={<i class="fa-solid fa-camera" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_microphone" name={txt(p.lang, "user.sections.setup.peripherals.microphone")} value={p.peripherals?.microphone} icon={<i class="fa-solid fa-microphone" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_monitor" name={txt(p.lang, "user.sections.setup.peripherals.monitor")} value={p.peripherals?.monitor} icon={<i class="fa-solid fa-desktop" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_audio" name={txt(p.lang, "user.sections.setup.peripherals.audio")} value={p.peripherals?.audio} icon={<i class="fa-solid fa-sliders" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_desk" name={txt(p.lang, "user.sections.setup.peripherals.desk")} value={p.peripherals?.desk} icon={<i class="fa-solid fa-database" />} />
            <SetupInput editable={p.editable} type="text" id="peripherals_chair" name={txt(p.lang, "user.sections.setup.peripherals.chair")} value={p.peripherals?.chair} icon={<i class="fa-solid fa-chair" />} />
        </div>
    </div>;
}

export default Peripherals;
