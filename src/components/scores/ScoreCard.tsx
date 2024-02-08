import type { Score } from "@/src/types/users";
import DiffIcon from "../beatmaps/DiffIcon";
import { colors } from "@/src/resources/colors";
import { secondsToTime } from "@/src/resources/functions";
import moment from "moment";

type Props = {
    position: number;
    score: Score;
}

const ScoreCard = async (props: Props) => {

    const score = props.score;
    const beatmap = score.beatmap;
    const beatmapset = score.beatmapset;

    const listImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/list.jpg?${beatmapset.id}`;
    const coverImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover@2x.jpg?${beatmapset.id}`;

    const acc = (score.accuracy * 100).toFixed(2);

    let stats: any = {};

    if (score.mods.length > 0 || score.legacy_perfect === false) {
        const url = `https://catboy.best/api/meta/${beatmap.id}?misses=0&acc=${acc}&mods=${score.mods_id}`;
        const res = await (await fetch(url)).json();
        stats.sr = res.difficulty.stars.toFixed(2);
        stats.bpm = res.map.bpm.toFixed(0);
        stats.ar = res.map.ar.toFixed(1);
        stats.cs = res.map.cs.toFixed(1);
        stats.od = res.map.od.toFixed(1);
        stats.hp = res.map.hp.toFixed(1);
        stats.pp = Math.round(res?.pp[Number(acc)]?.pp);
        if (stats.pp <= Number(score.pp) + 10) {
            stats.pp = null;
        }
        if (score.mods.find((mod) => mod.acronym === "DT")) {
            stats.length = Math.round(beatmap.total_length / 1.5);
        } else if (score.mods.find((mod) => mod.acronym === "HT")) {
            stats.length = Math.round(beatmap.total_length / 0.75);
        }
    }

    return (
        <div class="grow rounded-lg flex flex-row bg-base-100 shadow-lg">
            <div class="bg-neutral flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg shadow-lg" style={`background-image: url(${coverImg}); background-size: cover;`}>
                    <div class="grid grid-cols-5 grow rounded-lg" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
                        <div class="flex flex-row col-span-3">
                            <img src={listImg} onerror="this.src='/public/img/fallback.png'" alt="cover"
                                class="rounded-lg" style={{
                                    height: "100%",
                                    width: "120px",
                                    objectFit: "cover"
                                }} />
                            <div class="flex flex-col p-4 gap-4 justify-between grow">
                                <div class="flex flex-col gap-1">
                                    <div class="truncate w-72 text-lg">{beatmapset.title}</div>
                                    <div class="truncate w-72 text-sm">by {beatmapset.artist}</div>
                                    <div class="truncate w-72 text-xs">mapped by {beatmapset.creator}</div>
                                </div>
                                <div class="flex flex-row gap-2 items-center">
                                    <div class="badge"
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
                        <div class="flex flex-col gap-2 p-4 justify-between col-span-2 rounded-lg"
                            style={{ backgroundColor: "rgba(255,255,255, 0.1)" }}>
                            <div class="flex flex-row justify-between gap-4">
                                <div class="flex flex-col gap-1 text-sm">
                                    <div>{score.total_score.toLocaleString()}</div>
                                    <div>{acc}%</div>
                                    <div>{score.max_combo.toLocaleString()}x</div>
                                </div>
                                <div class="flex flex-col gap-1 text-end justify-between">
                                    <div style={{
                                        fontSize: "48px",
                                        marginTop: "-18px",
                                        marginBottom: "-14px",
                                        color: (colors.grades as any)[score.rank.toLowerCase()]
                                    }}>
                                        {score.rank}
                                    </div>
                                    <div class="flex flex-row gap-2">
                                        <span>{Math.round(Number(score.pp))}pp</span>
                                        {stats?.pp && <span style={{ color: "#999999" }}>({stats.pp}pp)</span>}
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row flex-wrap justify-between gap-2">
                                <div class="flex flex-row gap-1">
                                    {score.mods.map((mod) =>
                                        <img src={`/public/img/mods/${mod.acronym.toLowerCase()}.png`}
                                            style={{ height: "24px" }} alt={mod.acronym} />
                                    )}
                                </div>
                                <div class="ms-auto">{moment(new Date(score.ended_at)).fromNow()}</div>
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
                </div>
            </div>
            <div class="flex flex-col items-center justify-around p-2 gap-2">
                <div>#{props.position}</div>
                <i class="fa-solid fa-play" />
                <i class="fa-solid fa-file-arrow-down" />
                <i class="fa-solid fa-download" />
            </div>
        </div>
    );
}

export default ScoreCard;
