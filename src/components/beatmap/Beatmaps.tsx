import DoubleSlider from "./DoubleSlider";
import Input from "./Input";

const Beatmaps = () => {

    type RadioProps = {
        name: string;
        label: string;
    }

    function Radio({ name, label }: RadioProps) {
        return <>
            <input class="btn" type="radio" name={name} value={label} aria-label={label} checked={label === "any"} />
        </>;
    }

    type SortingProps = {
        label: string;
    }

    function Sort({ label }: SortingProps) {

        const name = label;

        label = label.toLowerCase();

        return <div class="grid">
            <label class="col-start-1 row-start-1 bg-base-300 peer/one has-[:checked]:hidden">
                <div class="grow btn btn-sm btn-ghost cursor-pointer px-2 flex flex-row gap-2 items-center">
                    <span>{name}</span>
                    <i class="fa-solid fa-caret-up" />
                </div>
                <input checked class="hidden" type="radio" name={`sort_${label}`}
                    value={`sort_off_${label}`} />
            </label>
            <label class="col-start-1 row-start-1 bg-base-300 peer/two hidden peer-has-[:checked]/one:z-20 peer-has-[:checked]/one:flex">
                <div class="grow btn btn-sm btn-ghost cursor-pointer px-2 flex flex-row gap-2 items-center">
                    <span>{name}</span>
                </div>
                <input class="hidden" type="radio" name={`sort_${label}`}
                    value={`sort_desc_${label}`} />
            </label>
            <label class="col-start-1 row-start-1 bg-base-300 hidden peer-has-[:checked]/two:z-20 peer-has-[:checked]/two:flex">
                <div class="grow btn btn-sm btn-ghost cursor-pointer px-2 flex flex-row gap-2 items-center">
                    <span>{name}</span>
                    <i class="fa-solid fa-caret-down"></i>
                </div>
                <input class="hidden" type="radio" name={`sort_${label}`}
                    value={`sort_asc_${label}`} />
            </label>
        </div>;
    }


    return <>
        <form class="flex flex-col rounded-lg drop-shadow-lg bg-base-300" onsubmit=""
            id="search-form" hx-post="/beatmaps/list"
            hx-trigger="keyup delay:500ms, change delay:500ms"
            hx-target="#beatmap-search-results">
            <div class="flex flex-col gap-4 p-4 bg-base-100 rounded-lg">
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
                            <div>Advanced Filters</div>
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
                            <Radio name="mode" label="any" />
                            <Radio name="mode" label="osu" />
                            <Radio name="mode" label="taiko" />
                            <Radio name="mode" label="fruits" />
                            <Radio name="mode" label="mania" />
                        </div>
                    </div>
                    <div class="md:col-span-3">
                        <div class="label">
                            <span class="label-text">Status</span>
                        </div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <Radio name="status" label="any" />
                            <Radio name="status" label="ranked" />
                            <Radio name="status" label="loved" />
                            <Radio name="status" label="pending" />
                            <Radio name="status" label="wip" />
                            <Radio name="status" label="graveyard" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-4">
                <div class="label">
                    <span class="label-text">Sort by</span>
                </div>
                <div class="flex flex-row gap-5 flex-wrap">
                    <Sort label="Title" />
                    <Sort label="Artist" />
                    <Sort label="Ranked" />
                    <Sort label="Plays" />
                    <Sort label="Rating" />
                    <Sort label="Difficulty" />
                    <Sort label="Favourites" />
                </div>
            </div>
        </form>
        <script src="/public/js/sliders.js" />
        <div id="beatmap-search-results" hx-trigger="load"
            hx-post="/beatmaps/list" hx-swap="innerHTML" hx-include="#search-form"
            class="bg-base-100 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
        </div>
    </>;
}

export default Beatmaps;
