import { getGradeColor, getGradeLetter, secondsToTime } from "@/src/libs/web_utils";
import { colors } from "@/src/libs/colors";
import { tools } from "osu-api-extended";
import moment from "moment";
import { DiffIconLink } from "@/src/components/beatmap/DiffIcon";
import CardControls from "@/src/components/web/CardControls";
import StatusBadge from "../beatmap/StatusBadge";
import ModIcon from "./ModIcon";
import AudioPlayButton from "../web/AudioPlayButton";
import Link from "../web/Link";
import type { Score } from "@/src/types/users";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";

type Props = {
    position: number;
    score: Score;
}

const ScoreCard = async ({ score, position }: Props) => {

    const beatmap = score.beatmap;
    const beatmapset = score.beatmapset;
    const acc = (score.accuracy * 100).toFixed(2);
    const fc_acc = tools.accuracy({
        "300": (score.statistics.great + (score.statistics.miss || 0)).toString() || "0",
        "100": score.statistics.ok?.toString() || "0",
        "50": score.statistics.meh?.toString() || "0",
        "0": "0",
        "geki": "0",
        "katu": "0"
    }, beatmap.mode as Mode);

    // const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;
    const cardImg = `https://b.ppy.sh/thumb/${beatmapset.id}l.jpg`;

    return <>
        <div class="score_card group grow rounded-lg flex flex-row bg-base-300 shadow-lg" //onclick={`window.location='/scores/${score.id}';`}
            data-score={JSON.stringify(score)} data-fc-acc={fc_acc}>
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="bg-cover bg-center bg-no-repeat flex flex-col rounded-lg shadow-lg" data-bg={cardImg}
                    style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div class="bg-base-300 bg-opacity-75 grid grid-cols-1 md:grid-cols-2 rounded-lg backdrop-blur-sm">
                        <div class="flex flex-row">
                            <div class="group rounded-lg w-24 flex items-center justify-center" data-bg={cardImg}
                                style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                <AudioPlayButton css="hidden bg-opacity-50 hover:bg-opacity-75 border-none group-hover:flex btn btn-sm w-full h-full"
                                    beatmap_id={beatmap.id}
                                    set_id={beatmapset.id}
                                    beatmap_title={beatmapset.title}
                                    beatmap_artist={beatmapset.artist}
                                />
                            </div>
                            <div class="flex flex-col py-2 px-4 truncate">
                                <Link css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmapsets/${beatmapset.id}`}>{beatmapset.title}</Link>
                                <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmapset.artist}</p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 py-2 px-4 justify-between rounded-lg bg-base-content bg-opacity-15">
                            <div class="flex flex-row justify-between gap-4">
                                <div class="flex flex-col gap-1 text-base-content">
                                    <div class="flex flex-row gap-4 items-center">
                                        <div class="flex flex-row gap-2 items-center">
                                            <i class="fa-solid fa-flag-checkered" />
                                            <span>{score.total_score.toLocaleString()}</span>
                                        </div>
                                        <span class="stats_pp">{Math.round(Number(score.pp))}pp</span>
                                    </div>
                                    <div class="text-sm flex flex-row gap-4">
                                        <div class="flex flex-row gap-1 items-center"><i class="fa-solid fa-fire" /> {score.max_combo.toLocaleString()}x</div>
                                        <div class="flex flex-row gap-1 items-center"><i class="fa-solid fa-crosshairs" /> {acc}%</div>
                                    </div>
                                </div>
                                <div class="flex flex-row gap-4 items-center">
                                    <div class="flex flex-col gap-1">
                                        <div class="ms-auto bg-opacity-40 flex flex-row justify-between gap-2 px-2 bg-base-300 rounded-full">
                                            {score.beatmap.mode === "mania" && (score.statistics as any)?.perfect ?
                                                <span style={{ color: colors.judgements.x320 }}>
                                                    {(score.statistics as any)?.perfect}
                                                </span> : <></>}
                                            {score.statistics.great ?
                                                <span style={{ color: colors.judgements.x300 }}>
                                                    {score.statistics.great}
                                                </span> : <></>}
                                            {score.beatmap.mode === "mania" && (score.statistics as any)?.good ?
                                                <span style={{ color: colors.judgements.x200 }}>
                                                    {(score.statistics as any)?.good}
                                                </span> : <></>}
                                            {score.statistics.ok ?
                                                <span style={{ color: colors.judgements.x100 }}>
                                                    {score.statistics.ok}
                                                </span> : <></>}
                                            {score.statistics.meh ?
                                                <span style={{ color: colors.judgements.x50 }}>
                                                    {score.statistics.meh}
                                                </span> : <></>}
                                            {score.statistics.miss ?
                                                <span style={{ color: colors.judgements.xMiss }}>
                                                    {score.statistics.miss}
                                                </span> : <></>}
                                        </div>
                                        <div class="ms-auto flex flex-wrap flex-row-reverse gap-1">
                                            {score.mods.map((mod) =>
                                                <ModIcon mod={mod.acronym} />
                                            )}
                                        </div>
                                    </div>
                                    <div class="text-5xl -mt-1" style={{ color: getGradeColor(score.rank) }}>
                                        {getGradeLetter(score.rank)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-opacity-75 text-base-content py-1 px-2 flex flex-row flex-wrap gap-4 items-center">
                    <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                    <DiffIconLink setId={beatmapset.id} diffId={score.beatmap.id}
                        diff={score.beatmap.difficulty_rating} size={20}
                        mode={score.beatmap.mode as Mode} name={score.beatmap.version} />
                    <Link url={`/users/${beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </Link>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-star fa-xs" />
                        <span class="stats_sr">{beatmap.difficulty_rating}</span>
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <span class="stats_bpm">{beatmap.bpm}bpm</span>
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-stopwatch fa-xs" />
                        <span class="stats_len">{secondsToTime(beatmap.total_length)}</span>
                    </div>
                    <div class="ms-auto tooltip" data-tip={moment(new Date(score.ended_at)).format("MMMM Do YYYY")}>
                        {moment(new Date(score.ended_at)).fromNow()}
                    </div>
                    <div>#{position}</div>
                </div>
            </div>
            <CardControls set_id={beatmapset.id} />
        </div>
    </>
}

export default ScoreCard;
