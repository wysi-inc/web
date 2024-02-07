type Props = {
    name: string;
    min: number;
    max: number;
    min_label: string;
    max_label: string;
    step: number;
}

const DoubleSlider = (props: Props) => {

    const name = props.name.toLowerCase();

    return (
        <div class="flex flex-col gap-2">
            <div class="grid grid-cols-3">
                <span class="label-text-alt text-start" id={name + "_min_label"}>
                    {props.min_label}
                </span>
                <label class="label-text text-center">{props.name}</label>
                <span class="label-text-alt text-end" id={name + "_max_label"}>
                    {props.max_label}
                </span>
            </div>
            <div class="w-full">
                <div>
                    <input type="range" class="range" name={name + "_min"} id={name + "_min"}
                        min={props.min} max={props.max} value={`${props.min}`} step={`${props.step}`} />
                    <input type="range" class="range" name={name + "_max"} id={name + "_max"}
                        min={props.min} max={props.max} value={`${props.max}`} step={`${props.step}`} />
                </div>
            </div>
        </div>
    );
}

export default DoubleSlider;
