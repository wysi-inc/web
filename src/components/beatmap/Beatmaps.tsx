import DoubleSlider from "./DoubleSlider";
import Input from "./Input";

const Beatmaps = () => {
    return (<>
        <form class="flex flex-col gap-4 p-4 rounded-lg drop-shadow-lg bg-base-100" onsubmit=""
            id="search-form"
            hx-post="/beatmaps/list"
            hx-trigger="change delay:500ms"
            hx-target="#beatmap-search-results">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="Title" placeholder="Beatmap Title or Artist" />
                <Input name="Mapper" placeholder="Beatmap Mapper" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DoubleSlider name="Stars" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                <DoubleSlider name="BPM" min={0} max={300} step={5} min_label="0" max_label="∞" />
                <div tabindex="0" class="collapse collapse-arrow bg-base-300 col-span-full">
                    <input type="checkbox" />
                    <div class="collapse-title flex flex-row gap-2 items-center">
                        <i class="fa-solid fa-sliders" />
                        <div>
                            Advanced Filters
                        </div>
                    </div>
                    <div class="collapse-content grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DoubleSlider name="Length" min={0} max={600} step={30} min_label="0s" max_label="∞" />
                        <DoubleSlider name="Year" min={2007} max={new Date().getFullYear()} step={1} min_label="2007" max_label="now" />
                        <DoubleSlider name="AR" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        <DoubleSlider name="CS" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        <DoubleSlider name="OD" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        <DoubleSlider name="HP" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-2">
                    <div class="label">
                        <span class="label-text">Modes</span>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <input class="btn" type="radio" name="mode" value="all" aria-label="all" checked />
                        <input class="btn" type="radio" name="mode" value="osu" aria-label="osu" />
                        <input class="btn" type="radio" name="mode" value="taiko" aria-label="taiko" />
                        <input class="btn" type="radio" name="mode" value="fruits" aria-label="fruits" />
                        <input class="btn" type="radio" name="mode" value="mania" aria-label="mania" />
                    </div>
                </div>
                <div class="md:col-span-3">
                    <div class="label">
                        <span class="label-text">Status</span>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <input class="btn" type="radio" name="status" value="all" aria-label="all" checked />
                        <input class="btn" type="radio" name="status" value="ranked" aria-label="ranked" />
                        <input class="btn" type="radio" name="status" value="loved" aria-label="loved" />
                        <input class="btn" type="radio" name="status" value="pending" aria-label="pending" />
                        <input class="btn" type="radio" name="status" value="wip" aria-label="wip" />
                        <input class="btn" type="radio" name="status" value="graveyard" aria-label="graveyard" />
                    </div>
                </div>
            </div>
        </form>
        <script src="/public/js/sliders.js" />
        <div id="beatmap-search-results" hx-trigger="load" hx-post="/beatmaps/list"
            class="bg-base-100 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        </div>
    </>);
}

export default Beatmaps;
