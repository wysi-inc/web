import { api_score_details } from "@/src/api/score";
import { colors } from "@/src/libs/colors";
import { getDiffColor, getGradeColor, getGradeLetter } from "@/src/libs/web_utils";
import type { Mode } from "@/src/types/osu";
import moment from "moment";
import DiffIcon from "../beatmap/DiffIcon";
import Link from "../web/Link";
import ModIcon from "./ModIcon";

async function ScorePage(p: { score_id: number }) {
    const res = await api_score_details(p.score_id);
    if (res.error) return <>score not found</>;

    const score = res.data;

    const b = score.beatmap;
    const s = score.beatmapset;
    const u = score.user;

    const cardImg2x = `https://assets.ppy.sh/beatmaps/${s.id}/covers/card@2x.jpg?${s.id}`;
    const color = getDiffColor(b.difficulty_rating);
    const acc = (score.accuracy * 100).toFixed(2);

    return (<>
        <div class="flex rounded-lg shadow-lg"
            style={{ backgroundImage: `url('${cardImg2x}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
            <div class="grow gap-4 rounded-lg bg-base-300 bg-opacity-75 p-4 text-base-content backdrop-blur-sm">
                <div class="flex flex-col gap-4">
                    <div class="grid gap-8 md:grid-cols-2">
                        <img loading="lazy" src={cardImg2x} class="w-full rounded-lg md:hidden" />
                        <div class="flex flex-col gap-2">
                            <div class="flex flex-row items-center gap-2">
                                <DiffIcon sr={b.difficulty_rating} mode={b.mode as Mode} size={20} color="#ffffff" />
                                <div class="badge border-none text-white" style={{ backgroundColor: color }}>
                                    <span>★ {b.difficulty_rating}</span>
                                </div>
                            </div>
                            <h2 class="text-2xl">{s.title} <span class="text-sm">by {s.artist}</span></h2>
                            <h3 class="text-xl">[{b.version}] <span class="text-sm">mapped by <Link url={`/users/${s.user_id}`}>{s.creator}</Link></span></h3>
                            <div class="flex flex-row items-center gap-4">
                                <div class="mx-2 -mt-1 text-7xl" style={{ color: getGradeColor(score.rank) }}>
                                    {getGradeLetter(score.rank)}
                                </div>
                                <div class="flex flex-col gap-1">
                                    <h1 class="text-5xl">{score.score.toLocaleString()}</h1>
                                </div>
                            </div>
                        </div>
                        <img loading="lazy" src={cardImg2x} class="hidden w-full rounded-lg md:block" />
                    </div>
                    <div class="flex flex-row justify-between gap-4">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-row items-center gap-4 text-start">
                                <img loading="lazy" src={u.avatar_url} class="size-10 rounded-lg" /> <div class="flex flex-col">
                                    <dt class="text-sm">Played by:</dt>
                                    <dd class="text-lg">{u.username}</dd>
                                </div>
                            </div>
                            <div class="flex flex-row items-center gap-4 text-start">
                                <i class="fa-solid fa-trophy w-10 text-center text-2xl" />
                                <div class="flex flex-col">
                                    <dt class="text-sm">Global Rank:</dt>
                                    <dd class="text-lg">#{score.rank_global.toLocaleString()}</dd>
                                </div>
                            </div>
                            <div class="flex flex-row items-center gap-4 text-start">
                                <i class="fa-regular fa-clock w-10 text-center text-2xl" />
                                <div class="flex flex-col">
                                    <dt class="text-sm">Submitted on:</dt>
                                    <dd class="tooltip tooltip-right text-lg" data-tip={moment(score.created_at).fromNow()}>{moment(score.created_at).format("MMMM Do YYYY HH:MM")}</dd>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 p-2">
                            <dl class="items-top flex flex-row justify-end gap-8">
                                <div class="flex flex-col">
                                    <dt class="text-xs">Mods</dt>
                                    <dd class="mt-1 flex flex-row flex-wrap gap-1 text-lg">
                                        {score.mods.map((mod) =>
                                            <ModIcon mod={(mod as any).acronym} />
                                        )}
                                    </dd>
                                </div>
                            </dl>
                            <dl class="items-top flex flex-row justify-end gap-8">
                                <div class="flex flex-col">
                                    <dt class="text-xs">Accuracy</dt>
                                    {score.accuracy === 1 ?
                                        <dd class="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-lg text-transparent">{acc}%</dd> :
                                        <dd>{acc}%</dd>
                                    }
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">Max Combo</dt>
                                    <dd class={score.perfect ? "text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500" : ""}>
                                        {score.max_combo.toLocaleString()}x
                                    </dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">Performance</dt>
                                    <dd class="text-lg">
                                        {Math.round(score.pp)}pp
                                    </dd>
                                </div>
                            </dl>
                            <dl class="items-top flex flex-row justify-end gap-8">
                                {score.beatmap.mode === "mania" ?
                                    <div class="flex flex-col">
                                        <dt class="text-xs">320</dt>
                                        <dd class={`${score.statistics.count_geki ? "" : "text-opacity-50"} text-lg text-base-content`}
                                            style={{ color: score.statistics.count_geki ? colors.judgements.x320 : "" }}>
                                            {score.statistics.count_geki || 0}
                                        </dd>
                                    </div> : null
                                }
                                <div class="flex flex-col">
                                    <dt class="text-xs">300</dt>
                                    <dd class={`${score.statistics.count_300 ? "" : "text-opacity-50"} text-lg text-base-content`}
                                        style={{ color: score.statistics.count_300 ? colors.judgements.x300 : "" }}>
                                        {score.statistics.count_300 || 0}
                                    </dd>
                                </div>
                                {score.beatmap.mode === "mania" ?
                                    <div class="flex flex-col">
                                        <dt class="text-xs">200</dt>
                                        <dd class={`${score.statistics.count_katu ? "" : "text-opacity-50"} text-lg text-base-content`}
                                            style={{ color: score.statistics.count_katu ? colors.judgements.x200 : "" }}>
                                            {score.statistics.count_katu || 0}
                                        </dd>
                                    </div> : null
                                }
                                <div class="flex flex-col">
                                    <dt class="text-xs">100</dt>
                                    <dd class={`${score.statistics.count_100 ? "" : "text-opacity-50"} text-lg text-base-content`}
                                        style={{ color: score.statistics.count_100 ? colors.judgements.x100 : "" }}>
                                        {score.statistics.count_100 || 0}
                                    </dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">50</dt>
                                    <dd class={`${score.statistics.count_50 ? "" : "text-opacity-50"} text-lg text-base-content`}
                                        style={{ color: score.statistics.count_50 ? colors.judgements.x50 : "" }}>
                                        {score.statistics.count_50 || 0}
                                    </dd>
                                </div>
                                <div class="flex flex-col">
                                    <dt class="text-xs">Miss</dt>
                                    <dd class={`${score.statistics.count_miss ? "" : "text-opacity-50"} text-lg text-base-content`}
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
