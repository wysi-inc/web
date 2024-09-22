import moment from "moment";
import BarChart from "./u_components/BarChart";
import Flag from "./u_components/Flag";
import Country from "./u_components/Country";
import Supporter from "./u_components/Supporter";
import ModeIcon from "../../beatmap/ModeIcon";
import type { User } from "@/src/types/users";
import type { Mode } from "@/src/types/osu";
import { colors } from "@/src/libs/colors";
import SubdivisionFlag from "./u_components/SubdivisionFlag";
import Link from "../../web/Link";
import Clan from "./u_components/Clan";
import SubdivisionRanking from "./u_components/SubdivisionRanking";
import { modes } from "@/src/libs/constants";
import { ModeToCode } from "@/src/libs/web_utils";
import Badge from "../Badge";
import { DANS } from "@/src/models/User";
import UserSocial, { SOCIALS } from "./UserSocial";

async function UserTopPanel(p: {
    t: any,
    user: User,
    mode: Mode,
    editable?: boolean
}) {

    const best_country = p.user.db_ranks?.country_ranks?.sort?.((a, b) => a.rank - b.rank)[0];
    const grade_counts = new Map();

    grade_counts.set("SS+", { count: p.user.statistics.grade_counts.ssh, color: colors.grades.xh });
    grade_counts.set("SS", { count: p.user.statistics.grade_counts.ss, color: colors.grades.x });
    grade_counts.set("S+", { count: p.user.statistics.grade_counts.sh, color: colors.grades.sh });
    grade_counts.set("S", { count: p.user.statistics.grade_counts.s, color: colors.grades.s });
    grade_counts.set("A", { count: p.user.statistics.grade_counts.a, color: colors.grades.a });

    const joined_date = moment(p.user.join_date).format("DD/MM/YYYY");

    const has_socials = p.user.discord ? true : p.user.twitter ? true : p.user.socials ? p.user.socials.length > 0 ? true : false : false;
    const has_info = p.user.location ? true : p.user.interests ? true : p.user.occupation ? true : p.user.website ? true : false;

    return (
        <section class="pb-4 bg-base-300 rounded-lg shadow-lg">
            <div class="flex flex-col bg-base-100 rounded-lg">
                <div class="rounded-lg" data-bg={p.user.cover_url}
                    style={{ backgroundSize: `cover`, backgroundPosition: `center`, backgroundRepeat: "no-repeat" }}>
                    <div class="text-base-content bg-base-300 bg-opacity-65 backdrop-blur-sm justify-center flex flex-col gap-4 p-4 rounded-lg">
                        <div class="flex flex-row flex-wrap gap-4">
                            <div class="flex flex-col justify-between w-40">
                                <img data-src={p.user.avatar_url} class="rounded-lg aspect-square" alt={`${p.user.username}'s pfp`} />
                                <div class="bg-base-300 rounded-lg flex flex-row gap-2 p-2 flex-wrap justify-around items-center">
                                    {modes.map(m => (
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
                                <span class="text-center">joined <time class="tooltip" data-tip={joined_date} datetime={joined_date}>{moment(p.user.join_date).fromNow()}</time></span>
                                <div class="flex flex-row justify-between gap-2 items-center">
                                    <span>{p.user.statistics.level.current}</span>
                                    <progress class="progress progress-accent w-32" value={p.user.statistics.level.progress} max="100" />
                                    <span>{p.user.statistics.level.current + 1}</span>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2 justify-between items-start grow">
                                {(p.user.wysi_badges?.length || 0) > 0 ?
                                    <div class="flex flex-row gap-2 flex-wrap">{p.user.wysi_badges?.map(b => <Badge user_id={p.user.id} badge_id={b} editable={false} />)}</div>
                                    : <></>
                                }
                                <div class="flex flex-row gap-2 items-center">
                                    <Clan user_id={p.user.id} />
                                    <a href={`https://osu.ppy.sh/users/${p.user.id}`} target="_blank" class="text-2xl underline-offset-2 hover:underline">
                                        {p.user.username}
                                    </a>
                                    {p.user.is_supporter &&
                                        <Supporter level={p.user.support_level} />
                                    }
                                    {p.user.groups.map(g =>
                                        <div class="badge border-none text-white p-1 flex flex-row" style={{
                                            backgroundColor: g.colour,
                                            gap: ".08rem",
                                        }}>
                                            {g.short_name}
                                        </div>
                                    )}
                                </div>
                                {p.user.title ?
                                    <div class="bg-gradient-to-r from-blue-600 to-green-400 inline-block text-transparent bg-clip-text">
                                        {p.user.title}
                                    </div> : <></>}
                                <div class="flex flex-row gap-2 items-center">
                                    <i class="fa-solid fa-earth-americas fa-xl"></i>
                                    <h2 class="text-xl tooltip" data-tip={`Peak rank: #${p.user?.rank_highest?.rank?.toLocaleString?.()}`}>
                                        #{p.user.statistics?.global_rank?.toLocaleString() || "-"}
                                    </h2>
                                </div>
                                <div class="flex flex-row gap-2 items-center">
                                    {(p.user.country as any).cat ?
                                        <Country code={"CAT"} name={"Catalunya"} /> :
                                        <Country code={p.user.country.code} name={p.user.country.name} />
                                    }
                                    <h2 class="text-xl tooltip" data-tip={`Peak rank: #${best_country?.rank?.toLocaleString()}`}>
                                        #{p.user.statistics?.country_rank?.toLocaleString() || "-"}
                                    </h2>
                                    <Flag name={p.user.country.name} code={p.user.country.code} />
                                </div>
                                <div class="hidden group flex-row gap-2 items-center">
                                    <i class="hidden group-has[.flex]:flex w-6 fa-solid fa-city"></i>
                                    <SubdivisionRanking user_id={p.user.id} mode={p.mode} />
                                    <SubdivisionFlag user_id={p.user.id} />
                                </div>
                                <dl class="flex flex-col gap-1">
                                    <div>
                                        <dt class="text-sm">{p.t?.user.performance}:</dt>
                                        <dd class="text-lg">{Math.round(p.user.statistics.pp).toLocaleString()}pp</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm">{p.t?.score.accuracy}:</dt>
                                        <dd class="text-lg">{(p.user.statistics.hit_accuracy).toFixed(2)}%</dd>
                                    </div>
                                    <div>
                                        <dt class="text-sm">{p.t?.user.sections.medals.title}:</dt>
                                        <dd class="text-lg">{p.user.user_achievements.length} <i class="fa-solid fa-medal fa-xs"></i></dd>
                                    </div>
                                    {p.mode === "mania" ?
                                        p.editable ?
                                            <form hx-swap="none" hx-trigger="change" hx-put={`/users/${p.user.id}/dan`}>
                                                <label class="form-control">
                                                    <span class="label text-sm m-0 p-0 pb-1">Dan:</span>
                                                    <select name="dan" class="select-sm select select-bordered select-ghost">
                                                        {DANS.map(d => <option selected={p.user.dan === d}>{d}</option>)}
                                                    </select>
                                                </label>
                                            </form> :
                                            <div>
                                                <dt class="text-sm">Dan:</dt>
                                                <dd class="text-lg">{p.user.dan || "No Dan"}</dd>
                                            </div>
                                        : <></>
                                    }
                                </dl>
                            </div>
                            <div class="flex flex-col gap-4 justify-between grow">
                                <table>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-angles-up w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.score.ranked_score}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.ranked_score.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-arrow-rotate-left w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.user.play_count}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.play_count.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-regular fa-clock w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.user.play_time}:</td>
                                        <td class="p-1 text-end">{Math.floor(p.user.statistics.play_time / 60 / 60).toLocaleString()}h</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-fire w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.score.max_combo}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.maximum_combo.toLocaleString()}x</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-keyboard w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.user.total_hits}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.total_hits.toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-calculator w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.user.hits_x_play}:</td>
                                        <td class="p-1 text-end">{Math.round(p.user.statistics.total_hits / p.user.statistics.play_count || 0).toLocaleString()}</td>
                                    </tr>
                                    <tr>
                                        <th class="p-1"><i class="fa-solid fa-eye w-4 text-center" /></th>
                                        <td class="p-1">{p.t?.user.replays_watched}:</td>
                                        <td class="p-1 text-end">{p.user.statistics.replays_watched_by_others.toLocaleString()}</td>
                                    </tr>
                                </table>
                                <div class="flex flex-row gap-4 items-center justify-end">
                                    <BarChart name="total_grades" data={grade_counts} user={{
                                        user_id: p.user.id,
                                        username: p.user.username,
                                        mode: ModeToCode(p.mode)
                                    }} />
                                    <span id="total_grades_loading" class="hidden loading loading-spinner loading-md" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {has_socials || has_info || p.user.badges.length > 0 ?
                    <div class="flex flex-col gap-4 p-4">
                        {has_socials ?
                            <div class="flex flex-row items-center flex-wrap gap-2">
                                {p.user.twitter ?
                                    <a href={`https://twitter.com/${p.user.twitter}`} target="_blank" data-tip="twitter" class="tooltip p-1 text-sm text-white px-2 rounded-full bg-[#1DA1F2]">
                                        <button class="flex flex-row gap-2 items-center " type="button">
                                            <i class="fa-brands fa-twitter" />
                                            <span>{p.user.twitter}</span>
                                        </button>
                                    </a> : <></>
                                }
                                {p.user.discord ?
                                    <div data-tip="discord" class="tooltip p-1 text-sm text-white px-2 rounded-full bg-[#5865F2]">
                                        <button class="flex flex-row gap-2 items-center " type="button">
                                            <i class="fa-brands fa-discord" />
                                            <span>{p.user.discord}</span>
                                        </button>
                                    </div> : <></>
                                }
                                {p.user.socials?.map(s => (
                                    <UserSocial user_id={p.user.id} social={s} editable={p.editable} />
                                ))}
                                {p.editable ?
                                    <form class="group flex flex-row flex-wrap gap-2 items-center" hx-put={`/users/${p.user.id}/socials/submit`} hx-target="#socials_fieldset" hx-swap="beforebegin">
                                        <fieldset class="peer rounded-full peer disabled:hidden join group-disabled:hidden" id="socials_fieldset" disabled>
                                            <select required class="rounded-s-full join-item select select-bordered select-sm" name="platform">
                                                <option disabled selected>Choose</option>
                                                {SOCIALS.map(s => <option value={s}>{s}</option>)}
                                            </select>
                                            <label class="join-item input input-sm input-bordered flex items-center gap-2">
                                                @ <input required name="username" type="text" class="grow" placeholder="Username" />
                                            </label>
                                        </fieldset>
                                        <button class="peer-disabled:hidden btn btn-sm btn-circle btn-primary" type="submit">
                                            <i class="fa-solid fa-plus" />
                                        </button>
                                        <button class="btn btn-ghost btn-circle btn-sm peer-enabled:hidden" onclick="document.querySelector('#socials_fieldset').disabled = false" type="button">
                                            <i class="fa-solid fa-plus" />
                                        </button>
                                        <button class="btn btn-ghost btn-circle btn-sm peer-disabled:hidden" onclick="document.querySelector('#socials_fieldset').disabled = true" type="button">
                                            <i class="fa-solid fa-xmark" />
                                        </button>
                                    </form> : <></>
                                }
                            </div> : <></>
                        }
                        {has_info ?
                            <div class="flex flex-row flex-wrap gap-4">
                                {p.user.location ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-location-dot" />
                                        <span>{p.user.location}</span>
                                    </div> : <></>
                                }
                                {p.user.interests ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-heart" />
                                        <span>{p.user.interests}</span>
                                    </div> : <></>
                                }
                                {p.user.occupation ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-building" />
                                        <span>{p.user.occupation}</span>
                                    </div> : <></>
                                }
                                {p.user.website ?
                                    <div class="flex flex-row items-center gap-2">
                                        <i class="fa-solid fa-globe"></i>
                                        <a href={p.user.website} target="_blank" class="hover:underline">{p.user.website}</a>
                                    </div> : <></>
                                }
                            </div> : <></>
                        }
                        {p.user.badges.length > 0 &&
                            <div class="flex flex-row flex-wrap gap-2">
                                {p.user.badges.map(badge =>
                                    <div class="tooltip" data-tip={badge.description}>
                                        <img data-src={badge.image_url} width="86" height="40" alt={badge.description} />
                                    </div>
                                )}
                            </div>
                        }
                    </div> : <></>
                }
            </div>
        </section >
    );
}

export default UserTopPanel;
