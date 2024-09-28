import { colors } from "@/src/libs/colors";
import { getDiffColor, getGradeColor, getGradeLetter } from "@/src/libs/web_utils";
import moment from "moment";
import type { Mode } from "@/src/types/osu";
import DiffIcon from "../beatmap/DiffIcon";
import ModIcon from "./ModIcon";
import Link from "../web/Link";
import { apicall } from "@/src/tasks/logs";
import { api_score_details } from "@/src/api/score";

async function ScorePage(p: { score_id: number }) {
    const score = await api_score_details(p.score_id);
    if (!score) return <>score not found</>;
    apicall();

    const b = score.beatmap;
    const s = score.beatmapset;
    const u = score.user;

    const cardImg2x = `https://assets.ppy.sh/beatmaps/${s.id}/covers/card@2x.jpg?${s.id}`;

    const color = getDiffColor(b.difficulty_rating);

    const acc = (score.accuracy * 100).toFixed(2);

    return (<>
        <div class="flex rounded-lg shadow-lg" data-bg={cardImg2x}
            style={{ backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div class="rounded-lg grow text-base-content bg-base-300 bg-opacity-75 backdrop-blur-sm p-4 gap-4">
                <div class="flex flex-col gap-4">
                    <div class="grid md:grid-cols-2 gap-8">
                        <img data-src={cardImg2x} class="md:hidden w-full rounded-lg" />
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-row items-center gap-2">
                                <DiffIcon sr={b.difficulty_rating} mode={b.mode as Mode} size={20} color="#ffffff" />
                                <div class="badge border-none text-white" style={{ backgroundColor: color }}>
                                    <span>★ {b.difficulty_rating}</span>
                                </div>
                            </div>
                            <h2 class="text-2xl">{s.title} <span class="text-sm">by {s.artist}</span></h2>
                            <h3 class="text-xl">[{b.version}] <span class="text-sm">mapped by <Link url={`/users/${b.user.id}`}>{b.user.username}</Link></span></h3>
                            <div class="flex flex-row items-center gap-4">
                                <div class="text-7xl -mt-1 mx-2" style={{ color: getGradeColor(score.rank) }}>
                                    {getGradeLetter(score.rank)}
                                </div>
                                <div class="flex flex-col gap-1">
                                    <h1 class="text-5xl">{score.total_score.toLocaleString()}</h1>
                                    <h2 class="text-2xl">{score.legacy_total_score.toLocaleString()}</h2>
                                </div>
                            </div>
                        </div>
                        <img data-src={cardImg2x} class="hidden md:block w-full rounded-lg" />
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-row items-center gap-4 text-start">
                                <img data-src={u.avatar_url} class="size-10 rounded-lg" />
                                <div class="flex flex-col">
                                    <dt class="text-sm">Played by:</dt>
                                    <dd class="text-lg">{u.username}</dd>
                                </div>
                            </div>
                            <div class="flex flex-row items-center gap-4 text-start">
                                <i class="text-center w-10 fa-solid fa-trophy text-2xl" />
                                <div class="flex flex-col">
                                    <dt class="text-sm">Global Rank:</dt>
                                    <dd class="text-lg">#{score.rank_global.toLocaleString()}</dd>
                                </div>
                            </div>
                            <div class="flex flex-row items-center gap-4 text-start">
                                <i class="text-center w-10 fa-regular fa-clock text-2xl" />
                                <div class="flex flex-col">
                                    <dt class="text-sm">Submitted on:</dt>
                                    <dd class="text-lg tooltip tooltip-right" data-tip={moment(score.ended_at).fromNow()}>{moment(score.ended_at).format("MMMM Do YYYY HH:MM")}</dd>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 p-2">
                            <dl class="flex flex-row gap-8 justify-end items-top">
                                <div class="flex flex-col">
                                    <dt class="text-xs">Mods</dt>
                                    <dd class="mt-1 text-lg flex flex-row flex-wrap gap-1">
                                        {score.mods.map((mod) =>
                                            <ModIcon mod={(mod as any).acronym} />
                                        )}
                                    </dd>
                                </div>
                            </dl>
                            <dl class="flex flex-row gap-8 justify-end items-top">
                                <div class="flex flex-col">
                                    <dt class="text-xs">Accuracy</dt>
                                    {score.accuracy === 1 ?
                                        <dd class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">{acc}%</dd> :
                                        <dd>{acc}%</dd>
                                    }
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">Max Combo</dt>
                                    {score.legacy_perfect ?
                                        <dd class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                            {score.max_combo.toLocaleString()}x
                                        </dd> :
                                        <dd>
                                            {score.max_combo.toLocaleString()}x
                                        </dd>
                                    }
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">Performance</dt>
                                    <dd class="text-lg">
                                        {Math.round(score.pp)}pp
                                    </dd>
                                </div>
                            </dl>
                            <dl class="flex flex-row gap-8 justify-end items-top">
                                {score.beatmap.mode === "mania" ?
                                    <div class="flex flex-col">
                                        <dt class="text-xs">320</dt>
                                        <dd class={`text-lg text-base-content ${score.statistics.count_geki ? "" : "text-opacity-50"}`}
                                            style={{ color: score.statistics.count_geki ? colors.judgements.x320 : "" }}>
                                            {score.statistics.count_geki || 0}
                                        </dd>
                                    </div> : <></>
                                }
                                <div class="flex flex-col">
                                    <dt class="text-xs">300</dt>
                                    <dd class={`text-lg text-base-content ${score.statistics.count_300 ? "" : "text-opacity-50"}`}
                                        style={{ color: score.statistics.count_300 ? colors.judgements.x300 : "" }}>
                                        {score.statistics.count_300 || 0}
                                    </dd>
                                </div>
                                {score.beatmap.mode === "mania" ?
                                    <div class="flex flex-col">
                                        <dt class="text-xs">200</dt>
                                        <dd class={`text-lg text-base-content ${score.statistics.count_katu ? "" : "text-opacity-50"}`}
                                            style={{ color: score.statistics.count_katu ? colors.judgements.x200 : "" }}>
                                            {score.statistics.count_katu || 0}
                                        </dd>
                                    </div> : <></>
                                }
                                <div class="flex flex-col">
                                    <dt class="text-xs">100</dt>
                                    <dd class={`text-lg text-base-content ${score.statistics.count_100 ? "" : "text-opacity-50"}`}
                                        style={{ color: score.statistics.count_100 ? colors.judgements.x100 : "" }}>
                                        {score.statistics.count_100 || 0}
                                    </dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">50</dt>
                                    <dd class={`text-lg text-base-content ${score.statistics.count_50 ? "" : "text-opacity-50"}`}
                                        style={{ color: score.statistics.count_50 ? colors.judgements.x50 : "" }}>
                                        {score.statistics.count_50 || 0}
                                    </dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">Miss</dt>
                                    <dd class={`text-lg text-base-content ${score.statistics.count_miss ? "" : "text-opacity-50"}`}
                                        style={{ color: score.statistics.count_miss ? colors.judgements.xMiss : "" }}>
                                        {score.statistics.count_miss || 0}
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ScorePage;
