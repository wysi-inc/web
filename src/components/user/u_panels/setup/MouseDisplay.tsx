import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { isEmpty } from "@/src/libs/web_utils";
import { txt } from "@/src/tasks/files";

function MouseDisplay(p: {
    mouse: Setup["mouse"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.mouse);

    if (!p.editable && empty) return <></>;

    return <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <h1 class="py-1 px-2 text-neutral-content">{txt(p.lang, "user.sections.setup.tabs.mouse")}</h1>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <div class="h-36 p-2 flex">
                <div class="grow flex justify-center items-center">
                    <div class="flex flex-col divide-base-content justify-between outline outline-1 divide-y rounded-full w-20 h-full">
                        <div class="flex h-2/5 divide-base-content divide-x relative" >
                            <div class="h-full w-1/2" />
                            <div class="h-full w-1/2" />
                            <div class="absolute outline outline-1 rounded-lg bg-base-300 top-1/2 left-1/2 w-3 h-6 transform -translate-x-1/2 -translate-y-1/2" />
                        </div>
                        <div class="h-3/5" />
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 grow">
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{txt(p.lang, "user.sections.setup.name")}:</span>
                    </div>
                    <input id="mouse_name" name="mouse_name"
                        type="text" placeholder="Mouse name"
                        class="input input-sm input-bordered peer disabled:hidden w-full" value={p.mouse?.name || ""} />
                    <span class="input input-sm bg-base-200 hidden peer-disabled:block">{p.mouse?.name}</span>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{txt(p.lang, "user.sections.setup.dpi")}:</span>
                    </div>
                    <div class="grow grid grid-cols-2 gap-2">
                        <SetupInput editable={p.editable} id="mouse_dpi" name="DPI" measure="dpi" value={p.mouse?.dpi} type="number" />
                        <SetupInput editable={p.editable} id="mouse_x" name={txt(p.lang, "user.sections.setup.mult")} measure="x" value={p.mouse?.mult} type="number" />
                    </div>
                </label>
            </div>
        </div>
    </div>;
}

export default MouseDisplay;
