import { api_beatmapset_details } from "@/src/api/beatmap";
import { colors } from "@/src/libs/colors";
import type { Beatmapset } from "@/src/types/beatmaps";
import type { AdvanceUser, Mode } from "@/src/types/osu";
import type { UserCookie } from "@/src/types/users";
import BeatmapsetCard from "../../beatmap/BeatmapsetCard";
import UserCard from "../UserCard";
import BarChart from "./u_components/BarChart";

async function UserYearPanel(p: {
    user_id: number,
    logged_id?: number,
    mode: Mode,
    user?: UserCookie | null
}) {

    const mode_int = (m: string) => {
        switch (m.toLowerCase()) {
            case "osu":
                return 0;
            case "taiko":
                return 1;
            case "fruits":
            case "catch":
                return 2;
            case "mania":
                return 3;
            default:
                return -1;
        }
    }

    const res = await fetch(`https://advance.catboy.best/api/users/${p.user_id}?mode=${mode_int(p.mode)}`);
    if (!res.ok) return <>Can't reach Advance at the moment</>;
    const data = await res.json() as AdvanceUser | { error: string };

    if ("error" in data) {
        if (p.user_id !== p.logged_id) return <>This user isn't being tracked by Advanced</>;
        return <>Get tracked with Advanced by clicking <a href="https://advance.catboy.best/api/track" class="link link-info" target="_blank">here</a>!</>;
    }
    if (!data.available) {
        return <>This user is still being processed, this could take a couple hours, check out later</>;
    }

    const passrate = data.scores.passed / data.scores.total * 100;
    const rank_gain = data.rank.start - data.rank.current
    const pp_gain = data.pp.ranked;

    const grade_counts = new Map<string, { count: number, color: string }>();
    grade_counts.set("XH", { count: data.grades.XH, color: colors.grades.xh });
    grade_counts.set("X", { count: data.grades.X, color: colors.grades.x });
    grade_counts.set("SH", { count: data.grades.SH, color: colors.grades.sh });
    grade_counts.set("S", { count: data.grades.S, color: colors.grades.s });
    grade_counts.set("A", { count: data.grades.A, color: colors.grades.a });
    grade_counts.set("B", { count: data.grades.B, color: colors.grades.b });
    grade_counts.set("C", { count: data.grades.C, color: colors.grades.c });
    grade_counts.set("D", { count: data.grades.D, color: colors.grades.d });

    const mappers = [];
    for (let i = 0; i < Math.min(data.favourite.mapper.length, 5); i++) {
        mappers.push(data.favourite.mapper[i]);
    }

    const beatmaps: Array<[Beatmapset, number]> = [];
    for (let i = 0; i < Math.min(data.favourite.songs.length, 3); i++) {
        const b = await api_beatmapset_details(data.favourite.songs[i].id, p.user);
        if (!b) continue;
        beatmaps.push([b, data.favourite.songs[i].count]);
    }

    return (<>
        <div class="grid grid-cols-1 gap-4">
            <div class="flex flex-col gap-4">
                <div class="flex flex-col rounded-lg bg-neutral shadow-lg">
                    <h4 class="flex flex-row justify-between px-2 py-1 text-neutral-content">
                        <span>Performance Tags:</span>
                    </h4>
                    <div class="flex grow flex-row flex-wrap gap-2 rounded-lg bg-base-300 p-2">
                        {data.tags.map((tag) =>
                            <div class={`${tag.type === 1 ? "badge-success" : tag.type === 2 ? "badge-warning" : "badge-error"} badge`}>
                                {tag.name}
                            </div>
                        )}
                    </div>
                </div>
                <div class="grid gap-4 md:grid-cols-2">
                    <div class="flex flex-col rounded-lg bg-neutral shadow-lg">
                        <h4 class="flex flex-row justify-between px-2 py-1 text-neutral-content">
                            <span>Stats:</span>
                        </h4>
                        <div class="flex grow flex-row flex-wrap gap-2 rounded-lg bg-base-300 p-2 text-center">
                            <div class="flex flex-row items-center justify-between gap-2 rounded-full bg-base-100 px-2 py-1">
                                <span>Playtime:</span>
                                <span>+{Math.round(data.playtime / 60 / 60).toLocaleString()}h</span>
                            </div>
                            <div class="flex flex-row items-center justify-between gap-2 rounded-full bg-base-100 px-2 py-1">
                                <span>Playcount:</span>
                                <span>+{data.scores.total.toLocaleString()}</span>
                            </div>
                            <div class="flex flex-row items-center justify-between gap-2 rounded-full bg-base-100 px-2 py-1">
                                <span>Pass rate:</span>
                                <span class={passrate > 66 ? "text-success" : passrate > 33 ? "text-warning" : "text-error"}>{(passrate).toFixed(2)}%</span>
                            </div>
                            <div class="flex flex-row items-center justify-between gap-2 rounded-full bg-base-100 px-2 py-1">
                                <span>Rank gain:</span>
                                <span class={rank_gain > 0 ? "text-success" : "text-error"}>{rank_gain}</span>
                            </div>
                            <div class="flex flex-row items-center justify-between gap-2 rounded-full bg-base-100 px-2 py-1">
                                <span>PP gain:</span>
                                <span class={pp_gain > 0 ? "text-success" : "text-error"}>{pp_gain > 0 ? "+" : "-"}{pp_gain}pp</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col rounded-lg bg-neutral shadow-lg">
                        <h4 class="flex flex-row justify-between px-2 py-1 text-neutral-content">
                            <span>Grades:</span>
                        </h4>
                        <div class="flex grow items-center justify-center rounded-lg bg-base-300 p-4">
                            <BarChart name="year_grades" data={grade_counts} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid gap-4 md:grid-cols-2">
                <div class="flex flex-col rounded-lg bg-neutral shadow-lg">
                    <h4 class="flex flex-row flex-wrap justify-between gap-2 px-2 py-1">
                        Top mappers:
                    </h4>
                    <div class="flex grow flex-col gap-1 rounded-lg bg-base-300 p-1">
                        {mappers.map(m => (
                            <div class="flex flex-row items-center gap-4">
                                <div class="min-w-12 p-1 text-center text-lg">{m.count}x</div>
                                <div class="grow p-1"><UserCard user_id={m.id} username={m.name} /></div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="flex flex-col rounded-lg bg-neutral shadow-lg">
                    <h4 class="flex flex-row flex-wrap justify-between gap-2 px-2 py-1">
                        Top songs:
                    </h4>
                    <div class="flex grow flex-col gap-2 rounded-lg bg-base-300 p-1">
                        {beatmaps.map(b => (
                            <div class="flex flex-row items-center gap-4">
                                <div class="min-w-12 p-1 text-center text-lg">{b[1]}x</div>
                                <div class="grow p-1"><BeatmapsetCard b_set={b[0]} /></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default UserYearPanel;
