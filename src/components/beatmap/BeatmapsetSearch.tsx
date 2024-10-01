import type { MinoBeatmapSort } from "@/src/types/beatmaps";
import DoubleSlider from "./DoubleSlider";
import Input from "./Input";
import Title from "../web/Title";

const CheckBox = (p: { name: string, label: string, code: number, checked?: boolean }) => (
    <input class="btn btn-sm" type="checkbox" aria-label={p.label}
        name={p.name} value={String(p.code)} checked={p.checked} />
);

const Sort = (p: { label: string, code: MinoBeatmapSort }) => (
    <div class="flex flex-col">
        <span class="text-center text-xs">{p.label}</span>
        <div class="flex flex-row items-center justify-center">
            <label class="btn btn-square btn-ghost btn-xs has-[:checked]:btn-active">
                <input class="hidden" type="radio" name="sorting" value={`${p.code}:desc`} />
                <i class="fa-solid fa-caret-down" />
            </label>
            <label class="btn btn-square btn-ghost btn-xs has-[:checked]:btn-active">
                <input class="hidden" type="radio" name="sorting" value={`${p.code}:asc`} />
                <i class="fa-solid fa-caret-up" />
            </label>
        </div>
    </div>
);

function BeatmapsetSearch() {
    return (<>
        <Title title="Beatmap Listing" />
        <form class="flex flex-col rounded-lg bg-base-300 drop-shadow-lg" id="search-form"
            hx-post="/beatmapsets/list" hx-trigger="load, input delay:500ms"
            hx-target="#beatmap-search-results" hx-indicator="#beatmap-search-indicator"
            hx-on--before-request={`
            document.getElementById('beatmap-search-results').innerHTML=\`
                <div class="col-span-full flex items-center justify-center">
                    <span class="loading loading-spinner loading-md mx-auto" />
                </div>\`;
            `}>
            <div class="flex flex-col gap-4 rounded-lg bg-base-100 p-4">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <Input name="Title" placeholder="Beatmap Title or Artist" />
                    <Input name="Mapper" placeholder="Beatmap Mapper" />
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <DoubleSlider code="sr" name="Stars" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                    <DoubleSlider code="bpm" name="BPM" min={0} max={300} step={5} min_label="0" max_label="∞" />
                    <details class="group col-span-full rounded-lg bg-base-300">
                        <summary class="flex cursor-pointer flex-row items-center gap-4 rounded-lg px-4 py-2">
                            <i class="fa-solid fa-caret-down transform duration-200 ease-out group-open:rotate-180" />
                            <span>Advanced Filters</span>
                        </summary>
                        <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                            <DoubleSlider code="len" name="Length" min={0} max={600} step={30} min_label="0s" max_label="∞" />
                            <DoubleSlider code="year" name="Year" min={2007} max={new Date().getFullYear()} step={1} min_label="2007" max_label="now" />
                            <DoubleSlider code="ar" name="AR" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                            <DoubleSlider code="cs" name="CS" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                            <DoubleSlider code="od" name="OD" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                            <DoubleSlider code="hp" name="HP" min={0} max={10} step={0.5} min_label="0" max_label="∞" />
                        </div>
                    </details>
                </div>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-5">
                    <div class="md:col-span-2">
                        <div class="label">
                            <span class="label-text">Mode:</span>
                        </div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <CheckBox name="mode" code={0} label="osu" checked />
                            <CheckBox name="mode" code={1} label="taiko" checked />
                            <CheckBox name="mode" code={2} label="fruits" checked />
                            <CheckBox name="mode" code={3} label="mania" checked />
                        </div>
                    </div>
                    <div class="md:col-span-3">
                        <div class="label">
                            <span class="label-text">Status:</span>
                        </div>
                        <div class="flex flex-row flex-wrap gap-2">
                            <CheckBox name="status" code={1} label="ranked" checked />
                            <CheckBox name="status" code={2} label="approved" checked />
                            <CheckBox name="status" code={4} label="loved" checked />
                            <CheckBox name="status" code={3} label="qualified" />
                            <CheckBox name="status" code={0} label="pending" />
                            <CheckBox name="status" code={-1} label="wip" />
                            <CheckBox name="status" code={-2} label="graveyard" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-row flex-wrap items-center justify-center gap-4 px-4 py-2">
                <span class="text-sm">Sort by:</span>
                <div class="mx-auto flex flex-row flex-wrap gap-6">
                    <div class="flex flex-col">
                        <span class="text-center text-xs">Relevant</span>
                        <label class="btn btn-ghost btn-xs has-[:checked]:btn-active">
                            <input class="hidden" type="radio" name="sorting" value="relevant" checked />
                            <i class="fa-solid fa-caret-down" />
                        </label>
                    </div>
                    <Sort label="Ranked" code="ranked_date" />
                    <Sort label="Plays" code="play_count" />
                    <Sort label="Difficulty" code="beatmaps.difficulty_rating" />
                    <Sort label="Favourites" code="favourite_count" />
                </div>
            </div>
        </form>
        <script async type="module" src={`/public/js/sliders.js?v=${Date.now()}`} />
        <output id="beatmap-search-results" class="grid grid-cols-1 gap-4 rounded-lg bg-base-100 p-4 empty:hidden md:grid-cols-2">
            <div class="col-span-full flex items-center justify-center">
                <span class="loading loading-spinner loading-md mx-auto" />
            </div>
        </output>
    </>);
}

export default BeatmapsetSearch;
