import type { Setup } from "@/src/models/User";
import { Input } from "./Input";

const Components = ({ peripherals, computer }: { peripherals: Setup["peripherals"], computer: Setup["computer"] }) => {

    return <div class="col-span-full grid grid-cols-2 gap-4" >
        <div class="flex flex-col gap-2">
            <h1 class="text-center">Peripherals</h1>
            <Input id="peripherals_mouse" icon={<i class="fa-solid fa-computer-mouse" />} name="Mouse" type="text" value={peripherals?.mouse} />
            <Input id="peripherals_mousepad" icon={<i class="fa-solid fa-square" />} name="Mousepad" type="text" value={peripherals?.mousepad} />
            <Input id="peripherals_keyboard" icon={<i class="fa-solid fa-keyboard" />} name="Keyboard" type="text" value={peripherals?.keyboard} />
            <Input id="peripherals_keypad" icon={<i class="fa-solid fa-hockey-puck" />} name="Keypad" type="text" value={peripherals?.keypad} />
            <Input id="peripherals_headphones" icon={<i class="fa-solid fa-headphones" />} name="Headphones" type="text" value={peripherals?.headphones} />
            <Input id="peripherals_camera" icon={<i class="fa-solid fa-camera" />} name="Camera" type="text" value={peripherals?.camera} />
            <Input id="peripherals_microphone" icon={<i class="fa-solid fa-microphone" />} name="Microphpne" type="text" value={peripherals?.microphone} />
            <Input id="peripherals_monitor" icon={<i class="fa-solid fa-desktop" />} name="Monitor" type="text" value={peripherals?.monitor} />
            <Input id="peripherals_audio" icon={<i class="fa-solid fa-sliders" />} name="Audio" type="text" value={peripherals?.audio} />
            <Input id="peripherals_chair" icon={<i class="fa-solid fa-chair" />} name="Chair" type="text" value={peripherals?.chair} />
        </div>
        <div class="flex flex-col gap-2">
            <h1 class="text-center">Computer</h1>
            <Input id="computer_os" icon={<i class="fa-solid fa-folder-closed" />} name="OS" type="text" value={computer?.os} />
            <Input id="computer_cpu" icon={<i class="fa-solid fa-microchip" />} name="CPU" type="text" value={computer?.cpu} />
            <Input id="computer_gpu" icon={<i class="fa-solid fa-fan" />} name="GPU" type="text" value={computer?.gpu} />
            <Input id="computer_ram" icon={<i class="fa-solid fa-memory" />} name="RAM" type="text" value={computer?.ram} />
            <Input id="computer_storage" icon={<i class="fa-solid fa-hard-drive" />} name="Storage" type="text" value={computer?.storage} />
            <Input id="computer_motherboard" icon={<i class="fa-solid fa-gears" />} name="Motherboard" type="text" value={computer?.motherboard} />
            <Input id="computer_psu" icon={<i class="fa-solid fa-bolt" />} name="PSU" type="text" value={computer?.psu} />
            <Input id="computer_case" icon={<i class="fa-solid fa-database" />} name="Case" type="text" value={computer?.case} />
        </div>
    </div >
}

export default Components;
