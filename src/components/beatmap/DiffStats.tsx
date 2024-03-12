import type { Beatmap } from "@/src/types/beatmaps";
import DiffIcon from "./DiffIcon";
import { secondsToTime } from "@/src/resources/functions";
import { colors } from "@/src/resources/colors";

type Props = {
    diff: Beatmap,
}

const DiffStats = (props: Props) => {

    function getProgress(label: string, value: number): JSX.Element {
        return (
            <div id={`stats_${label.toLowerCase()}`} class="flex flex-row items-center gap-3">
                <label class="w-10 text-start">{label.toUpperCase()}:</label>
                <progress class="justify-between progress progress-accent"
                    value={value} max="11" />
                <span class="w-10 text-end">
                    {value}
                </span>
            </div>
        )
    }

    const total_hits = props.diff.count_circles + props.diff.count_sliders + props.diff.count_spinners;

    const mods: string[] = ['HR', 'DT', 'HD', 'FL', 'EZ', 'HT'];

    return (
        <div class="flex flex-col gap-4 p-4 rounded-xl bg-base-100">
            <div class="flex flex-row gap-2">
                <DiffIcon setId={props.diff.beatmapset_id} diffId={props.diff.id}
                    size={24} mode={props.diff.mode}
                    diff={props.diff.difficulty_rating}
                    name={props.diff.version} />
                <div>{props.diff.version}</div>
            </div>
            <div class="flex flex-col gap-2 rounded-lg drop-shadow-md">
                <div class="flex flex-row flex-wrap items-center justify-around gap-2 rounded-lg p-2 bg-neutral">
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-star" />
                        <div id="stats_sr">{props.diff.difficulty_rating}</div>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-clock" />
                        <div id="stats_len"
                            data-len={props.diff.total_length}>
                            {secondsToTime(props.diff.total_length)}
                        </div>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-music" />
                        <div id="stats_bpm">{props.diff.bpm}</div>
                    </div>
                    <div id="stats_pp">0pp</div>
                </div>
                <div class="flex flex-col p-2 gap-2">
                    {getProgress("AR", props.diff.ar)}
                    {getProgress("CS", props.diff.cs)}
                    {getProgress("OD", props.diff.accuracy)}
                    {getProgress("HP", props.diff.drain)}
                </div>
            </div>
            <form id="stats_form" data-beatmap-id={props.diff.id}
                class="flex flex-col gap-2"
                data-total-hits={total_hits}>
                <div class="flex flex-row items-center justify-between p-2 gap-2 rounded-lg bg-neutral">
                    <div>Accuracy:</div>
                    <span id="acc_label">100%</span>
                </div>
                <div class="grid grid-cols-3 gap-2">
                    <label class="form-control bg-base-200 rounded-lg">
                        <div class="label m-0 p-0">
                            <span class="label-text px-2">100:</span>
                        </div>
                        <input type="number" name="x100"
                            class="input input-sm bg-base-300"
                            style={{ color: colors.judgements.x100 }}
                            placeholder="0" min="0" />
                    </label>
                    <label class="form-control bg-base-200 rounded-lg">
                        <div class="label m-0 p-0">
                            <span class="label-text px-2">50:</span>
                        </div>
                        <input type="number" name="x50"
                            class="input input-sm bg-base-300"
                            style={{ color: colors.judgements.x50 }}
                            placeholder="0" min="0" />
                    </label>
                    <label class="form-control bg-base-200 rounded-lg">
                        <div class="label m-0 p-0">
                            <span class="label-text px-2">Miss:</span>
                        </div>
                        <input type="number" name="xMiss"
                            class="input input-sm bg-base-300"
                            style={{ color: colors.judgements.xMiss }}
                            placeholder="0" min="0" />
                    </label>
                </div>
                <div class="flex flex-row flex-wrap justify-center bg-base-300 rounded-lg gap-2 p-2">
                    {mods.map((mod) =>
                        <div class="">
                            <label>
                                <input type="checkbox" name={`mod-${mod}`} class="hidden" />
                                <img src={`/public/img/mods/${mod.toLowerCase()}.png`}
                                    class="h-6 mod_img cursor-pointer"
                                />
                            </label>
                        </div>
                    )}
                </div>
                <div class="flex flex-row gap-2">
                    <button type="reset" class="btn btn-secondary" value="reset">
                        <i class="fa-solid fa-trash-can" />
                    </button>
                    <button type="submit" class="grow btn btn-primary">
                        <i class="fa-solid fa-calculator" />
                        Calculate
                    </button>
                </div>
            </form>
            <script src="/public/js/stats.js" />
        </div>
    );
}
export default DiffStats;
