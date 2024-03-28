import moment from "moment";
import { tools } from "osu-api-extended";
import { colors } from "@/src/resources/colors";
import { getGradeLetter, secondsToTime } from "@/src/resources/functions";
import type { Score } from "@/src/types/users";
import type { Mode } from "@/src/types/osu";
import DiffIcon from "@/src/components/beatmap/DiffIcon";
import CardControls from "@/src/components/web/CardControls";
import HxA from "../web/HxA";
import StatusBadge from "../beatmap/StatusBadge";
import type { BeatmapsetStatus } from "@/src/types/beatmaps";
import ModIcon from "./ModIcon";

type Props = {
    position: number;
    score: Score;
}

const ScoreCard = async (props: Props) => {

    const score = props.score;
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
        const res: any = await (await fetch(url)).json();
        if (res) {
            stats.sr = res?.difficulty?.stars?.toFixed(2);
            stats.bpm = res?.map?.bpm?.toFixed(0);
            stats.ar = res?.map?.ar?.toFixed(1);
            stats.cs = res?.map?.cs?.toFixed(1);
            stats.od = res?.map?.od?.toFixed(1);
            stats.hp = res?.map?.hp?.toFixed(1);
            stats.pp = Math.round(res?.pp?.[Number(fc_acc)]?.pp);
            if (stats.pp <= Number(score.pp) + 10) {
                stats.pp = null;
            }
            if (score.mods.find((mod) => mod.acronym === "DT")) {
                stats.length = Math.round(beatmap.total_length / 1.5);
            } else if (score.mods.find((mod) => mod.acronym === "HT")) {
                stats.length = Math.round(beatmap.total_length / 0.75);
            }
        }
    }

    return <>
        <div class="group grow rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="text-white bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="bg-cover bg-center bg-no-repeat flex flex-col rounded-lg shadow-lg"
                    style={{ background: `url(${cardImg})` }}>
                    <div class="bg-base-300 bg-opacity-75 grid grid-cols-1 md:grid-cols-5 rounded-lg backdrop-blur-sm">
                        <div class="flex flex-row md:col-span-3">
                            <img src={cardImg} class="rounded-lg w-24 object-cover object-center" alt="cover" loading="lazy" />
                            <div class="flex flex-col py-2 px-4 truncate">
                                <HxA css="text-base-content text-lg hover:underline underline-offset-2 truncate" url={`/beatmaps/${beatmapset.id}`}>{beatmapset.title}</HxA>
                                <p class="text-neutral-content text-opacity-75 text-sm truncate"> by {beatmapset.artist}</p>
                                <HxA css="text-neutral-content text-opacity-75 text-sm text-gray-400 truncate" url={`/users/${beatmapset.user_id}`}>mapped by {beatmapset.creator}</HxA>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 py-2 px-4 justify-between md:col-span-2 rounded-lg bg-base-content bg-opacity-15">
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
                                        <div><i class="fa-solid fa-fire" /> {score.max_combo.toLocaleString()}x</div>
                                        <div><i class="fa-solid fa-crosshairs" /> {acc}%</div>
                                    </div>
                                    <div class="flex flex-row gap-2 text-sm">
                                        <span style={{ color: colors.judgements.x300 }}>{score.statistics.great || 0}</span>
                                        <span style={{ color: colors.judgements.x100 }}>{score.statistics.ok || 0}</span>
                                        <span style={{ color: colors.judgements.x50 }}>{score.statistics.meh || 0}</span>
                                        <span style={{ color: colors.judgements.xMiss }}>{score.statistics.miss || 0}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1 text-end justify-between">
                                    <div class="-mt-2 text-5xl" style={{
                                        color: (colors.grades as any)[score.rank.toLowerCase()]
                                    }}>
                                        {getGradeLetter(score.rank)}
                                    </div>
                                    <div class="flex flex-wrap flex-row-reverse gap-1">
                                        {score.mods.map((mod) =>
                                            <ModIcon mod={mod.acronym} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-opacity-75 text-base-content p-2 flex flex-row flex-wrap gap-4 items-center">
                    <StatusBadge status={beatmapset.status as BeatmapsetStatus} />
                    <DiffIcon setId={beatmapset.id} diffId={score.beatmap.id}
                        diff={score.beatmap.difficulty_rating} size={20}
                        mode={score.beatmap.mode} name={score.beatmap.version} />
                    <div class="tooltip hidden md:block" data-tip={moment(new Date(beatmap.last_updated)).format("DD/MM/YYYY")}>
                        {new Date(beatmap.last_updated).getFullYear()}
                    </div>
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
                        <i class="fa-solid fa-music fa-xs" />
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
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <span>ar:</span>
                        {stats?.ar ?
                            <span class={`text-opacity-75
                                    ${stats.ar > beatmap.ar && "text-error tooltip"}
                                    ${stats.ar < beatmap.ar && "text-success tooltip"}
                                `}
                                data-tip={`ar:${beatmap.ar}`}>
                                {stats.ar}
                            </span> :
                            <span>{beatmap.ar}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <span>cs:</span>
                        {stats?.cs ?
                            <span class={`text-opacity-75
                                    ${stats.cs > beatmap.cs && "text-error tooltip"}
                                    ${stats.cs < beatmap.cs && "text-success tooltip"}
                                `}
                                data-tip={`cs:${beatmap.cs}`}>
                                {stats.cs}
                            </span> :
                            <span>{beatmap.cs}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <span>od:</span>
                        {stats?.od ?
                            <span class={`text-opacity-75
                                    ${stats.od > beatmap.accuracy && "text-error tooltip"}
                                    ${stats.od < beatmap.accuracy && "text-success tooltip"}
                                `}
                                data-tip={`od:${beatmap.accuracy}`}>
                                {stats.od}
                            </span> :
                            <span>{beatmap.accuracy}</span>
                        }
                    </div>
                    <div class="hidden md:flex flex-row gap-1 items-center">
                        <span>hp:</span>
                        {stats?.hp ?
                            <span class={`text-opacity-75
                                    ${stats.hp > beatmap.drain && "text-error tooltip"}
                                    ${stats.hp < beatmap.drain && "text-success tooltip"}
                                `}
                                data-tip={`hp:${beatmap.drain}`}>
                                {stats.hp}
                            </span> :
                            <span>{beatmap.drain}</span>
                        }
                    </div>
                    <div class="ms-auto tooltip" data-tip={moment(new Date(score.ended_at)).format("MMMM Do YYYY")}>
                        {moment(new Date(score.ended_at)).fromNow()}
                    </div>
                    <div>#{props.position}</div>
                </div>
            </div>
            <CardControls
                beatmap_id={score.beatmap.id}
                set_id={beatmapset.id}
                beatmap_title={beatmapset.title}
                beatmap_artist={beatmapset.artist}
            />
        </div>
    </>
}

export default ScoreCard;
