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
                <progress value={value} max="11"
                    class="justify-between progress progress-accent"
                />
                <span class="w-10 text-end">
                    {value}
                </span>
            </div>
        )
    }

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
                <div class="flex flex-row flex-wrap items-center justify-center gap-8">
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-star" />
                        <div>{props.diff.difficulty_rating}</div>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-clock" />
                        <div>{secondsToTime(props.diff.total_length)}</div>
                    </div>
                    <div class="flex flex-row items-center gap-1">
                        <i class="fa-solid fa-music" />
                        <div>{props.diff.bpm}</div>
                    </div>
                    <div>3pp</div>
                </div>
                {getProgress("AR", props.diff.ar)}
                {getProgress("CS", props.diff.cs)}
                {getProgress("OD", props.diff.accuracy)}
                {getProgress("HP", props.diff.drain)}
            </div>
            <form id="stats_form">
                <label class="input input-bordered flex items-center gap-2"
                    style={{
                        color: colors.judgements.x100,
                    }}>
                    100
                    <input type="number" name="x100"
                        class="grow text-neutral-content text-right"
                        placeholder="0" min="0" />
                </label>
                <label class="input input-bordered flex items-center gap-2"
                    style={{
                        color: colors.judgements.x50,
                    }}>
                    50
                    <input type="number" name="x50"
                        class="grow text-neutral-content text-right"
                        placeholder="0" min="0" />
                </label>
                <label class="input input-bordered flex items-center gap-2"
                    style={{
                        color: colors.judgements.xMiss
                    }}>
                    Miss
                    <input type="number" name="xMiss"
                        class="grow text-neutral-content text-right"
                        placeholder="0" min="0" />
                </label>
            </form>
            <script src="/public/js/stats.js" />
        </div>
    );
}
export default DiffStats;
