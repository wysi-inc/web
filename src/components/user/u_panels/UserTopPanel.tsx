import moment from "moment";
import BarChart from "./u_components/BarChart";
import Flag from "./u_components/Flag";
import Country from "./u_components/Country";
import Supporter from "./u_components/Supporter";
import ModeIcon from "../../beatmap/ModeIcon";
import HxA from "../../web/HxA";
import type { User } from "@/src/types/users";
import type { Mode } from "@/src/types/osu";
import { colors } from "@/src/libs/colors";
import SubdivisionFlag from "./u_components/SubdivisionFlag";
import { getSubdivision } from "@/src/libs/web_utils";

type Props = {
    user: User;
    mode: Mode;
}
async function UserTopPanel({ user, mode }: Props) {

    if (!user) return <></>;

    const best_country = user?.db_ranks?.country_ranks?.sort?.((a, b) => a.rank - b.rank)[0];

    const grade_counts = new Map<string, { count: number, color: string }>();
    grade_counts.set("XH", { count: user.statistics.grade_counts.ssh, color: colors.grades.xh });
    grade_counts.set("X", { count: user.statistics.grade_counts.ss, color: colors.grades.x });
    grade_counts.set("SH", { count: user.statistics.grade_counts.sh, color: colors.grades.sh });
    grade_counts.set("S", { count: user.statistics.grade_counts.s, color: colors.grades.s });
    grade_counts.set("A", { count: user.statistics.grade_counts.a, color: colors.grades.a });

    const subdivisions = await getSubdivision([user.id]);
    const subdivision = subdivisions.get(user.id);

    return (
        <div class="rounded-lg bg-base-100 shadow-lg">
            <div class="rounded-lg"
                style={{
                    backgroundImage: `url(${user.cover_url})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`,
                    backgroundRepeat: "no-repeat"
                }}>
                <div class="text-base-content bg-base-300 bg-opacity-65 backdrop-blur-sm justify-center flex flex-row flex-wrap gap-8 p-8 rounded-lg">
                    <div class="flex flex-col gap-4 items-center justify-between">
                        <div class="flex flex-col bg-base-300 rounded-lg">
                            <img src={user.avatar_url} class="rounded-lg aspect-square size-40" />
                            <div class="flex flex-row gap-1 p-2 flex-wrap justify-around items-center">
                                <div class="tooltip" data-tip="osu!">
                                    {mode === "osu" ?
                                        <ModeIcon mode="osu" size={24} css={`fill-secondary`} /> :
                                        <HxA url={`/users/${user.id}/osu`}>
                                            <ModeIcon mode="osu" size={24} css={`fill-base-content`} />
                                        </HxA>
                                    }
                                </div>
                                <div class="tooltip" data-tip="osu!taiko">
                                    {mode === "taiko" ?
                                        <ModeIcon mode="taiko" size={24} css={`fill-secondary`} /> :
                                        <HxA url={`/users/${user.id}/taiko`}>
                                            <ModeIcon mode="taiko" size={24} css={`fill-base-content`} />
                                        </HxA>
                                    }
                                </div>
                                <div class="tooltip" data-tip="osu!catch">
                                    {mode === "fruits" ?
                                        <ModeIcon mode="fruits" size={24} css={`fill-secondary`} /> :
                                        <HxA url={`/users/${user.id}/fruits`}>
                                            <ModeIcon mode="fruits" size={24} css={`fill-base-content`} />
                                        </HxA>
                                    }
                                </div>
                                <div class="tooltip" data-tip="osu!mania">
                                    {mode === "mania" ?
                                        <ModeIcon mode="mania" size={24} css={`fill-secondary`} /> :
                                        <HxA url={`/users/${user.id}/mania`}>
                                            <ModeIcon mode="mania" size={24} css={`fill-base-content`} />
                                        </HxA>
                                    }
                                </div>
                            </div>
                        </div>
                        <div class="tooltip" data-tip={moment(user.join_date).format("DD/MM/YYYY")}>joined {moment(user.join_date).fromNow()}</div>
                        <div class="flex flex-row justify-between gap-2 items-center">
                            <span>{user.statistics.level.current}</span>
                            <progress class="progress progress-accent w-32" value={user.statistics.level.progress} max="100" />
                            <span>{user.statistics.level.current + 1}</span>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 items-center justify-between grow">
                        <div class="flex flex-col gap-2 items-center sm:items-start text-center sm:text-start">
                            <div class="flex flex-row gap-2 items-center">
                                <a href={`https://osu.ppy.sh/users/${user.id}`}
                                    target="_blank" class="text-2xl underline-offset-2 hover:underline">{user.username}</a>
                                {user.is_supporter &&
                                    <Supporter level={user.support_level} />
                                }
                            </div>
                            <div class="flex flex-row gap-2 items-center">
                                <i class="fa-solid fa-earth-americas fa-xl" />
                                <h2 class="text-xl tooltip" data-tip={`Peak rank: #${user?.rank_highest?.rank?.toLocaleString?.()}`}>
                                    #{user.statistics?.global_rank?.toLocaleString() || "-"}
                                </h2>
                            </div>
                            <div class="flex flex-row gap-2 items-center">
                                <Country code={user.country.code} name={user.country.name} />
                                <h2 class="text-xl tooltip" data-tip={`Peak rank: #${best_country?.rank?.toLocaleString()}`}>
                                    #{user.statistics?.country_rank?.toLocaleString() || "-"}
                                </h2>
                                <Flag name={user.country.name} code={user.country.code} />
                                {subdivision !== undefined ?
                                    <SubdivisionFlag name={subdivision.name} url={subdivision.flag} />
                                    : <></>
                                }
                            </div>
                            <div>
                                <div class="text-sm">Performance:</div>
                                <h2 class="text-lg">{Math.round(user.statistics.pp).toLocaleString()}pp</h2>
                            </div>
                            <div>
                                <div class="text-sm">Accuracy:</div>
                                <h2 class="text-lg">{(user.statistics.hit_accuracy).toFixed(2)}%</h2>
                            </div>
                            <div>
                                <div class="text-sm">Medals:</div>
                                <h2 class="text-lg">{user.user_achievements.length} <i class="fa-solid fa-medal fa-xs" /></h2>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 justify-between">
                            <div class="grow text-sm flex flex-row gap-12 justify-between">
                                <div class="flex flex-col gap-2 text-start">
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-solid fa-angles-up w-4 text-center" />
                                        <span>Ranked Score:</span>
                                    </h2>
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-solid fa-arrow-rotate-left w-4 text-center" />
                                        <span>Play Count:</span>
                                    </h2>
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-regular fa-clock w-4 text-center" />
                                        <span>Play Time:</span>
                                    </h2>
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-solid fa-fire w-4 text-center" />
                                        <span>Max Combo:</span>
                                    </h2>
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-solid fa-keyboard w-4 text-center" />
                                        <span>Total Hits:</span>
                                    </h2>
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-solid fa-calculator w-4 text-center" />
                                        <span>Hits x Play:</span>
                                    </h2>
                                    <h2 class="flex gap-3 items-center">
                                        <i class="fa-solid fa-eye w-4 text-center" />
                                        <span>Replays Watched:</span>
                                    </h2>
                                </div>
                                <div class="flex flex-col gap-2 text-end">
                                    <h2>{user.statistics.ranked_score.toLocaleString()}</h2>
                                    <h2>{user.statistics.play_count.toLocaleString()}</h2>
                                    <h2>{Math.floor(user.statistics.play_time / 60 / 60).toLocaleString()}h</h2>
                                    <h2>{user.statistics.maximum_combo.toLocaleString()}x</h2>
                                    <h2>{user.statistics.total_hits.toLocaleString()}</h2>
                                    <h2>{Math.round(user.statistics.total_hits / user.statistics.play_count || 0).toLocaleString()}</h2>
                                    <h2>{user.statistics.replays_watched_by_others.toLocaleString()}</h2>
                                </div>
                            </div>
                            <BarChart data={grade_counts} />
                        </div>
                    </div>
                </div>
            </div >
            <div class="flex flex-col gap-4 p-4">
                <div class="flex flex-row flex-wrap gap-4">
                    {user.location ?
                        <div class="flex flex-row items-center gap-1">
                            <i class="fa-solid fa-location-dot" />
                            <span>{user.location}</span>
                        </div>
                        : <></>
                    }
                    {user.interests ?
                        <div class="flex flex-row items-center gap-1">
                            <i class="fa-solid fa-heart" />
                            <span>{user.interests}</span>
                        </div>
                        : <></>
                    }
                    {user.occupation ?
                        <div class="flex flex-row items-center gap-1">
                            <i class="fa-solid fa-building" />
                            <span>{user.occupation}</span>
                        </div>
                        : <></>
                    }
                    {user.twitter ?
                        <div class="flex flex-row items-center gap-1">
                            <i class="fa-brands fa-twitter" />
                            <a href={`https://twitter.com/${user.twitter}`} target="_blank" class="hover:underline">
                                {user.twitter}
                            </a>
                        </div>
                        : <></>
                    }
                    {user.discord ?
                        <div class="flex flex-row items-center gap-1">
                            <i class="fa-brands fa-discord" />
                            <span>{user.discord}</span>
                        </div>
                        : <></>
                    }
                    {user.website ?
                        <div class="flex flex-row items-center gap-1">
                            <i class="fa-solid fa-globe"></i>
                            <a href={user.website} target="_blank" class="hover:underline">{user.website}</a>
                        </div>
                        : <></>
                    }
                </div>
                {user.badges.length > 0 &&
                    <div class="flex flex-row flex-wrap gap-2">
                        {user.badges.map(badge =>
                            <div class="tooltip" data-tip={badge.description}>
                                <img width="86" height="40" src={badge.image_url} />
                            </div>
                        )}
                    </div>
                }
            </div>
        </div>
    );
}

export default UserTopPanel;
