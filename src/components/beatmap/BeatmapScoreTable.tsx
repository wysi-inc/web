import type { Mod, Mode } from "@/src/types/osu";
import { v2 } from "osu-api-extended";
import type { response } from "osu-api-extended/dist/types/v2_scores_beatmap";
import moment from "moment";
import Grade from "../score/Grade";
import ModIcon from "../score/ModIcon";
import Flag from "../user/u_panels/u_components/Flag";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Link from "../web/Link";
import Clan from "../user/u_panels/u_components/Clan";
import { colors } from "@/src/libs/colors";

type ActualStatistics = response & {
    statistics: {
        great?: number,
        ok?: number,
        meh?: number,
        miss?: number,
    },
    ended_at: string,
    mods: { acronym: string }[],
    is_perfect_combo: boolean,
    total_score: number
}

const BeatmapScoreTable = async (p: {
    id: number,
    mode: Mode,
    body?: any
}) => {

    const mods = Object.entries(p.body);
    const mod_names = mods.map(([name, value]) => value === 'on' ? name.split("-")[1] : null).filter(v => v !== null) as Mod[];

    const scores: ActualStatistics[] = await v2.scores.beatmap(p.id, {
        mode: p.mode,
        mods: mod_names,
        type: "global",
    }) as any;

    if (!scores || scores.length === 0) return <></>;

    return (<>
        <div class="rounded-lg"
            style={{
                backgroundImage: `url(${scores[0].user.cover.url})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundRepeat: "no-repeat"
            }}>
            <div class="text-base-content bg-base-300 bg-opacity-65 backdrop-blur-sm justify-between flex flex-row flex-wrap gap-4 p-4 rounded-lg">
                <div class="flex flex-row flex-wrap gap-4 items-center">
                    <div class="flex flex-col gap-2 items-center">
                        <span class="text-xl">#{scores[0].position}</span>
                        <Grade grade={scores[0].rank} />
                    </div>
                    <img loading="lazy" src={scores[0].user.avatar_url} alt="pfp" class="size-20 rounded-lg" />
                    <div class="flex flex-col items-start gap-1">
                        <div class="flex flex-row gap-2 text-xl items-center">
                            <Flag name={scores[0].user.country.name} code={scores[0].user.country.code} />
                            <Link url={`/users/${scores[0].user.id}`}>{scores[0].user.username}</Link>
                        </div>
                        <span class="tooltip" data-tip={`${moment(scores[0].ended_at).format("MMMM Do YYYY")} | ${moment(scores[0].ended_at).fromNow()}`}>
                            {moment(scores[0].ended_at).fromNow()}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 items-end">
                    <dl class="flex flex-row gap-8 justify-end items-top">
                        <div class="flex flex-col">
                            <dt class="text-xs">Score</dt>
                            <dd class="text-lg">{scores[0].total_score.toLocaleString()}</dd>
                        </div>
                        <div class="flex flex-col">
                            <dt class="text-xs">Accuracy</dt>
                            {scores[0].accuracy === 1 ?
                                <dd class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {(scores[0].accuracy * 100).toFixed(2)}%
                                </dd> :
                                <dd>
                                    {(scores[0].accuracy * 100).toFixed(2)}%
                                </dd>
                            }
                        </div>
                        <div class="flex flex-col">
                            <dt class="text-xs">Max Combo</dt>
                            {scores[0].is_perfect_combo ?
                                <dd class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {scores[0].max_combo.toLocaleString()}x
                                </dd> :
                                <dd>
                                    {scores[0].max_combo.toLocaleString()}x
                                </dd>
                            }
                        </div>
                    </dl>
                    <div class="flex flex-row gap-4 justify-end items-center">
                        <dl class="flex flex-row gap-8 justify-end items-top">
                            <div class="flex flex-col">
                                <dt class="text-xs">300</dt>
                                <dd class={`text-lg text-base-content ${scores[0].statistics.great ? "" : "text-opacity-50"}`}
                                    style={{ color: scores[0].statistics.great ? colors.judgements.x300 : "" }}>
                                    {scores[0].statistics.great || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">100</dt>
                                <dd class={`text-lg text-base-content ${scores[0].statistics.ok ? "" : "text-opacity-50"}`}
                                    style={{ color: scores[0].statistics.ok ? colors.judgements.x100 : "" }}>
                                    {scores[0].statistics.ok || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">50</dt>
                                <dd class={`text-lg text-base-content ${scores[0].statistics.meh ? "" : "text-opacity-50"}`}
                                    style={{ color: scores[0].statistics.meh ? colors.judgements.x50 : "" }}>
                                    {scores[0].statistics.meh || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">Miss</dt>
                                <dd class={`text-lg text-base-content ${scores[0].statistics.miss ? "" : "text-opacity-50"}`}
                                    style={{ color: scores[0].statistics.miss ? colors.judgements.xMiss : "" }}>
                                    {scores[0].statistics.miss || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">Performance</dt>
                                <dd class="text-lg">
                                    {Math.round(scores[0].pp)}pp
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">Mods</dt>
                                <dd class="mt-1 text-lg flex flex-row flex-wrap gap-1">
                                    {scores[0].mods.map((mod) =>
                                        <ModIcon mod={(mod as any).acronym} />
                                    )}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
        <table class="table table-xs table-zebra p-4 bg-base-300 rounded-lg">
            <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th class="hidden sm:table-cell">PP</th>
                    <th class="hidden md:table-cell">Acc</th>
                    {/*<th class="hidden md:table-cell">Hits</th>*/}
                    <th class="hidden md:table-cell">Combo</th>
                    <th class="hidden md:table-cell">Grade</th>
                    <th class="hidden md:table-cell">Mods</th>
                    <th class="hidden md:table-cell">Date</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score) =>
                    <tr class="hover:bg-base-300 hover:rounded-lg">
                        <th class="table-cell text-start">#{score.position}</th>
                        <td class="table-cell">
                            <div class="flex flex-row gap-2 items-center">
                                <Flag name={score.user.country.name} code={score.user.country.code} />
                                <SubdivisionFlag user_id={score.user.id} />
                                <Clan user_id={score.user.id} />
                                <Link url={`/users/${score.user.id}`}>{score.user.username}</Link>
                            </div>
                        </td>
                        <td class="hidden sm:table-cell">
                            {Number(score.pp?.toFixed()).toLocaleString()}pp</td>
                        <td class="hidden md:table-cell">
                            {(score.accuracy * 100).toFixed(2)}%
                        </td>
                        {/*<td class="hidden md:table-cell">
                            <div class="grid grid-cols-4 gap-4 px-2 bg-base-300 rounded-full">
                                <span class={`text-base-content ${score.statistics.great ? "" : "text-opacity-50"}`}
                                    style={{ color: score.statistics.great ? colors.judgements.x300 : "" }}>
                                    {score.statistics.great || 0}
                                </span>
                                <span class={`text-base-content ${score.statistics.ok ? "" : "text-opacity-50"}`}
                                    style={{ color: score.statistics.ok ? colors.judgements.x100 : "" }}>
                                    {score.statistics.ok || 0}
                                </span>
                                <span class={`text-base-content ${score.statistics.meh ? "" : "text-opacity-50"}`}
                                    style={{ color: score.statistics.meh ? colors.judgements.x50 : "" }}>
                                    {score.statistics.meh || 0}
                                </span>
                                <span class={`text-base-content ${score.statistics.miss ? "" : "text-opacity-50"}`}
                                    style={{ color: score.statistics.miss ? colors.judgements.xMiss : "" }}>
                                    {score.statistics.miss || 0}
                                </span>
                            </div>
                        </td>*/}
                        <td class="hidden md:table-cell">
                            {score.is_perfect_combo ?
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {score.max_combo.toLocaleString()}x
                                </span> :
                                <span>
                                    {score.max_combo.toLocaleString()}x
                                </span>
                            }
                        </td>
                        <td class="hidden md:table-cell" >
                            <div class="flex">
                                <Grade grade={score.rank} />
                            </div>
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex flex-row flex-wrap gap-1">
                                {score.mods.map((mod) =>
                                    <ModIcon mod={(mod as any).acronym} />
                                )}
                            </div>
                        </td>
                        <td class="text-end hidden md:table-cell">
                            <span class="tooltip tooltip-left" data-tip={`${moment(score.ended_at).format("MMMM Do YYYY")} | ${moment(score.ended_at).fromNow()}`}>
                                {moment(score.ended_at).fromNow(true)}
                            </span>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
        <script>getUserStuff()</script>
    </>);
};

export default BeatmapScoreTable;
