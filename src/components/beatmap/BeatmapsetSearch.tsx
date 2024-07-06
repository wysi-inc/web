import DoubleSlider from "./DoubleSlider";
import Input from "./Input";

// "Title" 
// "Artist"
// "Plays"
// "Rating"
// "Difficulty"
// "Favourites"

type SortingProps = {
    label: string;
    code: "ranked_date" | "title" | "artist" | "playcount" | "rating" | "beatmaps.difficulty_rating" | "favourite_count";
}

type RadioProps = {
    name: string,
    label: string,
    code: number,
}

const Radio = (p: RadioProps) => <>
    <input class="btn" type="radio"
        name={p.name} value={String(p.code)}
        aria-label={p.label}
        checked={p.label === "any"} />
</>

const Sort = ({ label, code }: SortingProps) => <>
    <div class="grid">
        <label class="peer col-start-1 row-start-1 has-[:checked]:hidden">
            <div class="grow btn btn-sm btn-ghost cursor-pointer px-2">
                <span>{label}</span>
            </div>
            <input value={code} class="hidden" type="radio" name="sorting_title"
                checked={code === "ranked_date"} />
        </label>
        <div class="hidden col-start-1 row-start-1 disabled peer-has-[:checked]:enabled peer-has-[:checked]:grid">
            <label class="peer/one col-start-1 row-start-1 has-[:checked]:hidden flex">
                <div class="grow btn btn-sm btn-ghost cursor-pointer px-2 flex flex-row gap-2 items-center">
                    <span>{label}</span>
                    <i class="fa-solid fa-caret-down" />
                </div>
                <input class="hidden" type="radio" name="sorting"
                    value={`${code}:asc`} />
            </label>
            <label class="col-start-1 row-start-1 hidden peer-has-[:checked]/one:flex">
                <div class="grow btn btn-sm btn-ghost cursor-pointer px-2 flex flex-row gap-2 items-center">
                    <span>{label}</span>
                    <i class="fa-solid fa-caret-up" />
                </div>
                <input class="hidden" type="radio" name="sorting"
                    value={`${code}:desc`}
                    checked={code === "ranked_date"} />
            </label>
        </div>
    </div>
</>

const BeatmapsetSearch = () => <>
    <form class="flex flex-col rounded-lg drop-shadow-lg bg-base-300" id="search-form"
        hx-post="/beatmapsets/list" hx-trigger="load, input delay:500ms" hx-target="#beatmap-search-results"
        hx-on--before-request="document.getElementById('beatmap-search-results').innerHTML='';">
        <div class="flex flex-col gap-4 p-4 bg-base-100 rounded-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input name="Title" placeholder="Beatmap Title or Artist" />
                <Input name="Mapper" placeholder="Beatmap Mapper" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <DoubleSlider code="sr" name="Stars" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                <DoubleSlider code="bpm" name="BPM" min={0} max={300} step={5} min_label="0" max_label="∞" />
                <details class="group bg-base-300 rounded-lg col-span-full">
                    <summary class="cursor-pointer rounded-lg flex flex-row gap-4 px-4 py-2 items-center">
                        <i class="group-open:rotate-180 transform ease-out duration-200 fa-solid fa-caret-down" />
                        <span>Advanced Filters</span>
                    </summary>
                    <div class="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <DoubleSlider code="len" name="Length" min={0} max={600} step={30} min_label="0s" max_label="∞" />
                        <DoubleSlider code="year" name="Year" min={2007} max={new Date().getFullYear()} step={1} min_label="2007" max_label="now" />
                        <DoubleSlider code="ar" name="AR" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        <DoubleSlider code="cs" name="CS" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        <DoubleSlider code="od" name="OD" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        <DoubleSlider code="hp" name="HP" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                    </div>
                </details>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div class="md:col-span-2">
                    <div class="label">
                        <span class="label-text">Mode:</span>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <Radio name="mode" code={-1} label="any" />
                        <Radio name="mode" code={0} label="osu" />
                        <Radio name="mode" code={1} label="taiko" />
                        <Radio name="mode" code={2} label="fruits" />
                        <Radio name="mode" code={3} label="mania" />
                    </div>
                </div>
                <div class="md:col-span-3">
                    <div class="label">
                        <span class="label-text">Status:</span>
                    </div>
                    <div class="flex flex-row flex-wrap gap-2">
                        <Radio name="status" code={-3} label="any" />
                        <Radio name="status" code={1} label="ranked" />
                        <Radio name="status" code={2} label="approved" />
                        <Radio name="status" code={4} label="loved" />
                        <Radio name="status" code={3} label="qualified" />
                        <Radio name="status" code={0} label="pending" />
                        <Radio name="status" code={-1} label="wip" />
                        <Radio name="status" code={-2} label="graveyard" />
                    </div>
                </div>
            </div>
        </div>
        <div class="p-4 flex flex-row flex-wrap items-center gap-4">
            <span class="text-sm">Sort by:</span>
            <div class="flex flex-row gap-4 flex-wrap">
                <Sort label="Title" code="title" />
                <Sort label="Artist" code="artist" />
                <Sort label="Ranked" code="ranked_date" />
                <Sort label="Plays" code="playcount" />
                <Sort label="Rating" code="rating" />
                <Sort label="Difficulty" code="beatmaps.difficulty_rating" />
                <Sort label="Favourites" code="favourite_count" />
            </div>
        </div>
    </form>
    <script async type="module" src={`/public/js/sliders.js?v=${Date.now()}`} />
    <output id="beatmap-search-results" class="empty:hidden peer bg-base-100 grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg" />
</>

export default BeatmapsetSearch;
