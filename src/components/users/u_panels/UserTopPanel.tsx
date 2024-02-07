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
        <div class="rounded-lg bg-base-200 shadow-lg">
            <div class="rounded-lg overflow-hidden"
                style={{
                    backgroundImage: `url(${user.cover_url})`,
                    backgroundSize: `cover`,
                    backgroundPosition: `center`
                }}>
                <div class="flex flex-row gap-8 p-8"
                    style={{
                        backgroundColor: `rgba(0, 0, 0, 0.8)`,
                        backdropFilter: `blur(8px)`
                    }}>
                    <div class="flex flex-col justify-center">
                        <div class="flex flex-col gap-4 items-center justify-between">
                            <img src={user.avatar_url} class="rounded-lg h-52 w-52" />
                            <div>joined {moment(user.join_date).fromNow()}</div>
                            <progress class="progress progress-accent" value={user.statistics.level.progress} max="100" />
                        </div>
                    </div>
                    <div class="flex flex-row justify-between grow">
                        <div class="flex flex-col gap-2 grow">
                            <div class="flex flex-row gap-2 items-center">
                                <h1 class="text-2xl">{user.username}</h1>
                                {user.is_supporter &&
                                    <div class="badge badge-primary">
                                        {[...Array(user.support_level)].map(() =>
                                            <svg xmlns="http://www.w3.org/2000/svg" style="heigth: 14px; width: 14px;" viewBox="0 0 512 512">
                                                <path fill="#fff" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                                            </svg>
                                        )}
                                    </div>
                                }
                            </div>
                            <div class="flex flex-row gap-2 items-center">
                                <div class="h-6 w-8">
                                    <svg class="h-6 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="#fff" d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
                                    </svg>
                                </div>
                                <h2 class="text-xl">#{user.statistics.global_rank.toLocaleString()}</h2>
                            </div>
                            <div class="flex flex-row gap-2 items-center">
                                <img src={`/public/img/countries/${user.country_code.toLowerCase()}.svg`}
                                    class="h-6 w-8" style="filter: invert(1);" />
                                <h2 class="text-xl">#{user.statistics.country_rank.toLocaleString()}</h2>
                                <img src={`https://flagcdn.com/h40/${user.country_code.toLowerCase()}.jpg`}
                                    class="h-5 w-7 rounded-sm" />
                            </div>
                            <div>
                                <div class="text-sm">Performance</div>
                                <h2 class="text-lg">{Math.round(user.statistics.pp).toLocaleString()}pp</h2>
                            </div>
                            <div>
                                <div class="text-sm">Accuracy</div>
                                <h2 class="text-lg">{(user.statistics.hit_accuracy).toFixed(2)}%</h2>
                            </div>
                            <div>
                                <div class="text-sm">Medals</div>
                                <h2 class="text-lg">{user.user_achievements.length}</h2>
                            </div>
                        </div>
                        <div class="flex flex-col gap-4 justify-between">
                            <div class="text-sm flex flex-row gap-4 justify-between">
                                <div class="flex flex-col gap-2 text-start">
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-chevron-up" /><span>Ranked Score:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-arrow-rotate-left" /><span>Play Count:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-regular fa-clock" /><span>Play Time:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-keyboard" /><span>Total Hits:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-fire" /><span>Max Combo:</span></h2>
                                    <h2 class="flex gap-3 items-center"><i class="fa-solid fa-eye" /><span>Replays Watched:</span></h2>
                                </div>
                                <div class="flex flex-col gap-2 text-end">
                                    <h2>{user.statistics.ranked_score.toLocaleString()}</h2>
                                    <h2>{user.statistics.play_count.toLocaleString()}</h2>
                                    <h2>{Math.floor(user.statistics.play_time / 60 / 60).toLocaleString()}h</h2>
                                    <h2>{user.statistics.total_hits.toLocaleString()}</h2>
                                    <h2>{user.statistics.maximum_combo.toLocaleString()}x</h2>
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
                                    <div class="h-full hover:brightness-50" style={{ width: `${user.statistics.grade_counts.ssh / total_ranks * 100}%`, backgroundColor: colors.grades.xh }} />
                                    <div class="h-full hover:brightness-50" style={{ width: `${user.statistics.grade_counts.ss / total_ranks * 100}%`, backgroundColor: colors.grades.x }} />
                                    <div class="h-full hover:brightness-50" style={{ width: `${user.statistics.grade_counts.sh / total_ranks * 100}%`, backgroundColor: colors.grades.sh }} />
                                    <div class="h-full hover:brightness-50" style={{ width: `${user.statistics.grade_counts.s / total_ranks * 100}%`, backgroundColor: colors.grades.s }} />
                                    <div class="h-full hover:brightness-50" style={{ width: `${user.statistics.grade_counts.a / total_ranks * 100}%`, backgroundColor: colors.grades.a }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div class="flex flex-row gap-2 flex-wrap p-4">
                {user.badges.map(badge =>
                    <img width="86" height="40" src={badge.image_url} />
                )}
            </div>
        </div>
    );
}

export default UserTopPanel;
