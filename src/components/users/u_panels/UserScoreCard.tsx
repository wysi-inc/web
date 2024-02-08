import type { Score } from "@/src/types/users";
import DiffIcon from "../../beatmaps/DiffIcon";
import { colors } from "@/src/resources/colors";
import { secondsToTime } from "@/src/resources/functions";
import moment from "moment";

type Props = {
    position: number;
    score: Score;
}

const ScoreCard = (props: Props) => {

    const score = props.score;
    const beatmap = score.beatmap;
    const beatmapset = score.beatmapset;

    const listImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/list.jpg?${beatmapset.id}`;
    const coverImg = `https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover@2x.jpg?${beatmapset.id}`;

    return (
        <div class="grow rounded-lg flex flex-row bg-base-100 shadow-lg">
            <div class="bg-base-300 flex flex-col grow rounded-lg shadow-lg">
                <div class="rounded-lg overflow-hidden grow shadow-lg" style={`background-image: url(${coverImg}); background-size: cover;`}>
                    <div class="gap-4 grid grid-cols-5 grow" style="backdrop-filter: blur(8px); background-color: rgba(0, 0, 0, 0.8);">
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
                        <div class="flex flex-col gap-2 p-4 justify-between col-span-2"
                            style={{ backgroundColor: "rgba(255,255,255, 0.1)" }}>
                            <div class="flex flex-row justify-between gap-4">
                                <div class="flex flex-col gap-1 text-sm">
                                    <div>{score.total_score.toLocaleString()}</div>
                                    <div>{(score.accuracy * 100).toFixed(2)}%</div>
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
                                    <div>
                                        {Math.round(Number(score.pp))}pp
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-row justify-between gap-8">
                                <div class="flex flex-row gap-1">
                                    {score.mods.map((mod) =>
                                        <img src={`/public/img/mods/${mod.acronym.toLowerCase()}.png`}
                                            style={{ height: "24px" }} alt={mod.acronym} />
                                    )}
                                </div>
                                <div>{moment(new Date(score.ended_at)).fromNow()}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="p-2 flex flex-row gap-4 items-center">
                    <DiffIcon setId={beatmapset.id} diffId={score.beatmap.id}
                        diff={score.beatmap.difficulty_rating} size={20}
                        mode={score.beatmap.mode} name={score.beatmap.version} />
                    <div class="flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-star fa-xs" />
                        <span>{beatmap.difficulty_rating}</span>
                    </div>
                    <div class="flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-music fa-xs" />
                        <span>{beatmap.bpm}bpm</span>
                    </div>
                    <div class="flex flex-row gap-1 items-center">
                        <i class="fa-solid fa-stopwatch fa-xs" />
                        <span>{secondsToTime(beatmap.total_length)}</span>
                    </div>
                    <div>ar:{beatmap.ar}</div>
                    <div>cs:{beatmap.cs}</div>
                    <div>od:{beatmap.accuracy}</div>
                    <div>hp:{beatmap.drain}</div>
                </div>
            </div>
            <div class="flex flex-col items-center justify-around p-4">
                <div>#{props.position}</div>
                <i class="fa-solid fa-play" />
                <i class="fa-solid fa-file-arrow-down" />
                <i class="fa-solid fa-download" />
            </div>
        </div>
    );
}

export default ScoreCard;
