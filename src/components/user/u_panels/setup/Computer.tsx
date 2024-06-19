import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { isEmpty } from "@/src/libs/web_utils";

type Props = {
    computer: Setup["computer"],
    editable: boolean
}

const Computer = ({ computer, editable }: Props) => {

    const empty = isEmpty(computer);

    if (!editable && empty) return <></>;

    return <div class={`${empty ? "block group-disabled:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <div class="flex flex-row justify-between items-center pe-2">
            <h1 class="py-1 px-2 text-neutral-content">Computer</h1>
            {editable ?
                <div class="ms-auto tooltip tooltip-left"
                    data-tip={`Any empty fields won't be shown outside edit mode`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <SetupInput editable={editable} type="text" id="computer_os" name="OS" value={computer?.os} icon={<i class="fa-solid fa-folder-closed" />} />
            <SetupInput editable={editable} type="text" id="computer_cpu" name="CPU" value={computer?.cpu} icon={<i class="fa-solid fa-microchip" />} />
            <SetupInput editable={editable} type="text" id="computer_gpu" name="GPU" value={computer?.gpu} icon={<i class="fa-solid fa-fan" />} />
            <SetupInput editable={editable} type="text" id="computer_ram" name="RAM" value={computer?.ram} icon={<i class="fa-solid fa-memory" />} />
            <SetupInput editable={editable} type="text" id="computer_storage" name="Storage" value={computer?.storage} icon={<i class="fa-solid fa-hard-drive" />} />
            <SetupInput editable={editable} type="text" id="computer_motherboard" name="Motherboard" value={computer?.motherboard} icon={<i class="fa-solid fa-gears" />} />
            <SetupInput editable={editable} type="text" id="computer_psu" name="PSU" value={computer?.psu} icon={<i class="fa-solid fa-bolt" />} />
            <SetupInput editable={editable} type="text" id="computer_case" name="Case" value={computer?.case} icon={<i class="fa-solid fa-database" />} />
        </div>
    </div>;
}

export default Computer;
