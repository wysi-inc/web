import { isEmpty } from "@/src/libs/web_utils";
import type { Setup } from "@/src/models/User";
import { txt } from "@/src/tasks/files";
import SetupInput from "./SetupInput";

function Computer(p: {
    computer: Setup["computer"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.computer);

    if (!p.editable && empty) return <></>;

    return (<>
        <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} grid md:grid-cols-3 rounded-lg bg-base-200`}>
            <div class="p-4 pt-9 relative">
                <h1 class="absolute left-3 top-2">{txt(p.lang, "user.sections.setup.tabs.computer")}</h1>
                <div class="center flex">
                    <svg class="size-48 fill-none stroke-2 stroke-base-content" data-name="Layer 7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 406.75 507.22">
                        <polygon points="2.4 70 284.75 233.02 404.75 164.12 120.19 2 2.4 70" />
                        <polyline points="2.4 70 2 342.25 285.08 505.22 284.75 233.02 404.75 164.12 404.75 436.13 285.08 505.22" />
                        <polygon points="308.64 246.81 379.31 206.01 379.31 423.62 308.64 464.42 308.64 246.81" />
                        <polygon points="25.96 110.81 261.53 246.81 261.53 464.42 25.96 328.42 25.96 110.81" />
                        <path d="M96.47,413.46" transform="translate(-38.49 -195.04)" />
                        <path d="M524.48,502.7" transform="translate(-38.49 -195.04)" />
                        <path d="M382.46,490.16s-26,14.85-26,41.67c0,33.3,26,18.31,26,18.31s26-14.35,26-46.25C408.44,475.16,382.46,490.16,382.46,490.16Z" transform="translate(-38.49 -195.04)" />
                        <path d="M382.46,565.32s-26,14.85-26,41.66c0,33.31,26,18.32,26,18.32s26-14.35,26-46.25C408.44,550.32,382.46,565.32,382.46,565.32Z" transform="translate(-38.49 -195.04)" />
                        <path d="M267.9,621.65S247.56,610,247.56,589c0-26.08,20.34-14.34,20.34-14.34s20.34,11.24,20.34,36.22C288.24,633.39,267.9,621.65,267.9,621.65Z" transform="translate(-38.49 -195.04)" />
                        <path d="M267.9,562.8s-20.34-11.63-20.34-32.63c0-26.08,20.34-14.34,20.34-14.34s20.34,11.23,20.34,36.22C288.24,574.54,267.9,562.8,267.9,562.8Z" transform="translate(-38.49 -195.04)" />
                        <path d="M119.34,338.36" transform="translate(-38.49 -195.04)" />
                        <path d="M119.34,338.36a39.48,39.48,0,0,0-4.31,2.05s-31.86,18.22-31.86,51.12C83.17,432.39,115,414,115,414s31.86-17.6,31.86-56.74c0-.79,0-1.56,0-2.3" transform="translate(-38.49 -195.04)" />
                        <path d="M64.44,345.75l35.34-19.51Z" transform="translate(-38.49 -195.04)" />
                        <path d="M64.44,452.57" transform="translate(-38.49 -195.04)" />
                        <polyline points="25.96 261.19 132.03 202.9 131.97 175.66" />
                        <path d="M101.07,517.51v0Z" transform="translate(-38.49 -195.04)" />
                        <path d="M239.73,469.94" transform="translate(-38.49 -195.04)" />
                        <polyline points="196.09 398.68 196.09 426.59 196.09 398.68 62.58 320.87 172.45 257.43 195.06 271.31" />
                        <polyline points="196.01 426.59 196.01 263.38 196.01 236.18 261.53 274.01 261.53 299.49 261.53 301.21 196.01 263.38" />
                        <line x1="196.01" y1="236.18" x2="218.94" y2="223.08" />
                        <polygon points="38.72 254.18 49.52 260.41 49.52 314.81 38.72 308.58 38.72 254.18" />
                        <polyline points="50.84 260.41 133.35 214.63 133.35 267.18 50.84 314.81 133.35 267.18 133.35 212.77 124.29 207.88" />
                        <line x1="27.52" y1="138.91" x2="49.52" y2="126.63" />
                        <polyline points="196.01 257.24 166.12 241.04 167.3 192.41" />
                    </svg>
                </div>
            </div>
            <div class="relative md:col-span-2 flex grow flex-col gap-2 rounded-lg bg-base-300 px-5 py-4">
                {p.editable ?
                    <div class="tooltip tooltip-left absolute right-2 top-1 cursor-help"
                        data-tip={`Any empty fields won't be shown outside edit mode`}>
                        <i class="fa-solid fa-circle-question size-4" />
                    </div> : null
                }
                <SetupInput editable={p.editable} type="text" id="computer_os" name={txt(p.lang, "user.sections.setup.components.os")} value={p.computer?.os} icon={<i class="fa-solid fa-folder-closed size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_cpu" name={txt(p.lang, "user.sections.setup.components.cpu")} value={p.computer?.cpu} icon={<i class="fa-solid fa-microchip size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_gpu" name={txt(p.lang, "user.sections.setup.components.gpu")} value={p.computer?.gpu} icon={<i class="fa-solid fa-fan size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_ram" name={txt(p.lang, "user.sections.setup.components.ram")} value={p.computer?.ram} icon={<i class="fa-solid fa-memory size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_storage" name={txt(p.lang, "user.sections.setup.components.storage")} value={p.computer?.storage} icon={<i class="fa-solid fa-hard-drive size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_motherboard" name={txt(p.lang, "user.sections.setup.components.motherboard")} value={p.computer?.motherboard} icon={<i class="fa-solid fa-gears size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_psu" name={txt(p.lang, "user.sections.setup.components.psu")} value={p.computer?.psu} icon={<i class="fa-solid fa-bolt size-4" />} />
                <SetupInput editable={p.editable} type="text" id="computer_case" name={txt(p.lang, "user.sections.setup.components.case")} value={p.computer?.case} icon={<i class="fa-solid fa-database size-4" />} />
            </div>
        </div>
    </>);
}

export default Computer;
