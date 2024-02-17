import type { Score } from "@/src/types/users";
import DiffIcon from "../beatmaps/DiffIcon";
import { colors } from "@/src/resources/colors";
import { secondsToTime } from "@/src/resources/functions";
import moment from "moment";
import { tools } from "osu-api-extended";
import type { Mode } from "@/src/types/osu";

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

    let stats: any = {};

    if (score.mods.length > 0 || score.legacy_perfect === false) {
        const url = `https://catboy.best/api/meta/${beatmap.id}?misses=0&acc=${fc_acc}&mods=${score.mods_id}`;
        const res = await (await fetch(url)).json();
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

    function getRankLetter(rank: string): string {
        switch (rank.toUpperCase()) {
            case "XH":
                return "X";
            case "SH":
                return "S";
            default:
                return rank.toUpperCase();
        }
    }

    return (
        <div class="grow rounded-lg flex flex-row bg-base-300 shadow-lg">
            <div class="bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg shadow-lg"
                    style={{
                        backgroundImage: `url(${cardImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                    <div class="grid grid-cols-1 lg:grid-cols-5 grow rounded-lg" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
                        <div class="flex flex-row lg:col-span-3">
                            <img src={cardImg} onerror="this.src='/public/img/fallback.png'"
                                class="rounded-lg" alt="cover" loading="lazy"
                                style={{
                                    height: "100%",
                                    width: "100px",
                                    objectFit: "cover",
                                    objectPosition: "center"
                                }} />
                            <div class="flex flex-col py-2 px-4 gap-1 justify-between grow">
                                <div class="flex flex-col">
                                    <span class="text-lg m-0 p-0">{beatmapset.title}<span class="text-sm" style={{ color: "#999999" }}> by {beatmapset.artist}</span></span>
                                    <span class="text-md m-0 p-0">[{beatmap.version}]<span class="text-sm" style={{ color: "#999999" }}> by {beatmapset.creator}</span></span>
                                </div>
                                <div class="flex flex-row gap-2 items-center">
                                    <div class="badge m-0"
                                        style={{
                                            color: "#000",
                                            backgroundColor: (colors.beatmap as any)[beatmapset.status]
                                        }}>
                                        {beatmapset.status}
                                    </div>
                                    <div>
                                        {new Date(beatmap.last_updated).getFullYear()}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-2 py-2 px-4 justify-between lg:col-span-2 rounded-lg"
                            style={{ backgroundColor: "rgba(255,255,255, 0.1)" }}>
                            <div class="flex flex-row justify-between gap-4">
                                <div class="flex flex-col gap-1">
                                    <div class="flex flex-row gap-4 items-center">
                                        <div class="flex flex-row gap-2 items-center">
                                            <i class="fa-solid fa-flag-checkered" />
                                            <span>{score.total_score.toLocaleString()}</span>
                                        </div>
                                        {stats?.pp ?
                                            <div class="tooltip" data-tip={`${stats.pp}pp if FC`}>
                                                <span class="text-gray-400">{Math.round(Number(score.pp))}pp</span>
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
                                        <span style={{ color: colors.judgements.x300 }}>{score.statistics?.great || 0}</span>
                                        <span style={{ color: colors.judgements.x100 }}>{score.statistics?.ok || 0}</span>
                                        <span style={{ color: colors.judgements.x50 }}>{score.statistics?.meh || 0}</span>
                                        <span style={{ color: colors.judgements.xMiss }}>{score.statistics?.miss || 0}</span>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1 text-end justify-between">
                                    <div style={{
                                        fontSize: "48px",
                                        marginTop: "-18px",
                                        marginBottom: "-14px",
                                        color: (colors.grades as any)[score.rank.toLowerCase()]
                                    }}>
                                        {getRankLetter(score.rank)}
                                    </div>
                                    <div class="flex flex-row-reverse gap-1">
                                        {score.mods.map((mod) =>
                                            <div class="tooltip" data-tip={mod.acronym}>
                                                <img src={`/public/img/mods/${mod.acronym.toLowerCase()}.png`}
                                                    style={{ height: "20px" }} alt={mod.acronym} loading="lazy" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-2 px-4 flex flex-row gap-4 items-center">
                    <DiffIcon setId={beatmapset.id} diffId={score.beatmap.id}
                        diff={score.beatmap.difficulty_rating} size={20}
                        mode={score.beatmap.mode} name={score.beatmap.version} />
                    <div class="flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-star fa-xs" />
                        <span>{stats?.sr ? stats.sr : beatmap.difficulty_rating}</span>
                    </div>
                    <div class="flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-music fa-xs" />
                        <span>{stats?.bpm ? stats.bpm : beatmap.bpm}bpm</span>
                    </div>
                    <div class="flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-stopwatch fa-xs" />
                        <span>{secondsToTime(stats?.length ? stats.length : beatmap.total_length)}</span>
                    </div>
                    <div>ar:{stats?.ar ? stats.ar : beatmap.ar}</div>
                    <div>cs:{stats?.cs ? stats.cs : beatmap.cs}</div>
                    <div>od:{stats?.od ? stats.od : beatmap.accuracy}</div>
                    <div>hp:{stats?.hp ? stats.hp : beatmap.drain}</div>
                    <div class="ms-auto text-sm">{moment(new Date(score.ended_at)).fromNow()}</div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-around p-2 gap-2">
                <div>#{props.position}</div>
                <a><i class="fa-solid fa-play fa-sm" /></a>
                <a><i class="fa-solid fa-file-arrow-down fa-sm" /></a>
                <a><i class="fa-solid fa-download fa-sm" /></a>
            </div>
        </div>
    );
}

export default ScoreCard;
