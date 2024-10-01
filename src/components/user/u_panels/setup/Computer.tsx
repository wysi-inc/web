import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { isEmpty } from "@/src/libs/web_utils";
import { txt } from "@/src/tasks/files";

function Computer(p: {
    computer: Setup["computer"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.computer);

    if (!p.editable && empty) return <></>;

    return <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <div class="flex flex-row justify-between items-center pe-2">
            <h1 class="py-1 px-2 text-neutral-content">Computer</h1>
            {p.editable ?
                <div class="ms-auto tooltip tooltip-left"
                    data-tip={`Any empty fields won't be shown outside edit mode`}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <SetupInput editable={p.editable} type="text" id="computer_os" name={txt(p.lang, "user.sections.setup.components.os")} value={p.computer?.os} icon={<i class="fa-solid fa-folder-closed" />} />
            <SetupInput editable={p.editable} type="text" id="computer_cpu" name={txt(p.lang, "user.sections.setup.components.cpu")} value={p.computer?.cpu} icon={<i class="fa-solid fa-microchip" />} />
            <SetupInput editable={p.editable} type="text" id="computer_gpu" name={txt(p.lang, "user.sections.setup.components.gpu")} value={p.computer?.gpu} icon={<i class="fa-solid fa-fan" />} />
            <SetupInput editable={p.editable} type="text" id="computer_ram" name={txt(p.lang, "user.sections.setup.components.ram")} value={p.computer?.ram} icon={<i class="fa-solid fa-memory" />} />
            <SetupInput editable={p.editable} type="text" id="computer_storage" name={txt(p.lang, "user.sections.setup.components.storage")} value={p.computer?.storage} icon={<i class="fa-solid fa-hard-drive" />} />
            <SetupInput editable={p.editable} type="text" id="computer_motherboard" name={txt(p.lang, "user.sections.setup.components.motherboard")} value={p.computer?.motherboard} icon={<i class="fa-solid fa-gears" />} />
            <SetupInput editable={p.editable} type="text" id="computer_psu" name={txt(p.lang, "user.sections.setup.components.psu")} value={p.computer?.psu} icon={<i class="fa-solid fa-bolt" />} />
            <SetupInput editable={p.editable} type="text" id="computer_case" name={txt(p.lang, "user.sections.setup.components.case")} value={p.computer?.case} icon={<i class="fa-solid fa-database" />} />
        </div>
    </div>;
}

export default Computer;
