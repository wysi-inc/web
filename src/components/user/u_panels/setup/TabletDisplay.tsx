import { isEmpty } from "@/src/libs/web_utils";
import { TabletModel } from "@/src/models/Tablet";
import type { Setup } from "@/src/models/User";
import { txt } from "@/src/tasks/files";
import SetupInput from "./SetupInput";

async function TabletDisplay(p: {
    tablet: Setup["tablet"],
    editable: boolean,
    lang: string
}) {

    const empty = isEmpty(p.tablet);

    if (!p.editable && empty) return <></>;

    const tablets = await TabletModel.aggregate([{ $sort: { name: 1 } }]);

    const custom: boolean = p.tablet?.name === "" || tablets.find((t) => t.name === p.tablet?.name) === undefined;

    return (<>
        <div class={`${empty ? "block group-has-[:disabled]/setup:hidden" : ""} grid md:grid-cols-3 rounded-lg bg-base-200`}>
            <div class="p-4 pt-9 relative">
                <h1 class="absolute left-3 top-2">{txt(p.lang, "user.sections.setup.tabs.tablet")}</h1>
                <div class="center relative flex max-h-72 max-w-full">
                    <div class="auto_scale relative overflow-hidden rounded-lg outline outline-1"
                        id="tablet" data-original={JSON.stringify(p.tablet)}
                        style={{
                            height: `${p.tablet?.size?.h || 0}px`,
                            width: `${p.tablet?.size?.w || 0}px`,
                        }}>
                        <div class="center absolute flex flex-col gap-1 bg-secondary bg-opacity-75 outline outline-1 outline-secondary"
                            id="tablet_area" style={{
                                height: `${p.tablet?.area?.h || 0}px`,
                                width: `${p.tablet?.area?.w || 0}px`,
                                top: `${p.tablet?.position?.y || 0}px`,
                                left: `${p.tablet?.position?.x || 0}px`,
                                transformOrigin: "center",
                                transform: `translate(-50%, -50%) rotate(${p.tablet?.position?.r || 0}deg)`,
                            }}>
                            <div>{p.tablet?.area?.w} x {p.tablet?.area?.h}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="relative md:col-span-2 flex grow flex-col gap-2 rounded-lg bg-base-300 px-5 py-4">
                {p.editable ?
                    <div class="tooltip tooltip-left absolute right-2 top-1 cursor-help"
                        data-tip="Same values as OpenTabletDriver">
                        <i class="fa-solid fa-circle-question" />
                    </div> : null
                }
                <div>
                    <div class="text-xs">{txt(p.lang, "user.sections.setup.name")}:</div>
                    <label class="input input-sm input-bordered h-6 w-full px-2 py-1 text-base-content has-[:disabled]:border-0 has-[:disabled]:bg-base-300 has-[:disabled]/setup:p-0">
                        <select name="tablet_model" class="h-6 bg-transparent">
                            {tablets.map(t => <option value={JSON.stringify(t)} selected={p.tablet?.name === t.name}>{t.name}</option>)}
                            <option value="custom" selected={custom}>Custom</option>
                        </select>
                    </label>
                </div>
                <div id="tablet_custom" class={`${custom ? "flex " : "hidden"} flex-col gap-2`}>
                    <label>
                        <div class="text-xs">{txt(p.lang, "user.sections.setup.name")}:</div>
                        <input id="tablet_name" name="tablet_name" type="text"
                            placeholder={txt(p.lang, "user.sections.setup.name")} value={p.tablet?.name || ""}
                            class="peer input input-sm input-bordered h-6 w-full px-2 text-base-content group-has-[:disabled]/setup:px-0" />
                    </label>
                    <div>
                        <div class="text-xs">{txt(p.lang, "user.sections.setup.size")}:</div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <div>
                                <SetupInput editable={p.editable} id="tablet_size_w" name={txt(p.lang, "user.sections.setup.width")} measure="mm" value={p.tablet?.size?.w} type="number" />
                            </div>
                            <div class="w-36">
                                <SetupInput editable={p.editable} id="tablet_size_h" name={txt(p.lang, "user.sections.setup.height")} measure="mm" value={p.tablet?.size?.h} type="number" />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="text-xs">{txt(p.lang, "user.sections.setup.area")}:</div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <div class="w-36">
                            <SetupInput editable={p.editable} id="tablet_area_w" name={txt(p.lang, "user.sections.setup.width")} measure="mm" value={p.tablet?.area?.w} type="number" />
                        </div>
                        <div class="w-36">
                            <SetupInput editable={p.editable} id="tablet_area_h" name={txt(p.lang, "user.sections.setup.height")} measure="mm" value={p.tablet?.area?.h} type="number" />
                        </div>
                    </div>
                </div>
                <div>
                    <div class="text-xs">{txt(p.lang, "user.sections.setup.position")}:</div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <div class="w-28">
                            <SetupInput editable={p.editable} id="tablet_position_x" name="X" measure="mm" value={p.tablet?.position?.x} type="number" />
                        </div>
                        <div class="w-28">
                            <SetupInput editable={p.editable} id="tablet_position_y" name="Y" measure="mm" value={p.tablet?.position?.y} type="number" />
                        </div>
                        <div class="w-28">
                            <SetupInput editable={p.editable} id="tablet_position_r" name="R" measure="deg" value={p.tablet?.position?.r} type="number" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default TabletDisplay;
