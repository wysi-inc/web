import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";

type Props = {
    mouse: Setup["mouse"],
    editable: boolean
}

const MouseDisplay = ({ mouse, editable }: Props) => {

    if (!editable && !mouse) return <></>;

    return <div class="bg-neutral rounded-lg flex flex-col">
        <h1 class="p-2 text-neutral-content">Mouse</h1>
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
                        <span class="label-text">Name:</span>
                    </div>
                    <input id="mouse_name" name="mouse_name"
                        type="text" placeholder="Mouse name"
                        class="input input-sm input-bordered peer disabled:hidden w-full" value={mouse?.name || ""} />
                    <span class="input input-sm bg-base-200 hidden peer-disabled:block">{mouse?.name}</span>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Sensitivity:</span>
                    </div>
                    <div class="grow grid grid-cols-2 gap-2">
                        <SetupInput editable={editable} id="mouse_dpi" name="DPI" measure="dpi" value={mouse?.dpi} type="number" />
                        <SetupInput editable={editable} id="mouse_x" name="Multiplier" measure="x" value={mouse?.mult} type="number" />
                    </div>
                </label>
            </div>
        </div>
    </div>;
}

export default MouseDisplay;
