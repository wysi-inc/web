import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { isEmpty } from "@/src/libs/web_utils";

type Props = {
    peripherals: Setup["peripherals"],
    editable: boolean
}

const Peripherals = ({ peripherals, editable }: Props) => {

    const empty = isEmpty(peripherals);

    if (!editable && empty) return <></>;

    return <div class={`${empty ? "block group-disabled:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <h1 class="p-2 text-neutral-content">Peripherals</h1>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <SetupInput editable={editable} type="text" id="peripherals_mouse" name="Mouse" value={peripherals?.mouse} icon={<i class="fa-solid fa-computer-mouse" />} />
            <SetupInput editable={editable} type="text" id="peripherals_mousepad" name="Mousepad" value={peripherals?.mousepad} icon={<i class="fa-solid fa-square" />} />
            <SetupInput editable={editable} type="text" id="peripherals_keyboard" name="Keyboard" value={peripherals?.keyboard} icon={<i class="fa-solid fa-keyboard" />} />
            <SetupInput editable={editable} type="text" id="peripherals_keypad" name="Keypad" value={peripherals?.keypad} icon={<i class="fa-solid fa-hockey-puck" />} />
            <SetupInput editable={editable} type="text" id="peripherals_headphones" name="Headphones" value={peripherals?.headphones} icon={<i class="fa-solid fa-headphones" />} />
            <SetupInput editable={editable} type="text" id="peripherals_camera" name="Camera" value={peripherals?.camera} icon={<i class="fa-solid fa-camera" />} />
            <SetupInput editable={editable} type="text" id="peripherals_microphone" name="Microphpne" value={peripherals?.microphone} icon={<i class="fa-solid fa-microphone" />} />
            <SetupInput editable={editable} type="text" id="peripherals_monitor" name="Monitor" value={peripherals?.monitor} icon={<i class="fa-solid fa-desktop" />} />
            <SetupInput editable={editable} type="text" id="peripherals_audio" name="Audio" value={peripherals?.audio} icon={<i class="fa-solid fa-sliders" />} />
            <SetupInput editable={editable} type="text" id="peripherals_desk" name="Desk" value={peripherals?.desk} icon={<i class="fa-solid fa-database" />} />
            <SetupInput editable={editable} type="text" id="peripherals_chair" name="Chair" value={peripherals?.chair} icon={<i class="fa-solid fa-chair" />} />
        </div>
    </div>;
}

export default Peripherals;
