import { colors } from "@/src/libs/colors";
import { secondsToTime } from "@/src/libs/web_utils";
import type { BeatmapExtended } from "@/src/types/beatmaps";
import type { Mod, Mode } from "@/src/types/osu";
import ModIcon from "../score/ModIcon";
import DiffIcon from "./DiffIcon";

type Props = {
    diff: BeatmapExtended,
}

function DiffStats({ diff }: Props) {

    function getProgress(label: string, value: number) {
        return (
            <tr id={`stats_${label.toLowerCase()}`} data-original-value={value} class="border-none">
                <td class="p-1">
                    {label.toUpperCase()}:
                </td>
                <td class="w-full px-2 py-1">
                    <progress class="progress progress-accent justify-between" value={value} max="11" />
                </td>
                <td class="p-1 text-end">
                    {value}
                </td>
            </tr>
        )
    }

    console.log(diff);
    const total_hits = diff.count_circles + diff.count_sliders + diff.count_spinners;

    const mods: Mod[] = ['HR', 'DT', 'HD', 'FL', 'EZ', 'HT', 'TD'];

    return (
        <div class="flex flex-col gap-2 rounded-xl bg-base-100 p-4">
            <div class="flex flex-row gap-2">
                <div id="diff_icon">
                    <DiffIcon size={24} mode={diff.mode as Mode} sr={diff.difficulty_rating} />
                </div>
                <div id="diff_version">{diff.version}</div>
            </div>
            <div class="flex flex-col gap-2 rounded-lg drop-shadow-md">
                <div class="flex flex-row flex-wrap items-center justify-around gap-2 rounded-lg bg-neutral p-2">
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-star" />
                        <div id="stats_sr" data-original-value={diff.difficulty_rating}>
                            {diff.difficulty_rating}
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-clock" />
                        <div id="stats_len" data-original-value={diff.total_length}>
                            {secondsToTime(diff.total_length)}
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-music" />
                        <div id="stats_bpm" data-original-value={diff.bpm}>
                            {diff.bpm}
                        </div>
                    </div>
                    <div id="stats_pp"><span class="loading loading-spinner loading-xs" />pp</div>
                </div>
                <table>
                    {getProgress("AR", diff.ar)}
                    {getProgress("CS", diff.cs)}
                    {getProgress("OD", diff.accuracy)}
                    {getProgress("HP", diff.drain)}
                </table>
            </div>
            <form id="stats_form" data-beatmap-id={diff.id} class="flex flex-col gap-2" data-total-hits={total_hits}>
                <div class="flex flex-row items-center justify-between gap-2 rounded-lg bg-neutral p-2">
                    <div>Accuracy:</div>
                    <span id="acc_label">100%</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                    <label class="form-control rounded-lg bg-base-200">
                        <div class="label m-0 p-0">
                            <span class="label-text px-2">100:</span>
                        </div>
                        <input type="number" name="x100"
                            class="input input-sm bg-base-300"
                            style={{ color: colors.judgements.x100 }}
                            placeholder="0" min="0" />
                    </label>
                    <label class="form-control rounded-lg bg-base-200">
                        <div class="label m-0 p-0">
                            <span class="label-text px-2">50:</span>
                        </div>
                        <input type="number" name="x50"
                            class="input input-sm bg-base-300"
                            style={{ color: colors.judgements.x50 }}
                            placeholder="0" min="0" />
                    </label>
                    <label class="form-control rounded-lg bg-base-200">
                        <div class="label m-0 p-0">
                            <span class="label-text px-2">Miss:</span>
                        </div>
                        <input type="number" name="xMiss"
                            class="input input-sm bg-base-300"
                            style={{ color: colors.judgements.xMiss }}
                            placeholder="0" min="0" />
                    </label>
                </div>
                <div class="flex flex-row flex-wrap items-center justify-center gap-2 rounded-lg bg-base-300 p-2">
                    {mods.map((mod) =>
                        <label class="easeinout icons-center flex transform 
                            cursor-pointer opacity-50 transition duration-150 hover:scale-110 has-[:checked]:opacity-100 ">
                            <input type="checkbox" name={`mod-${mod}`} class="hidden" />
                            <ModIcon mod={mod} />
                        </label>
                    )}
                </div>
                <div class="flex flex-row gap-2">
                    <button type="reset" class="btn btn-sm btn-square btn-secondary" value="reset">
                        <i class="fa-solid fa-trash-can" />
                    </button>
                    <button type="submit" class="btn btn-sm btn-primary grow">
                        <i class="fa-solid fa-calculator" />
                        Calculate
                    </button>
                </div>
            </form>
        </div>
    );
}
export default DiffStats;
