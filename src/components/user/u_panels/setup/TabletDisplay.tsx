import type { Setup } from "@/src/models/User";
import SetupInput from "./SetupInput";
import { TabletModel } from "@/src/models/Tablet";
import { isEmpty } from "@/src/libs/web_utils";

type Props = {
    tablet: Setup["tablet"],
    editable: boolean,
    t: any
}

const TabletDisplay = async ({ t, tablet, editable }: Props) => {

    const empty = isEmpty(tablet);

    if (!editable && empty) return <></>;

    const tablets = await TabletModel.find();

    const custom: boolean = tablet?.name === "" || tablets.find((t) => t.name === tablet?.name) === undefined;

    return <div class={`${empty ? "block group-disabled:hidden" : ""} bg-neutral rounded-lg flex flex-col`}>
        <div class="flex flex-row justify-between items-center pe-2">
            <h1 class="py-1 px-2 text-neutral-content">{t.user.sections.setup.tabs.tablet}</h1>
            {editable ?
                <div class="ms-auto tooltip tooltip-left"
                    data-tip={`Same values as OpenTabletDriver.
                    The tablet area doesnt move on the preview, save the changes to see the tablet go into the right place (will be fixed in the future).
                    If your tablet is not on the list, choose "custom" and insert the tablet name and its size before setting the area or the position.
                    `}>
                    <i class="fa-solid fa-circle-info" />
                </div> : <></>
            }
        </div>
        <div class="flex flex-col gap-2 p-2 bg-base-300 rounded-lg grow">
            <div class="flex justify-center items-center h-36">
                <div class="relative outline outline-1 overflow-hidden rounded-lg"
                    id="tablet" style={{
                        height: `${tablet?.size?.h || 0}px`,
                        width: `${tablet?.size?.w || 0}px`,
                    }}>
                    <div class="absolute flex flex-col items-center justify-center gap-1 outline outline-1 outline-secondary bg-secondary bg-opacity-75"
                        id="tablet_area" style={{
                            height: `${tablet?.area?.h || 0}px`,
                            width: `${tablet?.area?.w || 0}px`,
                            top: `${tablet?.position?.y || 0}px`,
                            left: `${tablet?.position?.x || 0}px`,
                            transformOrigin: "center",
                            transform: `translate(-50%, -50%) rotate(${tablet?.position?.r || 0}deg)`,
                        }}>
                        <div>{tablet?.area?.w} x {tablet?.area?.h}</div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col gap-2 grow">
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{t.user.sections.setup.model}:</span>
                    </div>
                    <select class="peer disabled:hidden w-full select select-bordered select-sm" name="tablet_model">
                        {tablets.sort((a, b) => a.name.localeCompare(b.name)).map((t) => <option value={JSON.stringify(t)} selected={tablet?.name === t.name}>{t.name}</option>)}
                        <option value="custom" selected={custom}>Custom</option>
                    </select>
                    <span class="input input-sm bg-base-300 hidden peer-disabled:block">{tablet?.name}</span>
                </label>
                <div id="tablet_custom" class={custom ? "" : "hidden"}>
                    <label class="form-control">
                        <div class="label">
                            <span class="label-text">{t.user.sections.setup.name}:</span>
                        </div>
                        <input id="tablet_name" name="tablet_name"
                            type="text" placeholder={t.user.sections.setup.name}
                            class="input input-sm input-bordered peer disabled:hidden w-full" value={tablet?.name || ""} />
                        <span class="input input-sm bg-base-200 hidden peer-disabled:block">{tablet?.name}</span>
                    </label>
                    <label class="form-control">
                        <div class="label">
                            <span class="label-text">{t.user.sections.setup.size}:</span>
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <SetupInput editable={editable} id="tablet_size_w" name={t.user.sections.setup.width} measure="mm" value={tablet?.size?.w} type="number" />
                            <SetupInput editable={editable} id="tablet_size_h" name={t.user.sections.setup.height} measure="mm" value={tablet?.size?.h} type="number" />
                        </div>
                    </label>
                </div>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{t.user.sections.setup.area}:</span>
                    </div>
                    <div class="grid grid-cols-2 gap-2">
                        <SetupInput editable={editable} id="tablet_area_w" name={t.user.sections.setup.width} measure="mm" value={tablet?.area?.w} type="number" />
                        <SetupInput editable={editable} id="tablet_area_h" name={t.user.sections.setup.height} measure="mm" value={tablet?.area?.h} type="number" />
                    </div>
                </label>
                <label class="form-control">
                    <div class="label">
                        <span class="label-text">{t.user.sections.setup.position}:</span>
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
