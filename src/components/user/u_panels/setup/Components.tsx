import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";

const Components = ({ peripherals, computer }: { peripherals: Setup["peripherals"], computer: Setup["computer"] }) => {

    return <div class="col-span-full grid grid-cols-2 gap-4" >
        <div class="bg-neutral rounded-lg flex flex-col">
            <h1 class="p-2">Peripherals</h1>
            <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                <SetupInput id="peripherals_mouse" icon={<i class="fa-solid fa-computer-mouse" />} name="Mouse" type="text" value={peripherals?.mouse} />
                <SetupInput id="peripherals_mousepad" icon={<i class="fa-solid fa-square" />} name="Mousepad" type="text" value={peripherals?.mousepad} />
                <SetupInput id="peripherals_keyboard" icon={<i class="fa-solid fa-keyboard" />} name="Keyboard" type="text" value={peripherals?.keyboard} />
                <SetupInput id="peripherals_keypad" icon={<i class="fa-solid fa-hockey-puck" />} name="Keypad" type="text" value={peripherals?.keypad} />
                <SetupInput id="peripherals_headphones" icon={<i class="fa-solid fa-headphones" />} name="Headphones" type="text" value={peripherals?.headphones} />
                <SetupInput id="peripherals_camera" icon={<i class="fa-solid fa-camera" />} name="Camera" type="text" value={peripherals?.camera} />
                <SetupInput id="peripherals_microphone" icon={<i class="fa-solid fa-microphone" />} name="Microphpne" type="text" value={peripherals?.microphone} />
                <SetupInput id="peripherals_monitor" icon={<i class="fa-solid fa-desktop" />} name="Monitor" type="text" value={peripherals?.monitor} />
                <SetupInput id="peripherals_audio" icon={<i class="fa-solid fa-sliders" />} name="Audio" type="text" value={peripherals?.audio} />
                <SetupInput id="peripherals_chair" icon={<i class="fa-solid fa-chair" />} name="Chair" type="text" value={peripherals?.chair} />
            </div>
        </div>
        <div class="bg-neutral rounded-lg flex flex-col">
            <h1 class="p-2">Computer</h1>
            <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
                <SetupInput id="computer_os" icon={<i class="fa-solid fa-folder-closed" />} name="OS" type="text" value={computer?.os} />
                <SetupInput id="computer_cpu" icon={<i class="fa-solid fa-microchip" />} name="CPU" type="text" value={computer?.cpu} />
                <SetupInput id="computer_gpu" icon={<i class="fa-solid fa-fan" />} name="GPU" type="text" value={computer?.gpu} />
                <SetupInput id="computer_ram" icon={<i class="fa-solid fa-memory" />} name="RAM" type="text" value={computer?.ram} />
                <SetupInput id="computer_storage" icon={<i class="fa-solid fa-hard-drive" />} name="Storage" type="text" value={computer?.storage} />
                <SetupInput id="computer_motherboard" icon={<i class="fa-solid fa-gears" />} name="Motherboard" type="text" value={computer?.motherboard} />
                <SetupInput id="computer_psu" icon={<i class="fa-solid fa-bolt" />} name="PSU" type="text" value={computer?.psu} />
                <SetupInput id="computer_case" icon={<i class="fa-solid fa-database" />} name="Case" type="text" value={computer?.case} />
            </div>
        </div>
    </div >
}

export default Components;
