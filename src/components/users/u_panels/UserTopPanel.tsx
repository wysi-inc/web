import { colors } from "@/src/resources/colors";
import type { User } from "@/src/types/users";
import moment from "moment";

type Props = {
    user: User;
}
const UserTopPanel = (props: Props) => {

    const { user } = props;

    const total_ranks = user.statistics.grade_counts.s + user.statistics.grade_counts.sh + user.statistics.grade_counts.ss + user.statistics.grade_counts.ssh + user.statistics.grade_counts.a;

    return (
        <div class="rounded-lg bg-base-100 shadow-lg">
            <div class="rounded-lg"
                style={{
                    backgroundImage: `url(${user.cover_url})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}>
                <div class="flex flex-row gap-8 p-8 rounded-lg"
                    style={{
                        backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        backdropFilter: `blur(8px)`
                    }}>
                    <div class="flex flex-col justify-center">
                        <div class="flex flex-col gap-4 items-center justify-between">
                            <img src={user.avatar_url} class="rounded-lg aspect-square h-52 w-52" />
                            <div>joined {moment(user.join_date).fromNow()}</div>
                            <div class="flex flex-row justify-between gap-2 items-center">
                                <span>{user.statistics.level.current}</span>
                                <progress class="progress progress-accent w-32" value={user.statistics.level.progress} max="100" />
                                <span>{user.statistics.level.current + 1}</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between grow">
                        <div class="flex flex-col gap-2 grow">
                            <div class="flex flex-row gap-2 items-center">
                                <h1 class="text-2xl">{user.username}</h1>
                                {user.is_supporter &&
                                    <div class="badge badge-primary text-white">
                                        {[...Array(user.support_level)].map(() =>
                                            <i class="fa-solid fa-heart" />)}
                                    </div>
                                }
                            </div>
                            <div class="flex flex-row gap-2 items-center">
                                <i class="fa-solid fa-earth-americas fa-xl" />
                                <h2 class="text-xl">#{user.statistics.global_rank.toLocaleString()}</h2>
                            </div>
                            <div class="flex flex-row gap-2 items-center">
                                <img src={`/public/img/countries/${user.country_code.toLowerCase()}.svg`}
                                    class="h-6 w-6" style="filter: invert(1);" />
                                <h2 class="text-xl">#{user.statistics.country_rank.toLocaleString()}</h2>
                                <img src={`https://flagcdn.com/h40/${user.country_code.toLowerCase()}.jpg`}
                                    class="h-5 w-7 rounded-sm" />
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
                            <div class="text-sm flex flex-row gap-4 justify-between">
                                <div class="flex flex-col gap-2 text-start">
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-angles-up w-4 text-center" /><span>Ranked Score:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-arrow-rotate-left w-4 text-center" /><span>Play Count:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-regular fa-clock w-4 text-center" /><span>Play Time:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-fire w-4 text-center" /><span>Max Combo:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-keyboard w-4 text-center" /><span>Total Hits:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-calculator w-4 text-center" /><span>Hits x Play:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-eye w-4 text-center" /><span>Replays Watched:</span></h2>
                                </div>
                                <div class="flex flex-col gap-2 text-end">
                                    <h2>{user.statistics.ranked_score.toLocaleString()}</h2>
                                    <h2>{user.statistics.play_count.toLocaleString()}</h2>
                                    <h2>{Math.floor(user.statistics.play_time / 60 / 60).toLocaleString()}h</h2>
                                    <h2>{user.statistics.maximum_combo.toLocaleString()}x</h2>
                                    <h2>{user.statistics.total_hits.toLocaleString()}</h2>
                                    <h2>{Math.round(user.statistics.total_hits / user.statistics.play_count).toLocaleString()}</h2>
                                    <h2>{user.statistics.replays_watched_by_others.toLocaleString()}</h2>
                                </div>
                            </div>
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-row justify-around">
                                    <div class="flex flex-col items-center">
                                        <h4 style={{ color: colors.grades.xh }}>XH</h4>
                                        <div>{user.statistics.grade_counts.ssh}</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <h4 style={{ color: colors.grades.x }}>X</h4>
                                        <div>{user.statistics.grade_counts.ss}</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <h4 style={{ color: colors.grades.sh }}>SH</h4>
                                        <div>{user.statistics.grade_counts.sh}</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <h4 style={{ color: colors.grades.s }}>S</h4>
                                        <div>{user.statistics.grade_counts.s}</div>
                                    </div>
                                    <div class="flex flex-col items-center">
                                        <h4 style={{ color: colors.grades.a }}>A</h4>
                                        <div>{user.statistics.grade_counts.a}</div>
                                    </div>
                                </div>
                                <div class="flex flex-row h-2 rounded-lg overflow-hidden">
                                    <div class="h-full" style={{ width: `${user.statistics.grade_counts.ssh / total_ranks * 100}%`, backgroundColor: colors.grades.xh }} />
                                    <div class="h-full" style={{ width: `${user.statistics.grade_counts.ss / total_ranks * 100}%`, backgroundColor: colors.grades.x }} />
                                    <div class="h-full" style={{ width: `${user.statistics.grade_counts.sh / total_ranks * 100}%`, backgroundColor: colors.grades.sh }} />
                                    <div class="h-full" style={{ width: `${user.statistics.grade_counts.s / total_ranks * 100}%`, backgroundColor: colors.grades.s }} />
                                    <div class="h-full" style={{ width: `${user.statistics.grade_counts.a / total_ranks * 100}%`, backgroundColor: colors.grades.a }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {user.badges.length > 0 &&
                <div class="flex flex-row gap-2 flex-wrap p-4">
                    {user.badges.map(badge =>
                        <div class="tooltip" data-tip={badge.description}>
                            <img width="86" height="40" src={badge.image_url} />
                        </div>
                    )}
                </div>
            }
        </div>
    );
}

export default UserTopPanel;
