import type { MinoBeatmapSort } from "@/src/types/beatmaps";
import Title from "../web/Title";
import DoubleSlider from "./DoubleSlider";
import Input from "./Input";

const CheckBox = (p: { name: string; label: string; code: number; checked?: boolean }) => (
    <input class="btn btn-sm" type="checkbox" aria-label={p.label} name={p.name} value={String(p.code)} checked={p.checked} />
);

const Sort = (p: { label: string; code: MinoBeatmapSort }) => (
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
    return (
        <>
            <form class="flex flex-col rounded-lg bg-base-300 drop-shadow-lg" id="search-form" oninput="getBeatmaps(0)">
                <div class="flex flex-col gap-4 rounded-lg bg-base-100 p-4">
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <Input name="Title" placeholder="Beatmap Title or Artist" />
                        <Input name="Mapper" placeholder="Beatmap Mapper" />
                    </div>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <DoubleSlider code="sr" name="Stars" min={0} max={10} step={0.1} min_label="0" max_label="∞" />
                        <DoubleSlider code="bpm" name="BPM" min={0} max={300} step={1} min_label="0" max_label="∞" />
                        <details class="group col-span-full rounded-lg bg-base-300">
                            <summary class="flex cursor-pointer flex-row items-center gap-4 rounded-lg px-4 py-2">
                                <i class="fa-solid fa-caret-down transform duration-200 ease-out group-open:rotate-180" />
                                <span>Advanced Filters</span>
                            </summary>
                            <div class="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
                                <DoubleSlider code="len" name="Length" min={0} max={600} step={10} min_label="0s" max_label="∞" />
                                <DoubleSlider code="year" name="Year" min={2007} max={new Date().getFullYear()} step={1} min_label="2007" max_label="now" />
                                <DoubleSlider code="ar" name="AR" min={0} max={10} step={0.1} min_label="0" max_label="∞" />
                                <DoubleSlider code="cs" name="CS" min={0} max={10} step={0.1} min_label="0" max_label="∞" />
                                <DoubleSlider code="od" name="OD" min={0} max={10} step={0.1} min_label="0" max_label="∞" />
                                <DoubleSlider code="hp" name="HP" min={0} max={10} step={0.1} min_label="0" max_label="∞" />
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
            <output id="beatmap-search-results" class="peer empty:hidden grid grid-cols-1 gap-4 rounded-lg bg-base-100 p-4 md:grid-cols-2" />
            <div class="peer-empty:flex hidden col-span-full items-center justify-center">
                <span class="loading loading-spinner loading-md mx-auto" />
            </div>
            <Title title="Beatmap Listing" scripts={["/public/js/sliders.js", "/public/js/beatmapsearch.js"]} />
            <template id="beatmapset-template">
                <div class="group/card flex flex-row rounded-lg bg-base-300 shadow-lg">
                    <div class="flex grow flex-col rounded-lg bg-neutral shadow-lg">
                        <div class="set_bg_img flex flex-col rounded-lg shadow-lg bg-cover bg-center bg-no-repeat">
                            <div class="relative grid grid-cols-4 rounded-lg bg-base-300 bg-opacity-75 backdrop-blur-sm">
                                <div class="set_bg_img group/audio_card flex items-center justify-center rounded-lg bg-center bg-no-repeat bg-cover" />
                                <div class="col-span-3 flex grow flex-col px-2 py-1">
                                    <a
                                        class="set_title truncate text-lg text-base-content underline-offset-2 hover:underline"
                                        hx-push-url="true"
                                        hx-target="#main"
                                        hx-swap="innerHTML show:window:top"
                                        hx-indicator="#page-loading"
                                    />
                                    <span class="set_artist truncate text-sm text-neutral-content text-opacity-75" />
                                    <a
                                        class="set_mapper truncate text-sm text-neutral-content text-opacity-75 underline-offset-2 hover:underline"
                                        hx-push-url="true"
                                        hx-target="#main"
                                        hx-swap="innerHTML show:window:top"
                                        hx-indicator="#page-loading"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-row flex-wrap items-center gap-2 p-0.5 text-sm text-base-content text-opacity-75">
                            <div class="set_badge badge badge-sm m-0 border-0 text-opacity-100" style="color: #000" />
                            <div class="set_diffs flex flex-row gap-1" />
                            <div class="ms-auto flex flex-row gap-2 text-xs">
                                <span class="tooltip">
                                    <i class="fa-solid fa-heart" />
                                </span>
                                <span class="tooltip">
                                    <i class="fa-solid fa-arrow-rotate-left" />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </>
    );
}

export default BeatmapsetSearch;
