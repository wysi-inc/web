import { colors } from "@/src/libs/colors";
import type { AdvanceUser } from "@/src/types/osu";
import BarChart from "./u_components/BarChart";
import BeatmapsetCard from "../../beatmap/BeatmapsetCard";
import { getBeatmapset } from "@/src/db/beatmaps/get_beatmaps";
import UserCard from "../UserCard";

type Props = {
    user_id: number,
    logged_id?: number,
}
async function UserYearPanel(p: Props) {

    const res = await fetch(`https://advance.catboy.best/api/users/${p.user_id}`);
    const data = (await res.json()) as AdvanceUser | { error: string };

    if ("error" in data) {
        if (p.user_id !== p.logged_id) return <>This user isn't being tracked by Advanced</>;
        return <>Get tracked with Advanced by clicking <a href="https://advance.catboy.best/api/track" class="link link-info" target="_blank">here</a>!</>;
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
    for (let i = 0; i < 4; i++) {
        if (!data.favourite.mapper[i]) break;
        mappers.push(data.favourite.mapper[i]);
    }

    const songs = [];
    for (let i = 0; i < 3; i++) {
        if (!data.favourite.songs[i]) break;
        songs.push(data.favourite.songs[i]);
    }

    return (<>
        <div class="grid grid-cols-1 gap-4">
            <div class="flex flex-col gap-4">
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <h4 class="py-1 px-2 flex flex-row text-neutral-content justify-between">
                        <span>Performance Tags:</span>
                    </h4>
                    <div class="grow flex flex-row gap-2 p-2 rounded-lg bg-base-300">
                        {data.tags.map((tag) =>
                            <div class={`badge ${tag.type === 1 ? "badge-success" : tag.type === 2 ? "badge-warning" : "badge-error"}`}>
                                {tag.name}
                            </div>
                        )}
                    </div>
                </div>
                <div class="grid md:grid-cols-2 gap-4">
                    <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                        <h4 class="py-1 px-2 flex flex-row text-neutral-content justify-between">
                            <span>Stats:</span>
                        </h4>
                        <div class="grow flex text-center flex-row flex-wrap gap-2 p-2 rounded-lg bg-base-300">
                            <div class="flex flex-row gap-2 items-center justify-between bg-base-100 rounded-full px-2 py-1">
                                <span>Playtime:</span>
                                <span>+{Math.round(data.playtime / 60 / 60).toLocaleString()}h</span>
                            </div>
                            <div class="flex flex-row gap-2 items-center justify-between bg-base-100 rounded-full px-2 py-1">
                                <span>Playcount:</span>
                                <span>+{data.scores.total.toLocaleString()}</span>
                            </div>
                            <div class="flex flex-row gap-2 items-center justify-between bg-base-100 rounded-full px-2 py-1">
                                <span>Pass rate:</span>
                                <span class={passrate > 66 ? "text-success" : passrate > 33 ? "text-warning" : "text-error"}>{(passrate).toFixed(2)}%</span>
                            </div>
                            <div class="flex flex-row gap-2 items-center justify-between bg-base-100 rounded-full px-2 py-1">
                                <span>Rank gain:</span>
                                <span class={rank_gain > 0 ? "text-success" : "text-error"}>{rank_gain}</span>
                            </div>
                            <div class="flex flex-row gap-2 items-center justify-between bg-base-100 rounded-full px-2 py-1">
                                <span>PP gain:</span>
                                <span class={pp_gain > 0 ? "text-success" : "text-error"}>{pp_gain > 0 ? "+" : "-"}{pp_gain}pp</span>
                            </div>
                        </div>
                    </div>
                    <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                        <h4 class="py-1 px-2 flex flex-row text-neutral-content justify-between">
                            <span>Grades:</span>
                        </h4>
                        <div class="grow p-4 rounded-lg bg-base-300 flex justify-center items-center">
                            <BarChart name="year_grades" data={grade_counts} />
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <h4 class="flex flex-row flex-wrap justify-between gap-2 px-2 py-1">
                        <span>Top mappers:</span><span>({mappers.map(m => `x${m.count}`).join(" | ")})</span>
                    </h4>
                    <div class="flex flex-col gap-2 rounded-lg p-2 bg-base-300 grow">
                        {mappers.map(m => <UserCard user_id={m.id} />)}
                    </div>
                </div>
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <h4 class="flex flex-row flex-wrap justify-between gap-2 px-2 py-1">
                        <span>Top songs:</span><span>({songs.map(s => `x${s.count}`).join(" | ")})</span>
                    </h4>
                    <div class="flex flex-col gap-2 rounded-lg p-2 bg-base-300 grow">
                        {songs.map(async (s) => <BeatmapsetCard beatmapset={await getBeatmapset(s.id)} />)}
                    </div>
                </div>
            </div>
        </div>
        <script>getUserStuff()</script>
    </>);
}

export default UserYearPanel;
