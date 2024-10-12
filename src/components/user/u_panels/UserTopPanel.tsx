import { colors } from "@/src/libs/colors";
import { ModeToCode } from "@/src/libs/web_utils";
import { DANS } from "@/src/models/User";
import type { Mode } from "@/src/types/osu";
import type { UserExtended } from "@/src/types/users";
import { Html } from '@elysiajs/html';
import moment from "moment";
import ModeIcon from "../../beatmap/ModeIcon";
import Link from "../../web/Link";
import Badge from "../Badge";
import UserSocial, { SOCIALS } from "./UserSocial";
import BarChart from "./u_components/BarChart";
import Clan from "./u_components/Clan";
import Country from "./u_components/Country";
import Flag from "./u_components/Flag";
import SubdivisionFlag from "./u_components/SubdivisionFlag";
import SubdivisionRanking from "./u_components/SubdivisionRanking";
import Supporter from "./u_components/Supporter";
import Avatar from "../Avatar";
import { txt } from "@/src/tasks/files";
import { MODES } from "@/src/libs/constants";

async function UserTopPanel(p: {
    lang: string
    user: UserExtended,
    mode: Mode,
    editable?: boolean,
}) {

    const best_country = p.user.db_ranks?.country_ranks?.sort?.((a, b) => a.rank - b.rank)[0];
    const grade_counts = new Map();

    grade_counts.set("SS+", { count: p.user.statistics.grade_counts.ssh, color: colors.grades.xh });
    grade_counts.set("SS", { count: p.user.statistics.grade_counts.ss, color: colors.grades.x });
    grade_counts.set("S+", { count: p.user.statistics.grade_counts.sh, color: colors.grades.sh });
    grade_counts.set("S", { count: p.user.statistics.grade_counts.s, color: colors.grades.s });
    grade_counts.set("A", { count: p.user.statistics.grade_counts.a, color: colors.grades.a });

    const joined_date = moment(p.user.join_date).format("DD/MM/YYYY");

    const has_socials = (p.user?.socials || [])?.length > 0;
    const has_info = p.user.location ? true : p.user.interests ? true : p.user.occupation ? true : p.user.website ? true : false;

    return (
        <section class="rounded-lg bg-base-300 pb-4 shadow-lg">
            <div class="flex flex-col rounded-lg bg-base-100">
                <div class="rounded-lg" style={{ backgroundImage: `url('${p.user.cover_url}')`, backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: "no-repeat" }}>
                    <div class="flex flex-col justify-center gap-4 rounded-lg bg-base-300 bg-opacity-65 p-4 text-base-content backdrop-blur-sm">
                        <div class="flex flex-row flex-wrap gap-4">
                            <div class="flex w-40 flex-col gap-4">
                                <Avatar id={p.user.id} />
                                <div class="flex flex-row flex-wrap items-center justify-around gap-2 rounded-lg bg-base-300 p-2">
                                    {MODES.map(m => (
                                        <div class="tooltip" data-tip={m.name}>
                                            {p.mode === m.code ?
                                                <ModeIcon mode={m.code} size={24} css={`fill-secondary`} /> :
                                                <Link url={`/users/${p.user.id}/${m.code}`} label="standard mode">
                                                    <ModeIcon mode={m.code} size={24} css={`fill-base-content`} />
                                                </Link>
                                            }
                                        </div>
                                    ))}
                                </div>
                                <div class="flex flex-row items-center justify-between gap-2">
                                    <span>{p.user.statistics.level.current}</span>
                                    <progress class="progress progress-accent w-32" value={p.user.statistics.level.progress} max="100" />
                                    <span>{p.user.statistics.level.current + 1}</span>
                                </div>
                                <span class="text-center">joined <time class="tooltip" data-tip={joined_date} datetime={joined_date}>{moment(p.user.join_date).fromNow()}</time></span>
                            </div>
                            <div class="flex grow flex-col items-start justify-between gap-2">
                                {(p.user.wysi_badges?.length || 0) > 0 ?
                                    <div class="flex flex-row flex-wrap gap-2">{p.user.wysi_badges?.map(b => <Badge user_id={p.user.id} badge_id={b} editable={false} />)}</div>
                                    : null
                                }
                                <div class="flex flex-row items-center gap-2">
                                    <Clan user_id={p.user.id} />
                                    <a href={`https://osu.ppy.sh/users/${p.user.id}`} target="_blank" class="text-2xl underline-offset-2 hover:underline">
                                        {p.user.username}
                                    </a>
                                    {p.user.is_supporter &&
                                        <Supporter level={p.user.support_level} />
                                    }
                                    {p.user.groups.map(g =>
                                        <div class="badge flex flex-row border-none p-1 text-white" style={{
                                            backgroundColor: g.colour,
                                            gap: ".08rem",
                                        }}>
                                            {g.short_name}
                                        </div>
                                    )}
                                </div>
                                {p.user.title ?
                                    <div class="inline-block bg-gradient-to-r from-blue-600 to-green-400 bg-clip-text text-transparent">
                                        {p.user.title}
                                    </div> : null}
                                <div class="flex flex-row items-center gap-2">
                                    <i class="fa-solid fa-earth-americas fa-xl"></i>
                                    <h2 class="tooltip text-xl" data-tip={`Peak rank: #${p.user?.rank_highest?.rank?.toLocaleString?.()}`}>
                                        #{p.user.statistics?.global_rank?.toLocaleString() || "-"}
                                    </h2>
                                </div>
                                <div class="flex flex-row items-center gap-2">
                                    {(p.user.country as any).cat ?
                                        <Country code={"CAT"} name={"Catalunya"} /> :
                                        <Country code={p.user.country.code} name={p.user.country.name} />
                                    }
                                    <h2 class="tooltip text-xl" data-tip={`Peak rank: #${best_country?.rank?.toLocaleString()}`}>
                                        #{p.user.statistics?.country_rank?.toLocaleString() || "-"}
                                    </h2>
                                    <Flag name={p.user.country.name} code={p.user.country.code} />
                                </div>
                                <div class="group hidden flex-row items-center gap-2">
                                    <i class="group-has[.flex]:flex fa-solid fa-city hidden w-6"></i>
                                    <SubdivisionRanking user_id={p.user.id} mode={p.mode} />
                                    <SubdivisionFlag user_id={p.user.id} />
                                </div>
                                <dl class="flex flex-col gap-1">
                                    <div>
                                        <dt class="text-sm">{txt(p.lang, "user.performance")}:</dt>
                                        <dd class="text-lg">{Math.round(p.user.statistics.pp).toLocaleString()}pp</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm">{txt(p.lang, "score.accuracy")}:</dt>
                                        <dd class="text-lg">{(p.user.statistics.hit_accuracy).toFixed(2)}%</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm">{txt(p.lang, "user.sections.medals.title")}:</dt>
                                        <dd class="text-lg">{p.user.user_achievements.length} <i class="fa-solid fa-medal fa-xs"></i></dd>
                                    </div>
                                    {p.mode === "mania" ?
                                        p.editable ?
                                            <form hx-swap="none" hx-trigger="change" hx-put={`/users/${p.user.id}/dan`}>
                                                <label class="form-control">
                                                    <span class="label m-0 p-0 pb-1 text-sm">Dan:</span>
                                                    <select name="dan" class="select select-bordered select-ghost select-sm">
                                                        {DANS.map(d => <option selected={p.user.dan === d}>{d}</option>)}
                                                    </select>
                                                </label>
                                            </form> :
                                            <div>
                                                <dt class="text-sm">Dan:</dt>
                                                <dd class="text-lg">{p.user.dan || "No Dan"}</dd>
                                            </div>
                                        : null
                                    }
                                </dl>
                            </div>
                            <div class="flex grow flex-col justify-between gap-4">
                                <table>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-angles-up w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "score.ranked_score")}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.ranked_score.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-arrow-rotate-left w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "user.play_count")}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.play_count.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-regular fa-clock w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "user.play_time")}:</td>
                                        <td class="p-1 text-end">{Math.floor(p.user.statistics.play_time / 60 / 60).toLocaleString()}h</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-fire w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "score.max_combo")}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.maximum_combo.toLocaleString()}x</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-keyboard w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "user.total_hits")}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.total_hits.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-calculator w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "user.hits_x_play")}:</td>
                                        <td class="p-1 text-end">{Math.round(p.user.statistics.total_hits / p.user.statistics.play_count || 0).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-eye w-4 text-center" /></th>
                                        <td class="p-1">{txt(p.lang, "user.replays_watched")}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.replays_watched_by_others.toLocaleString()}</td>
                                    </tr>
                                </table>
                                <div class="flex flex-row items-center justify-end gap-4">
                                    <BarChart name="total_grades" data={grade_counts} user={{
                                        user_id: p.user.id,
                                        username: p.user.username,
                                        mode: ModeToCode(p.mode)
                                    }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {p.editable || has_socials || has_info || p.user.badges.length > 0 ?
                    <div class="flex flex-col gap-4 p-4">
                        {has_socials || p.editable ? <>
                            <div class="flex flex-row flex-wrap gap-2">
                                <form class="sortable flex flex-row flex-wrap items-center gap-2" id="socials_list"
                                    hx-post={`/users/${p.user.id}/socials/sort`} hx-trigger="end" hx-swap="none">
                                    {p.user.socials?.map(s => <UserSocial user_id={p.user.id} social={s} editable={p.editable} />)}
                                    <span class="htmx-indicator loading loading-spinner" />
                                </form>
                                {p.editable ?
                                    <form class="group flex flex-row flex-wrap items-center gap-2" hx-put={`/users/${p.user.id}/socials/submit`} hx-target="#socials_list"
                                        hx-swap="beforeend">
                                        <span class="htmx-indicator loading loading-spinner" />
                                        <fieldset class="peer peer join rounded-lg disabled:hidden group-disabled:hidden" id="socials_fieldset" disabled>
                                            <select required class="join-item select select-bordered select-sm" name="platform">
                                                <option disabled selected>Choose</option>
                                                {SOCIALS.sort().map(s => <option value={s}>{s}</option>)}
                                            </select>
                                            <label class="input input-sm join-item input-bordered flex items-center gap-2">
                                                @ <input required name="username" type="text" class="grow" placeholder="Username" />
                                            </label>
                                        </fieldset>
                                        <button class="btn btn-square btn-primary btn-sm peer-disabled:hidden" type="submit">
                                            <i class="fa-solid fa-plus" />
                                        </button>
                                        <button class="btn btn-square btn-ghost btn-sm peer-enabled:hidden" onclick="document.querySelector('#socials_fieldset').disabled = false" type="button">
                                            <i class="fa-solid fa-plus" />
                                        </button>
                                        <button class="btn btn-square btn-ghost btn-sm peer-disabled:hidden" onclick="document.querySelector('#socials_fieldset').disabled = true" type="button">
                                            <i class="fa-solid fa-xmark" />
                                        </button>
                                    </form> : null
                                }
                            </div>
                        </> : null}
                        {has_info ?
                            <div class="flex flex-row flex-wrap gap-4 text-sm">
                                {p.user.location ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-location-dot" />
                                        <span>{p.user.location}</span>
                                    </div> : null
                                }
                                {p.user.interests ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-heart" />
                                        <span>{p.user.interests}</span>
                                    </div> : null
                                }
                                {p.user.occupation ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-building" />
                                        <span>{p.user.occupation}</span>
                                    </div> : null
                                }
                                {p.user.website ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-globe"></i>
                                        <a href={p.user.website} target="_blank" class="hover:underline">{p.user.website}</a>
                                    </div> : null
                                }
                            </div> : null
                        }
                        {p.user.badges.length > 0 &&
                            <div class="flex flex-row flex-wrap gap-2">
                                {p.user.badges.map(badge =>
                                    <div class="tooltip" data-tip={badge.description}>
                                        <img loading="lazy" src={badge.image_url} width="86" height="40" alt={badge.description} />
                                    </div>
                                )}
                            </div>
                        }
                    </div> : null
                }
            </div>
        </section>
    );
}

export default UserTopPanel;
