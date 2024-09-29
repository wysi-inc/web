import type { Mod, Mode } from "@/src/types/osu";
import moment from "moment";
import Grade from "../score/Grade";
import ModIcon from "../score/ModIcon";
import Flag from "../user/u_panels/u_components/Flag";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Link from "../web/Link";
import Clan from "../user/u_panels/u_components/Clan";
import { colors } from "@/src/libs/colors";
import { api_scores_beatmap } from "@/src/api/score";
import type { ScoreType } from "@/src/types/score";

async function BeatmapScoreTable(p: {
    b_id: number,
    mode: Mode,
    body?: any,
    logged_id?: number,
}) {

    const mods = Object.entries(p.body);
    const mod_names = mods.map(([name, value]) => value === 'on' ? name.split("-")[1] : null).filter(v => v !== null) as Mod[];

    const scores = await api_scores_beatmap(p.b_id, {
        mode: p.mode,
        mods: mod_names,
        type: "global",
    });

    if (!scores || !scores.scores) return <>No scores found</>

    console.log(scores.scores[0]);
    console.log(scores.scores[0].mods);

    return (<>
        <BigScore score={scores.scores[0]} mode={p.mode} position={1} />
        {scores.userScore ?
            <BigScore score={scores.userScore} mode={p.mode} position={0} />
            : null
        }
        <table class="table table-xs table-zebra bg-base-300 rounded-lg">
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
                {scores.scores.map((score, i) =>
                    <tr class="hover:bg-base-300 hover:rounded-lg" onclick={`window.location='/scores/${score.id}';`}>
                        <th class="table-cell text-start">#{i + 1}</th>
                        <td class="table-cell">
                            <div class="flex flex-row gap-2 items-center">
                                <Flag name={score.user.country.name} code={score.user.country.code} />
                                <SubdivisionFlag user_id={score.user.id} />
                                <Clan user_id={score.user.id} />
                                <Link url={`/users/${score.user.id}`}>{score.user.username}</Link>
                            </div>
                        </td>
                        <td class="hidden sm:table-cell">
                            {Number((score.pp?.toFixed()) || 0).toLocaleString()}pp</td>
                        <td class="hidden md:table-cell">
                            {(score.accuracy * 100).toFixed(2)}%
                        </td>
                        <td class="hidden md:table-cell">
                            {score.perfect ?
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {score.max_combo.toLocaleString()}x
                                </span> :
                                <span>
                                    {score.max_combo.toLocaleString()}x
                                </span>
                            }
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex">
                                <Grade grade={score.rank} />
                            </div>
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex flex-row flex-wrap gap-1">
                                {score.mods.map(mod =>
                                    <ModIcon mod={mod} />
                                )}
                            </div>
                        </td>
                        <td class="text-end hidden md:table-cell">
                            <span class="tooltip tooltip-left" data-tip={`${moment(score.created_at).format("MMMM Do YYYY")} | ${moment(score.created_at).fromNow()}`}>
                                {moment(score.created_at).fromNow(true)}
                            </span>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>);
};

function BigScore(p: { score: ScoreType, mode: Mode, position: number }) {
    return (<>
        <div class="rounded-lg" onclick={`window.location='/scores/${p.score.id}';`}
            style={{
                backgroundImage: `url(${p.score.user.cover.url})`,
                backgroundSize: `cover`,
                backgroundPosition: `center`,
                backgroundRepeat: "no-repeat"
            }}>
            <div class="text-base-content bg-base-300 bg-opacity-65 backdrop-blur-sm justify-between flex flex-row flex-wrap gap-4 p-4 rounded-lg">
                <div class="flex flex-row flex-wrap gap-4 items-center">
                    <div class="flex flex-col gap-2 items-center">
                        <span class="text-xl">#{p.position}</span>
                        <Grade grade={p.score.rank} />
                    </div>
                    <img data-src={p.score.user.avatar_url} alt="pfp" class="size-20 rounded-lg" />
                    <div class="flex flex-col items-start gap-1">
                        <div class="flex flex-row gap-2 text-xl items-center">
                            <Flag name={p.score.user.country.name} code={p.score.user.country.code} />
                            <Link url={`/users/${p.score.user.id}`}>{p.score.user.username}</Link>
                        </div>
                        <span class="tooltip" data-tip={`${moment(p.score.created_at).format("MMMM Do YYYY")} | ${moment(p.score.created_at).fromNow()}`}>
                            {moment(p.score.created_at).fromNow()}
                        </span>
                    </div>
                </div>
                <div class="flex flex-col gap-2 items-end">
                    <dl class="flex flex-row gap-8 justify-end items-top">
                        <div class="flex flex-col">
                            <dt class="text-xs">Score</dt>
                            <dd class="text-lg">{p.score.score.toLocaleString()}</dd>
                        </div>
                        <div class="flex flex-col">
                            <dt class="text-xs">Accuracy</dt>
                            {p.score.accuracy === 1 ?
                                <dd class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {(p.score.accuracy * 100).toFixed(2)}%
                                </dd> :
                                <dd>
                                    {(p.score.accuracy * 100).toFixed(2)}%
                                </dd>
                            }
                        </div>
                        <div class="flex flex-col">
                            <dt class="text-xs">Max Combo</dt>
                            {p.score.perfect ?
                                <dd class="text-lg text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {p.score.max_combo.toLocaleString()}x
                                </dd> :
                                <dd>
                                    {p.score.max_combo.toLocaleString()}x
                                </dd>
                            }
                        </div>
                    </dl>
                    <div class="flex flex-row gap-4 justify-end items-center">
                        <dl class="flex flex-row gap-8 justify-end items-top">
                            {p.mode === "mania" ?
                                <div class="flex flex-col">
                                    <dt class="text-xs">320</dt>
                                    <dd class={`text-lg text-base-content ${p.score.statistics.count_geki ? "" : "text-opacity-50"}`}
                                        style={{ color: p.score.statistics.count_geki ? colors.judgements.x320 : "" }}>
                                        {p.score.statistics.count_geki || 0}
                                    </dd>
                                </div> : <></>
                            }
                            <div class="flex flex-col">
                                <dt class="text-xs">300</dt>
                                <dd class={`text-lg text-base-content ${p.score.statistics.count_300 ? "" : "text-opacity-50"}`}
                                    style={{ color: p.score.statistics.count_300 ? colors.judgements.x300 : "" }}>
                                    {p.score.statistics.count_300 || 0}
                                </dd>
                            </div>
                            {p.mode === "mania" ?
                                <div class="flex flex-col">
                                    <dt class="text-xs">200</dt>
                                    <dd class={`text-lg text-base-content ${p.score.statistics.count_katu ? "" : "text-opacity-50"}`}
                                        style={{ color: p.score.statistics.count_katu ? colors.judgements.x200 : "" }}>
                                        {p.score.statistics.count_katu || 0}
                                    </dd>
                                </div> : <></>
                            }
                            <div class="flex flex-col">
                                <dt class="text-xs">100</dt>
                                <dd class={`text-lg text-base-content ${p.score.statistics.count_100 ? "" : "text-opacity-50"}`}
                                    style={{ color: p.score.statistics.count_100 ? colors.judgements.x100 : "" }}>
                                    {p.score.statistics.count_100 || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">50</dt>
                                <dd class={`text-lg text-base-content ${p.score.statistics.count_50 ? "" : "text-opacity-50"}`}
                                    style={{ color: p.score.statistics.count_50 ? colors.judgements.x50 : "" }}>
                                    {p.score.statistics.count_50 || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">Miss</dt>
                                <dd class={`text-lg text-base-content ${p.score.statistics.count_miss ? "" : "text-opacity-50"}`}
                                    style={{ color: p.score.statistics.count_miss ? colors.judgements.xMiss : "" }}>
                                    {p.score.statistics.count_miss || 0}
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">Performance</dt>
                                <dd class="text-lg">
                                    {Math.round(p.score.pp)}pp
                                </dd>
                            </div>
                            <div class="flex flex-col">
                                <dt class="text-xs">Mods</dt>
                                <dd class="mt-1 text-lg flex flex-row flex-wrap gap-1">
                                    {p.score.mods.map((mod) =>
                                        <ModIcon mod={(mod as any).acronym} />
                                    )}
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default BeatmapScoreTable;
