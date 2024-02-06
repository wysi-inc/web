import BeatmapsList from "./BeatmapsList";
import DoubleSlider from "./DoubleSlider";
import Input from "./Input";

type Props = {
    query: any;
}

const Beatmaps = (props: Props) => {
    return (<>
        <form class="flex flex-col gap-4 p-4 mb-4 rounded-lg drop-shadow-lg bg-base-100" onsubmit=""
            hx-post="/beatmaps/list"
            hx-trigger="change delay:500ms"
            hx-target="#beatmaps-results">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="Title" placeholder="Beatmap Title or Artist" />
                <Input name="Mapper" placeholder="Beatmap Mapper" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DoubleSlider name="Stars" min={0} max={10} step={0.5} />
                <DoubleSlider name="BPM" min={0} max={300} step={5} />
                <DoubleSlider name="Length" min={0} max={600} step={30} />
                <DoubleSlider name="Year" min={2007} max={new Date().getFullYear()} step={1} />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        </form>
        <script src="/public/js/sliders.js"></script>
        <div id="beatmaps-results" class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BeatmapsList query={props.query} />
        </div>
    </>)
}

export default Beatmaps;
