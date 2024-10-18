import { isEmpty } from "@/src/libs/web_utils";
import type { Setup } from "@/src/models/User";
import { txt } from "@/src/tasks/files";
import SetupInput from "./SetupInput";

function Peripherals(p: {
    peripherals: Setup["peripherals"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.peripherals);

    if (!p.editable && empty) return <></>;

    return (<>
        <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} grid md:grid-cols-3 rounded-lg bg-base-200`}>
            <div class="p-4 pt-9 relative">
                <h1 class="absolute left-3 top-2">{txt(p.lang, "user.sections.setup.tabs.peripherals")}</h1>
                <div class="center flex">
                    <svg class="size-48 fill-none stroke-2 stroke-base-content" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509.34 555.1">
                        <g id="Layer_3" data-name="Layer 3">
                            <polyline points="127.55 205.05 2 277.55 170.45 374.8 338.11 278" />
                            <polyline points="465.67 203.63 507.34 179.77 395.04 115.46" />
                            <polyline points="338.11 294.21 184.48 382.9 184.48 544.99 170.45 553.1 156.41 544.99 156.41 382.9 30.07 309.96 30.04 455.87 16.04 463.95 2 455.84 2 277.55" />
                            <path d="M488.45,302.7" transform="translate(-23.76 -81.58)" />
                            <polyline points="507.34 180.3 507.34 358.59 493.3 366.69 479.26 358.59 479.26 212.71 465.67 220.56" />
                            <polyline points="493.3 366.69 493.3 204.61 479.26 212.71" />
                            <line x1="170.45" y1="553.1" x2="170.45" y2="374.8" />
                            <polyline points="16.04 463.95 16.47 302.11 30.07 309.96" />
                            <path d="M234.41,288.2c.62-.44,1.27-.87,1.93-1.3" transform="translate(-23.76 -81.58)" />
                            <path d="M266.6,274.91c7-.68,12.28.73,14.16,4.37,3.6,7-6.81,19.53-23.25,28S224.8,317,221.2,310c-2.8-5.42,2.85-14.19,13.21-21.82" transform="translate(-23.76 -81.58)" />
                            <path d="M266.6,274.91" transform="translate(-23.76 -81.58)" />
                            <polyline points="212.56 197.12 212.56 220.82 240.63 205.05 240.63 180.72" />
                            <polygon points="352.93 204.61 395.04 180.3 395.04 66.83 352.93 91.15 352.93 204.61" />
                            <line x1="352.93" y1="204.61" x2="276.05" y2="160.03" />
                            <line x1="352.93" y1="91.15" x2="304.48" y2="63.17" />
                            <polyline points="395.04 66.83 282.74 2 240.63 26.31 253.21 33.58 240.63 26.31 240.63 40.86" />
                        </g>
                        <g id="Layer_5" data-name="Layer 5">
                            <polyline points="338.89 293.76 338.89 245.13 352.93 253.24 465.23 188.4 465.23 366.69 352.93 431.53 338.89 407.22 338.89 293.76" />
                            <polyline points="352.93 431.53 352.93 253.24 338.89 245.13 451.86 179.91 465.23 188.4" />
                            <polyline points="338.89 407.22 254.67 358.59 338.55 310.16 254.67 358.59 254.67 374.8 352.93 431.53" />
                            <polyline points="366.96 423.43 366.96 472.05 381 480.16 395.04 472.05 395.04 407.22" />
                            <polyline points="395.04 455.84 423.11 439.63 437.15 447.74 395.04 472.05 451.19 504.47 437.15 512.57 381 480.16 324.85 512.57 310.82 504.47 366.96 472.05 324.85 447.74 338.89 439.63 366.96 455.84" />
                            <polyline points="324.85 447.74 324.85 455.29 360.89 475.56 310.82 504.47 310.82 512.57 324.85 520.51 324.85 512.57 324.85 520.51 381 488.42 381 480.16 381 488.42 437.15 521.82 437.15 512.57 437.15 521.82 451.19 513.73 451.19 504.47 402.06 476.1 437.15 457.12 437.15 447.74" />
                            <path d="M368.8,549.35a9.13,9.13,0,0,1-15.28-6.75,9,9,0,0,1,.27-2.21" transform="translate(-23.76 -81.58)" />
                            <path d="M357.56,597.39a9.26,9.26,0,0,1,.18,1.84,9.13,9.13,0,1,1-18.14-1.48" transform="translate(-23.76 -81.58)" />
                            <path d="M439.85,549.49" transform="translate(-23.76 -81.58)" />
                            <path d="M455.74,541.47a9.23,9.23,0,0,1,.26,2.18,9.13,9.13,0,0,1-15.05,7" transform="translate(-23.76 -81.58)" />
                            <path d="M469.85,598.82a9.44,9.44,0,0,1,.19,1.85,9.13,9.13,0,1,1-18.26,0,8.64,8.64,0,0,1,.19-1.84" transform="translate(-23.76 -81.58)" />
                            <polygon points="127.55 106.91 128.33 238.12 135.35 242.21 135.35 111.45 127.55 106.91" />
                            <polygon points="127.55 106.3 296.78 8.37 303.8 12.42 135.35 109.67 127.55 106.3" />
                            <polyline points="303.8 14.16 303.8 143.83 135.35 242.21" />
                            <polygon points="142.37 113.8 142.27 226.07 296.78 136.99 296.78 23.52 142.37 113.8" />
                        </g>
                    </svg>
                </div>
            </div>
            <div class="relative md:col-span-2 flex grow flex-col gap-2 rounded-lg bg-base-300 px-5 py-4">
                {p.editable ?
                    <div class="tooltip tooltip-left absolute right-2 top-1 cursor-help"
                        data-tip={`Any empty fields won't be shown outside edit mode`}>
                        <i class="fa-solid fa-circle-question" />
                    </div> : null
                }
                <SetupInput editable={p.editable} type="text" id="peripherals_mouse" name={txt(p.lang, "user.sections.setup.tabs.mouse")} value={p.peripherals?.mouse} icon={<i class="fa-solid fa-computer-mouse size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_mousepad" name={txt(p.lang, "user.sections.setup.peripherals.mousepad")} value={p.peripherals?.mousepad} icon={<i class="fa-solid fa-square size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_keyboard" name={txt(p.lang, "user.sections.setup.tabs.keyboard")} value={p.peripherals?.keyboard} icon={<i class="fa-solid fa-keyboard size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_keypad" name={txt(p.lang, "user.sections.setup.peripherals.keypad")} value={p.peripherals?.keypad} icon={<i class="fa-solid fa-hockey-puck size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_headphones" name={txt(p.lang, "user.sections.setup.peripherals.headphones")} value={p.peripherals?.headphones} icon={<i class="fa-solid fa-headphones size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_camera" name={txt(p.lang, "user.sections.setup.peripherals.camera")} value={p.peripherals?.camera} icon={<i class="fa-solid fa-camera size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_microphone" name={txt(p.lang, "user.sections.setup.peripherals.microphone")} value={p.peripherals?.microphone} icon={<i class="fa-solid fa-microphone size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_monitor" name={txt(p.lang, "user.sections.setup.peripherals.monitor")} value={p.peripherals?.monitor} icon={<i class="fa-solid fa-desktop size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_audio" name={txt(p.lang, "user.sections.setup.peripherals.audio")} value={p.peripherals?.audio} icon={<i class="fa-solid fa-sliders size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_desk" name={txt(p.lang, "user.sections.setup.peripherals.desk")} value={p.peripherals?.desk} icon={<i class="fa-solid fa-database size-4" />} />
                <SetupInput editable={p.editable} type="text" id="peripherals_chair" name={txt(p.lang, "user.sections.setup.peripherals.chair")} value={p.peripherals?.chair} icon={<i class="fa-solid fa-chair size-4" />} />
            </div>
        </div>
    </>);
}

export default Peripherals;
