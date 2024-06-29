import moment from "moment";
import { tools } from "osu-api-extended";
import type { Score } from "@/src/types/users";
import type { Mode } from "@/src/types/osu";
import DiffIcon from "@/src/components/beatmap/DiffIcon";
import CardControls from "@/src/components/web/CardControls";
import HxA from "../web/HxA";
import StatusBadge from "../beatmap/StatusBadge";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";
import ModIcon from "./ModIcon";
import { getGradeColor, getGradeLetter, secondsToTime } from "@/src/libs/web_utils";
import { colors } from "@/src/libs/colors";
import AudioPlayButton from "../web/AudioPlayButton";

type Props = {
    position: number;
    score: Score;
}

const ScoreCard = async ({ score, position }: Props) => {

    const beatmap = score.beatmap;
    const beatmapset = score.beatmapset;

    const cardImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/card.jpg?${beatmapset.id}`;

    const acc = (score.accuracy * 100).toFixed(2);
    const fc_acc = tools.accuracy({
        "300": (score.statistics.great + (score.statistics.miss || 0)).toString() || "0",
        "100": score.statistics.ok?.toString() || "0",
        "50": score.statistics.meh?.toString() || "0",
        "0": "0",
        "geki": "0",
        "katu": "0"
    }, beatmap.mode as Mode);

    let stats = {} as any;

    if (score.mods.length > 0 || score.legacy_perfect === false) {
        const url = `https://catboy.best/api/meta/${beatmap.id}?misses=0&acc=${fc_acc}&mods=${score.mods_id}`;
        const res = await fetch(url);
        if (res.ok) {
            const data = await res.json() as any;
            stats.sr = data.difficulty?.stars?.toFixed(2);
            stats.ar = data.map.ar?.toFixed(1);
            stats.cs = data.map.cs?.toFixed(1);
            stats.od = data.map.od?.toFixed(1);
            stats.hp = data.map.hp?.toFixed(1);
            stats.pp = Math.round(data?.pp?.[Number(fc_acc)]?.pp);
            if (stats.pp <= Number(score.pp) + 10) {
                stats.pp = null;
            }
            if (score.mods.find((mod) => mod.acronym === "DT")) {
                stats.length = Math.round(beatmap.total_length / 1.5);
                stats.bpm = beatmap.bpm * 1.5;
            } else if (score.mods.find((mod) => mod.acronym === "HT")) {
                stats.length = Math.round(beatmap.total_length / 0.75);
                stats.bpm = beatmap.bpm * 0.75;
            }
        }
    }

    return <>
        <div class="group grow rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="bg-cover bg-center bg-no-repeat flex flex-col rounded-lg shadow-lg"
                    style={{
                        background: `url(${cardImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}>
                    <div class="bg-base-300 bg-opacity-75 grid grid-cols-1 md:grid-cols-2 rounded-lg backdrop-blur-sm">
                        <div class="flex flex-row">
                            <div class="group rounded-lg w-24 flex items-center justify-center"
                                style={{
                                    background: `url(${cardImg})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundRepeat: "no-repeat"
                                }}>
                                <AudioPlayButton css="hidden bg-opacity-50 hover:bg-opacity-75 border-none group-hover:flex btn btn-sm w-full h-full"
                                    beatmap_id={beatmap.id}
                                    set_id={beatmapset.id}
                                    beatmap_title={beatmapset.title}
                                    beatmap_artist={beatmapset.artist}
                                />
                            </div>
                            <div class="flex flex-col py-2 px-4 truncate">
                                <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmaps/${beatmapset.id}`}>{beatmapset.title}</HxA>
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
                                        {stats?.pp ?
                                            <div class="tooltip" data-tip={`${stats.pp}pp if FC`}>
                                                <span class="text-base-content text-opacity-60">{Math.round(Number(score.pp))}pp</span>
                                            </div> :
                                            <div>
                                                <span>{Math.round(Number(score.pp))}pp</span>
                                            </div>
                                        }
                                    </div>
                                    <div class="text-sm flex flex-row gap-4">
                                        <div class="flex flex-row gap-1 items-center"><i class="fa-solid fa-fire" /> {score.max_combo.toLocaleString()}x</div>
                                        <div class="flex flex-row gap-1 items-center"><i class="fa-solid fa-crosshairs" /> {acc}%</div>
                                    </div>
                                </div>
                                <div class="flex flex-row gap-4 items-center">
                                    <div class="flex flex-col gap-1">
                                        <div class="bg-opacity-40 flex flex-row gap-2 px-2 bg-base-300 rounded-full">
                                            {score.statistics.great ?
                                                <span style={{ color: colors.judgements.x300 }}>
                                                    {score.statistics.great}
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
                    <DiffIcon setId={beatmapset.id} diffId={score.beatmap.id}
                        diff={score.beatmap.difficulty_rating} size={20}
                        mode={score.beatmap.mode} name={score.beatmap.version} />
                    <HxA url={`/users/${beatmapset.user_id}`}>
                        <div class="tooltip" data-tip={beatmapset.creator}>
                            <i class="fa-solid fa-user-pen" />
                        </div>
                    </HxA>
                    {/*<div class="tooltip hidden md:block" data-tip={moment(new Date(beatmap.last_updated)).format("DD/MM/YYYY")}>
                        {new Date(beatmap.last_updated).getFullYear()}
                    </div>*/}
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-star fa-xs" />
                        {stats?.sr ?
                            <span class={`text-opacity-75
                                    ${stats.sr > beatmap.difficulty_rating && "text-error tooltip"}
                                    ${stats.sr < beatmap.difficulty_rating && "text-success tooltip"}
                                `}
                                data-tip={`★ ${beatmap.difficulty_rating}`}>
                                {stats.sr}
                            </span> :
                            <span>{beatmap.difficulty_rating}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        {stats?.bpm ?
                            <span class={`text-opacity-75
                                    ${Math.round(stats.bpm) > Math.round(beatmap.bpm) && "text-error tooltip"}
                                    ${Math.round(stats.bpm) < Math.round(beatmap.bpm) && "text-success tooltip"}
                                `}
                                data-tip={`${beatmap.bpm}bpm`}>
                                {stats.bpm}bpm
                            </span> :
                            <span>{beatmap.bpm}bpm</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-stopwatch fa-xs" />
                        {stats?.length ?
                            <span class={`text-opacity-75
                                    ${stats.length > beatmap.total_length && "text-error tooltip"}
                                    ${stats.length < beatmap.total_length && "text-success tooltip"}
                                `}
                                data-tip={`${secondsToTime(beatmap.total_length)}`}>
                                {secondsToTime(stats.length)}
                            </span> :
                            <span>{secondsToTime(beatmap.total_length)}</span>
                        }
                    </div>
                    {/*
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        {stats?.ar ?
                            <span class={`text-opacity-75
                                    ${stats.ar > beatmap.ar && "text-error tooltip"}
                                    ${stats.ar < beatmap.ar && "text-success tooltip"}
                                `}
                                data-tip={`ar:${beatmap.ar}`}>
                                {stats.ar}
                            </span> :
                            <span class="tooltip" data-tip="ar">{beatmap.ar}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        {stats?.cs ?
                            <span class={`text-opacity-75
                                    ${stats.cs > beatmap.cs && "text-error tooltip"}
                                    ${stats.cs < beatmap.cs && "text-success tooltip"}
                                `}
                                data-tip={`cs:${beatmap.cs}`}>
                                {stats.cs}
                            </span> :
                            <span class="tooltip" data-tip="cs">{beatmap.cs}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        {stats?.od ?
                            <span class={`text-opacity-75
                                    ${stats.od > beatmap.accuracy && "text-error tooltip"}
                                    ${stats.od < beatmap.accuracy && "text-success tooltip"}
                                `}
                                data-tip={`od:${beatmap.accuracy}`}>
                                {stats.od}
                            </span> :
                            <span class="tooltip" data-tip="od">{beatmap.accuracy}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        {stats?.hp ?
                            <span class={`text-opacity-75
                                    ${stats.hp > beatmap.drain && "text-error tooltip"}
                                    ${stats.hp < beatmap.drain && "text-success tooltip"}
                                `}
                                data-tip={`hp:${beatmap.drain}`}>
                                {stats.hp}
                            </span> :
                            <span class="tooltip" data-tip="hp">{beatmap.drain}</span>
                        }
                    </div>
                    */}
                    <div class="ms-auto tooltip" data-tip={moment(new Date(score.ended_at)).format("MMMM Do YYYY")}>
                        {moment(new Date(score.ended_at)).fromNow()}
                    </div>
                    <div>#{position}</div>
                </div>
            </div>
            <CardControls
                beatmap_id={score.beatmap.id}
                set_id={beatmapset.id}
            />
        </div>
    </>
}

export default ScoreCard;
