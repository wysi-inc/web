import type { Setup } from "@/src/models/User";

const Tablet = ({ tablet }: { tablet: Setup["tablet"] }) => {

    if (!tablet) return <div>No tablet found</div>;

    function input(id: string, name: string, value: number, measure: string = "mm") {
        return (
            <label class="input input-bordered flex text-sm input-sm items-center gap-2">
                {name}
                <input id={id} name={id}
                    type="number" placeholder="0" class="text-end w-full"
                    value={value.toString()} />
                {measure}
            </label>
        );
    }


    return (<div>
        <h1>Tablet</h1>
        <div class="flex justify-center items-center">
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
        <div class="flex flex-col gap-2">
            <label>Name:</label>
            <input id="tablet_name" name="tablet_name"
                type="text" placeholder="Tablet name"
                class="input input-sm input-bordered" value={tablet.name} />
            <label>Size:</label>
            <div class="grid grid-cols-2 gap-2">
                {input("tablet_width", "Width", tablet.size.w)}
                {input("tablet_height", "Height", tablet.size.h)}
            </div>
            <label>Area:</label>
            <div class="grid grid-cols-2 gap-2">
                {input("area_width", "Width", tablet.area.w)}
                {input("area_hight", "Height", tablet.area.h)}
            </div>
            <label>Position:</label>
            <div class="grid grid-cols-3 gap-2">
                {input("area_x", "X", tablet.position.x)}
                {input("area_y", "Y", tablet.position.y)}
                {input("area_r", "R", tablet.position.r, "deg")}
            </div>
        </div>
    </div>);
}

export default Tablet;
