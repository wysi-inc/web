import { DiffIconLink } from "@/src/components/beatmap/DiffIcon";
import CardControls from "@/src/components/web/CardControls";
import { colors } from "@/src/libs/colors";
import { getFCacc, getGradeColor, getGradeLetter, secondsToTime } from "@/src/libs/web_utils";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";
import type { Mode } from "@/src/types/osu";
import type { ScoreType } from "@/src/types/score";
import moment from "moment";
import StatusBadge from "../beatmap/StatusBadge";
import AudioPlayButton from "../web/AudioPlayButton";
import Link from "../web/Link";
import ModIcon from "./ModIcon";

async function ScoreCard(p: {
    position: number;
    score: ScoreType;
}) {

    const score = p.score;
    const beatmap = score.beatmap;
    const beatmapset = score.beatmapset;
    const acc = (score.accuracy * 100).toFixed(2);

    const fc_acc = getFCacc(score.statistics, score.mode);
    const cardImg = `https://b.ppy.sh/thumb/${beatmapset.id}l.jpg`;

    return (<>
        <div class="score_card group/card flex grow flex-row rounded-lg bg-base-300 shadow-lg" //onclick={`window.location='/scores/${score.id}';`}
            data-score={JSON.stringify(score)} data-fc-acc={fc_acc}>
            <div class="flex grow flex-col rounded-lg bg-neutral text-white shadow-lg">
                <div class="flex flex-col rounded-lg bg-cover bg-center bg-no-repeat shadow-lg"
                    style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                    <div class="grid grid-cols-1 rounded-lg bg-base-300 bg-opacity-75 backdrop-blur-sm md:grid-cols-2">
                        <div class="flex flex-row">
                            <div class="group/audio_card flex w-24 items-center justify-center rounded-lg"
                                style={{ backgroundImage: `url('${cardImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
                                <AudioPlayButton
                                    map_id={beatmap.id}
                                    set_id={beatmapset.id}
                                    set_title={beatmapset.title}
                                    set_artist={beatmapset.artist}
                                />
                            </div>
                            <div class="flex flex-col truncate px-2 py-1">
                                <Link css="truncate text-lg text-base-content underline-offset-2 hover:underline" url={`/beatmapsets/${beatmapset.id}`}>{beatmapset.title}</Link>
                                <p class="truncate text-sm text-neutral-content text-opacity-75"> by {beatmapset.artist}</p>
                            </div>
                        </div>
                        <div class="flex flex-col justify-between gap-2 rounded-lg bg-base-content bg-opacity-15 px-4 py-2">
                            <div class="flex flex-row justify-between gap-4">
                                <div class="flex flex-col gap-1 text-base-content">
                                    <div class="flex flex-row items-center gap-4">
                                        <div class="flex flex-row items-center gap-2">
                                            <i class="fa-solid fa-flag-checkered" />
                                            <span>{score.score.toLocaleString()}</span>
                                        </div>
                                        <div class="ms-auto flex flex-row justify-between gap-2 rounded-full bg-base-300 bg-opacity-40 px-2">
                                            <span class="stats_pp text-primary">{Math.round(Number(score.pp))}pp</span>
                                        </div>
                                    </div>
                                    <div class="flex flex-row gap-4 text-sm">
                                        <div class="flex flex-row items-center gap-1"><i class="fa-solid fa-fire" /> {score.max_combo.toLocaleString()}x</div>
                                        <div class="flex flex-row items-center gap-1"><i class="fa-solid fa-crosshairs" /> {acc}%</div>
                                    </div>
                                </div>
                                <div class="flex flex-row items-center gap-4">
                                    <div class="flex flex-col gap-1">
                                        <div class="ms-auto flex flex-row justify-between gap-2 rounded-full bg-base-300 bg-opacity-40 px-2">
                                            {score.beatmap.mode === "mania" && (score.statistics as any)?.perfect ?
                                                <span style={{ color: colors.judgements.x320 }}>
                                                    {(score.statistics as any)?.perfect}
                                                </span> : null}
                                            {score.statistics.count_300 ?
                                                <span style={{ color: colors.judgements.x300 }}>
                                                    {score.statistics.count_300}
                                                </span> : null}
                                            {score.beatmap.mode === "mania" && (score.statistics as any)?.good ?
                                                <span style={{ color: colors.judgements.x200 }}>
                                                    {(score.statistics as any)?.good}
                                                </span> : null}
                                            {score.statistics.count_100 ?
                                                <span style={{ color: colors.judgements.x100 }}>
                                                    {score.statistics.count_100}
                                                </span> : null}
                                            {score.statistics.count_50 ?
                                                <span style={{ color: colors.judgements.x50 }}>
                                                    {score.statistics.count_50}
                                                </span> : null}
                                            {score.statistics.count_miss ?
                                                <span style={{ color: colors.judgements.xMiss }}>
                                                    {score.statistics.count_miss}
                                                </span> : null}
                                        </div>
                                        <div class="ms-auto flex flex-row-reverse flex-wrap gap-1">
                                            {score.mods.map((mod) =>
                                                <ModIcon mod={mod} />
                                            )}
                                        </div>
                                    </div>
                                    <div class="-mt-1 text-5xl" style={{ color: getGradeColor(score.rank) }}>
                                        {getGradeLetter(score.rank)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex flex-row flex-wrap items-center gap-2 p-0.5 text-sm text-base-content text-opacity-75">
                    <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                    <DiffIconLink setId={beatmapset.id} diffId={score.beatmap.id}
                        diff={score.beatmap.difficulty_rating} size={16}
                        mode={score.beatmap.mode as Mode} name={score.beatmap.version} />
                    <Link url={`/users/${beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </Link>
                    <div class="hidden flex-row items-center gap-1 md:flex">
                        <i class="fa-solid fa-star fa-xs" />
                        <span class="stats_sr">{beatmap.difficulty_rating}</span>
                    </div>
                    <div class="hidden flex-row items-center gap-1 md:flex">
                        <span class="stats_bpm">{beatmap.bpm}bpm</span>
                    </div>
                    <div class="hidden flex-row items-center gap-1 md:flex">
                        <i class="fa-solid fa-stopwatch fa-xs" />
                        <span class="stats_len">{secondsToTime(beatmap.total_length)}</span>
                    </div>
                    <div class="tooltip ms-auto" data-tip={moment(score.created_at).format("MMMM Do YYYY")}>
                        {moment(score.created_at).fromNow()}
                    </div>
                    <div>#{p.position}</div>
                </div>
            </div>
            <CardControls set_id={beatmapset.id} />
        </div>
    </>);
}

export default ScoreCard;
