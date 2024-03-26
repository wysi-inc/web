import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { TabletModel } from "@/src/models/Tablet";
import { isEmpty } from "@/src/resources/functions";

type Props = {
    tablet: Setup["tablet"],
    editable: boolean
}

const TabletDisplay = async ({ tablet, editable }: Props) => {

    const empty = isEmpty(tablet);

    if (!editable && empty) return <></>;

    const tablets = await TabletModel.find();

    const custom: boolean = tablet?.name === "" || tablets.find((t) => t.name === tablet?.name) === undefined;

    return <div class={`${empty ? "block group-disabled:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <h1 class="p-2 text-neutral-content">Tablet</h1>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <div class="flex justify-center items-center h-36">
                <div class="relative outline outline-1 overflow-hidden rounded-lg"
                    id="tablet" style={{
                        height: `${tablet?.size?.h}px`,
                        width: `${tablet?.size?.w}px`,
                    }}>
                    <div class="absolute flex flex-col items-center justify-center gap-1 outline outline-1 outline-secondary bg-secondary bg-opacity-75"
                        id="tablet_area" style={{
                            height: `${tablet?.area?.h}px`,
                            width: `${tablet?.area?.w}px`,
                            top: `${tablet?.position?.y}px`,
                            left: `${tablet?.position?.x}px`,
                            transformOrigin: "center",
                            transform: `translate(-50%, -50%) rotate(${tablet?.position?.r}deg)`,
                        }}>
                        <div>{tablet?.area?.w} x {tablet?.area?.h}</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 grow">
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Model:</span>
                    </div>
                    <select class="peer disabled:hidden w-full select select-bordered select-sm" name="tablet_model">
                        {tablets.sort((a, b) => a.name.localeCompare(b.name)).map((t) => <option value={JSON.stringify(t)} selected={tablet?.name === t.name}>{t.name}</option>)}
                        <option value="custom" selected={custom}>Custom</option>
                    </select>
                    <span class="input input-sm bg-base-200 hidden peer-disabled:block">{tablet?.name}</span>
                </label>
                <div id="tablet_custom" class={custom ? "" : "hidden"}>
                    <label class="form-control">
                        <div class="label">
                            <span class="label-text">Name:</span>
                        </div>
                        <input id="tablet_name" name="tablet_name"
                            type="text" placeholder="Tablet name"
                            class="input input-sm input-bordered peer disabled:hidden w-full" value={tablet?.name || ""} />
                        <span class="input input-sm bg-base-200 hidden peer-disabled:block">{tablet?.name}</span>
                    </label>
                    <label class="form-control">
                        <div class="label">
                            <span class="label-text">Size:</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <SetupInput editable={editable} id="tablet_size_w" name="Width" measure="mm" value={tablet?.size?.w} type="number" />
                            <SetupInput editable={editable} id="tablet_size_h" name="Height" measure="mm" value={tablet?.size?.h} type="number" />
                        </div>
                    </label>
                </div>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Area:</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <SetupInput editable={editable} id="tablet_area_w" name="Width" measure="mm" value={tablet?.area?.w} type="number" />
                        <SetupInput editable={editable} id="tablet_area_h" name="Height" measure="mm" value={tablet?.area?.h} type="number" />
                    </div>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">Position:</span>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                        <SetupInput editable={editable} id="tablet_position_x" name="X" measure="mm" value={tablet?.position?.x} type="number" />
                        <SetupInput editable={editable} id="tablet_position_y" name="Y" measure="mm" value={tablet?.position?.y} type="number" />
                        <SetupInput editable={editable} id="tablet_position_r" name="R" measure="deg" value={tablet?.position?.r} type="number" />
                    </div>
                </label>
            </div>
        </div>
    </div>;
}

export default TabletDisplay;
