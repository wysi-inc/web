function DoubleSlider(p: {
    name?: string,
    code: string,
    min: number,
    max: number,
    step: number,
    min_label?: string,
    max_label?: string,
}) {
    return (
        <div class="flex grow flex-col gap-2">
            {p.name ?
                <div class="grid grid-cols-3">
                    <label class="label-text-alt text-start" id={p.code + "_min_label"}>
                        {p.min_label}
                    </label>
                    <label class="label-text text-center">{p.name}</label>
                    <label class="label-text-alt text-end" id={p.code + "_max_label"}>
                        {p.max_label}
                    </label>
                </div> : null
            }
            <div class="relative h-6 w-full">
                <input type="range" class="double_slider range absolute w-full [--range-shdw:none]" name={p.code + "_min"} id={p.code + "_min_slider"}
                    min={p.min} max={p.max} value={`${p.min}`} step={`${p.step}`} />
                <input type="range" class="double_slider range absolute w-full [--range-shdw:none]" name={p.code + "_max"} id={p.code + "_max_slider"}
                    min={p.min} max={p.max} value={`${p.max}`} step={`${p.step}`} />
            </div>
        </div>
    );
}

export default DoubleSlider;
