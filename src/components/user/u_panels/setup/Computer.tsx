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

    return (<>
        <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} grid grid-cols-3 rounded-lg bg-base-200`}>
            <div class="center relative flex">
                <h1 class="absolute left-3 top-2">{txt(p.lang, "user.sections.setup.tabs.computer")}</h1>
            </div>
            <div class="relative col-span-2 flex grow flex-col gap-2 rounded-lg bg-base-300 px-5 py-4">
                {p.editable ?
                    <div class="tooltip tooltip-left absolute right-2 top-1 cursor-help"
                        data-tip={`Any empty fields won't be shown outside edit mode`}>
                        <i class="size-4 fa-solid fa-circle-question" />
                    </div> : null
                }
                <SetupInput editable={p.editable} type="text" id="computer_os" name={txt(p.lang, "user.sections.setup.components.os")} value={p.computer?.os} icon={<i class="size-4 fa-solid fa-folder-closed" />} />
                <SetupInput editable={p.editable} type="text" id="computer_cpu" name={txt(p.lang, "user.sections.setup.components.cpu")} value={p.computer?.cpu} icon={<i class="size-4 fa-solid fa-microchip" />} />
                <SetupInput editable={p.editable} type="text" id="computer_gpu" name={txt(p.lang, "user.sections.setup.components.gpu")} value={p.computer?.gpu} icon={<i class="size-4 fa-solid fa-fan" />} />
                <SetupInput editable={p.editable} type="text" id="computer_ram" name={txt(p.lang, "user.sections.setup.components.ram")} value={p.computer?.ram} icon={<i class="size-4 fa-solid fa-memory" />} />
                <SetupInput editable={p.editable} type="text" id="computer_storage" name={txt(p.lang, "user.sections.setup.components.storage")} value={p.computer?.storage} icon={<i class="size-4 fa-solid fa-hard-drive" />} />
                <SetupInput editable={p.editable} type="text" id="computer_motherboard" name={txt(p.lang, "user.sections.setup.components.motherboard")} value={p.computer?.motherboard} icon={<i class="size-4 fa-solid fa-gears" />} />
                <SetupInput editable={p.editable} type="text" id="computer_psu" name={txt(p.lang, "user.sections.setup.components.psu")} value={p.computer?.psu} icon={<i class="size-4 fa-solid fa-bolt" />} />
                <SetupInput editable={p.editable} type="text" id="computer_case" name={txt(p.lang, "user.sections.setup.components.case")} value={p.computer?.case} icon={<i class="size-4 fa-solid fa-database" />} />
            </div>
        </div>
    </>);
}

export default Computer;
