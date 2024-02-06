type Props = {
    name: string;
    min: number;
    max: number;
    step: number;
}

const DoubleSlider = (props: Props) => {

    const name = props.name.toLowerCase();

    return (
        <div class="flex flex-col gap-2">
            <div class="label">
                <label class="label-text">{props.name}</label>
            </div>
            <div class="w-full">
                <div>
                    <input type="range" class="range" name={name + "_min"} id={name + "_min"}
                        min={props.min} max={props.max} value={`${props.min}`} step={`${props.step}`} />
                    <input type="range" class="range" name={name + "_max"} id={name + "_max"}
                        min={props.min} max={props.max} value={`${props.max}`} step={`${props.step}`} />
                </div>
            </div>
            <div class="flex flex-row justify-between">
                <span class="label-text-alt" id={name + "_min_label"}>
                    {props.min}
                </span>
                <span class="label-text-alt" id={name + "_max_label"}>
                    ∞
                </span>
            </div>
        </div>
    );
}

export default DoubleSlider;
