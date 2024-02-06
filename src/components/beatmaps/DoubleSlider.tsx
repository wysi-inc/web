type Props = {
    name: string;
    min: number;
    max: number;
    step: number;
}

const DoubleSlider = (props: Props) => {
    return (
        <label class="form-control w-full">
            <div class="label">
                <span class="label-text">{props.name}</span>
            </div>
            <div class="grid grid-cols-2 gap-4 w-full">
                <input type="number" name={`${props.name.toLowerCase()}-min`} value={`${props.min}`} class="input input-bordered" />
                <input type="number" name={`${props.name.toLowerCase()}-max`} value={`${props.max}`} class="input input-bordered" />
            </div>
            <div class="label">
                <span class="label-text-alt">min</span>
                <span class="label-text-alt">max</span>
            </div>
        </label>
    );
}

export default DoubleSlider;
