import type { Setup } from "@/src/models/User";
import { Input } from "./Input";

const Tablet = ({ tablet }: { tablet: Setup["tablet"] }) => {

    if (!tablet) return <div>No tablet found</div>;

    return <div class="flex flex-col">
        <h1 class="text-center">Tablet</h1>
        <div class="flex justify-center items-center h-36">
            <div class="relative outline outline-1 overflow-hidden rounded-lg"
                id="tablet" style={{
                    height: `${tablet.size.h}px`,
                    width: `${tablet.size.w}px`,
                }}>
                <div class="absolute flex flex-col items-center justify-center gap-1 outline outline-1 outline-secondary bg-secondary bg-opacity-75"
                    id="tablet_area" style={{
                        height: `${tablet.area.h}px`,
                        width: `${tablet.area.w}px`,
                        top: `${tablet.position.y}px`,
                        left: `${tablet.position.x}px`,
                        rotate: `${tablet.position.r}deg`,
                    }}>
                    <div>{tablet.area.w} x {tablet.area.h}</div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-2 grow">
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Name:</span>
                </div>
                <input id="tablet_name" name="tablet_name"
                    type="text" placeholder="Tablet name"
                    class="input input-sm input-bordered peer disabled:hidden w-full" value={tablet.name} />
                <span class="input input-sm bg-base-300 hidden peer-disabled:block">{tablet.name}</span>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Size:</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <Input id="tablet_width" name="Width" measure="mm" value={tablet.size.w} type="number" />
                    <Input id="tablet_height" name="Height" measure="mm" value={tablet.size.h} type="number" />
                </div>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Area:</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <Input id="area_width" name="Width" measure="mm" value={tablet.area.w} type="number" />
                    <Input id="area_hight" name="Height" measure="mm" value={tablet.area.h} type="number" />
                </div>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Position:</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                    <Input id="area_x" name="X" measure="mm" value={tablet.position.x} type="number" />
                    <Input id="area_y" name="Y" measure="mm" value={tablet.position.y} type="number" />
                    <Input id="area_r" name="R" measure="deg" value={tablet.position.r} type="number" />
                </div>
            </label>
        </div>
    </div>;
}

export default Tablet;
