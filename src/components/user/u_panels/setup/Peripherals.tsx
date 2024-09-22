import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { isEmpty } from "@/src/libs/web_utils";

type Props = {
    peripherals: Setup["peripherals"],
    editable: boolean,
    t: any
}

const Peripherals = ({ t, peripherals, editable }: Props) => {

    const empty = isEmpty(peripherals);

    if (!editable && empty) return <></>;

    return <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <div class="flex flex-row justify-between items-center pe-2">
            <h1 class="py-1 px-2 text-neutral-content">Peripherals</h1>
            {editable ?
                <div class="ms-auto tooltip tooltip-left"
                    data-tip={`Any empty fields won't be shown outside edit mode`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <SetupInput editable={editable} type="text" id="peripherals_mouse" name={t.user.sections.setup.tabs.mouse} value={peripherals?.mouse} icon={<i class="fa-solid fa-computer-mouse" />} />
            <SetupInput editable={editable} type="text" id="peripherals_mousepad" name={t.user.sections.setup.peripherals.mousepad} value={peripherals?.mousepad} icon={<i class="fa-solid fa-square" />} />
            <SetupInput editable={editable} type="text" id="peripherals_keyboard" name={t.user.sections.setup.tabs.keyboard} value={peripherals?.keyboard} icon={<i class="fa-solid fa-keyboard" />} />
            <SetupInput editable={editable} type="text" id="peripherals_keypad" name={t.user.sections.setup.peripherals.keypad} value={peripherals?.keypad} icon={<i class="fa-solid fa-hockey-puck" />} />
            <SetupInput editable={editable} type="text" id="peripherals_headphones" name={t.user.sections.setup.peripherals.headphones} value={peripherals?.headphones} icon={<i class="fa-solid fa-headphones" />} />
            <SetupInput editable={editable} type="text" id="peripherals_camera" name={t.user.sections.setup.peripherals.camera} value={peripherals?.camera} icon={<i class="fa-solid fa-camera" />} />
            <SetupInput editable={editable} type="text" id="peripherals_microphone" name={t.user.sections.setup.peripherals.microphone} value={peripherals?.microphone} icon={<i class="fa-solid fa-microphone" />} />
            <SetupInput editable={editable} type="text" id="peripherals_monitor" name={t.user.sections.setup.peripherals.monitor} value={peripherals?.monitor} icon={<i class="fa-solid fa-desktop" />} />
            <SetupInput editable={editable} type="text" id="peripherals_audio" name={t.user.sections.setup.peripherals.audio} value={peripherals?.audio} icon={<i class="fa-solid fa-sliders" />} />
            <SetupInput editable={editable} type="text" id="peripherals_desk" name={t.user.sections.setup.peripherals.desk} value={peripherals?.desk} icon={<i class="fa-solid fa-database" />} />
            <SetupInput editable={editable} type="text" id="peripherals_chair" name={t.user.sections.setup.peripherals.chair} value={peripherals?.chair} icon={<i class="fa-solid fa-chair" />} />
        </div>
    </div>;
}

export default Peripherals;
