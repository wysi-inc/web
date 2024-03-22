import type { Setup } from "@/src/models/User";

const Tablet = ({ tablet }: { tablet: Setup["tablet"] }) => {

    if (!tablet) return <div>No tablet found</div>;

    function input(id: string, name: string, value: number, measure: string = "mm") {
        return (
            <label class="input has-[:disabled]:bg-base-300 has-[:disabled]:border-0 input-sm input-bordered flex text-sm items-center gap-2">
                <span class="grow">{name}:</span>
                <input id={id} name={id}
                    type="number" placeholder="0"
                    class="peer disabled:hidden text-end w-full"
                    value={value.toString()} />
                <span class="hidden peer-disabled:block">{value}</span>
                <span>{measure}</span>
            </label>
        );
    }

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
                    {input("tablet_width", "Width", tablet.size.w)}
                    {input("tablet_height", "Height", tablet.size.h)}
                </div>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Area:</span>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    {input("area_width", "Width", tablet.area.w)}
                    {input("area_hight", "Height", tablet.area.h)}
                </div>
            </label>
            <label class="form-control">
                <div class="label">
                    <span class="label-text">Position:</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                    {input("area_x", "X", tablet.position.x)}
                    {input("area_y", "Y", tablet.position.y)}
                    {input("area_r", "R", tablet.position.r, "deg")}
                </div>
            </label>
        </div>
    </div>;
}

export default Tablet;
