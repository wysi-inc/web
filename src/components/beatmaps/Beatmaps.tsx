import DoubleSlider from "./DoubleSlider";
import Input from "./Input";

const Beatmaps = () => {
    return (<>
        <div class="flex flex-col gap-4 p-4 rounded-lg drop-shadow-lg bg-custom-900">
            <div class="flex flex-row items-center justify-between p-4 text-xl rounded-lg bg-custom-950">
                <div>Beatmap Search:</div>
                <div class="flex flex-row items-center gap-2">
                    <button hx-post="/beatmaps">
                        Clear
                    </button>
                    <div class="tooltip" data-tip="Copy">
                        coppy
                    </div>
                </div>
            </div>
            <form class="flex flex-col gap-4" hx-post="/beatmaps/list"
                hx-target="#beatmaps-results">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Input name="Title" placeholder="Beatmap Title or Artist" />
                    <Input name="Mapper" placeholder="Beatmap Mapper" />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <DoubleSlider name="Stars" min={0} max={10} step={0.5} />
                    <DoubleSlider name="BPM" min={0} max={300} step={5} />
                    <DoubleSlider name="Length" min={0} max={600} step={30} />
                    <DoubleSlider name="Year" min={2007} max={new Date().getFullYear()} step={30} />
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div class="label">
                            <span class="label-text">Modes</span>
                        </div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <input class="btn" type="checkbox" name="mode-osu" aria-label="osu" />
                            <input class="btn" type="checkbox" name="mode-taiko" aria-label="taiko" />
                            <input class="btn" type="checkbox" name="mode-fruits" aria-label="fruits" />
                            <input class="btn" type="checkbox" name="mode-mania" aria-label="mania" />
                        </div>
                    </div>
                    <div>
                        <div class="label">
                            <span class="label-text">Status</span>
                        </div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <input class="btn" type="checkbox" name="status-ranked" aria-label="ranked" />
                            <input class="btn" type="checkbox" name="status-approved" aria-label="approved" />
                            <input class="btn" type="checkbox" name="status-qualified" aria-label="qualified" />
                            <input class="btn" type="checkbox" name="status-loved" aria-label="loved" />
                            <input class="btn" type="checkbox" name="status-pending" aria-label="pending" />
                            <input class="btn" type="checkbox" name="status-wip" aria-label="wip" />
                            <input class="btn" type="checkbox" name="status-graveyard" aria-label="graveyard" />
                        </div>
                    </div>
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
        <div id="beatmaps-results">
            list
        </div>
    </>)
}

export default Beatmaps;
