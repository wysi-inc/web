import { colors } from "@/src/libs/colors";
import type { Mode } from "@/src/types/osu";
import type { ScoreType } from "@/src/types/score";
import moment from "moment";
import Flag from "../user/u_panels/u_components/Flag";
import Link from "../web/Link";
import Grade from "./Grade";
import ModIcon from "./ModIcon";

function BigScore(p: { score: ScoreType, mode: Mode, position: number }) {
    return (
        <div class="flex flex-row flex-wrap justify-center bg-base-300 rounded-lg items-center group">
            <div class="rounded-lg grow" style={{
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
                        <img loading="lazy" src={p.score.user.avatar_url} alt="pfp" class="size-20 rounded-lg" />
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
                    <div class="flex flex-col flex-wrap justify-center md:justify-end gap-2 items-end">
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
                        <dl class="flex flex-row flex-wrap gap-8 justify-end items-top">
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
            <div class="flex-col gap-2 p-2 hidden group-hover:flex items-center justify-center">
                <Link url={`/scores/${p.score.id}`} tooltip="View Score Page">
                    <i class="fa-solid fa-eye" />
                </Link>
            </div>
        </div>
    );
}

export default BigScore;
