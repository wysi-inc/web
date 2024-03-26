import type { Mode } from "@/src/types/osu";
import type { ColorCount, Score } from "@/src/types/users";
import { v2 } from "osu-api-extended";
import BarChart from "./u_components/BarChart";
import { colors } from "@/src/resources/colors";
import { secondsToTime } from "@/src/resources/functions";

type Props = {
    id: number;
    mode: Mode;
}

const UserSummaryPanel = async (props: Props) => {

    const scores: Score[] = await v2.scores.user.category(
        props.id, "best", {
        mode: props.mode,
        offset: '0',
        limit: '100'
    });

    if (scores.length === 0) {
        return <></>;
    }

    const grade_counts = new Map<string, ColorCount>();
    const hit_counts = new Map<string, ColorCount>();
    const mods_counts = new Map<string, number>();

    const grade_letters: string[] = [];
    const pp_values: number[] = [];
    const acc_values: number[] = [];
    const combo_values: number[] = [];
    const bpm_values: number[] = [];
    const length_values: number[] = [];

    grade_counts.set("XH", { count: 0, color: colors.grades.xh });
    grade_counts.set("X", { count: 0, color: colors.grades.x });
    grade_counts.set("SH", { count: 0, color: colors.grades.sh });
    grade_counts.set("S", { count: 0, color: colors.grades.s });
    grade_counts.set("A", { count: 0, color: colors.grades.a });
    grade_counts.set("B", { count: 0, color: colors.grades.b });
    grade_counts.set("C", { count: 0, color: colors.grades.c });
    grade_counts.set("D", { count: 0, color: colors.grades.d });

    for (let i = 0; i < scores.length; i++) {
        const score: Score = scores[i];

        const grade = score.rank;

        const mods = getScoreMods(score);
        const mods_key = mods.join('-');

        let bpm = score.beatmap.bpm;
        let len = score.beatmap.total_length;
        score.mods.forEach((mod) => {
            switch (mod.acronym) {
                case "DT":
                case "NC":
                    bpm *= 1.5;
                    len *= 2 / 3;
                    break;
                case "HT":
                    bpm *= 0.75;
                    len *= 4 / 3;
                    break;
            }
        })
        bpm = Math.round(bpm);
        len = Math.round(len);

        grade_letters.push(score.rank);
        pp_values.push(score.pp || 0);
        acc_values.push(score.accuracy * 100);
        combo_values.push(score.max_combo);
        bpm_values.push(bpm);
        length_values.push(len);

        mods_counts.set(mods_key, (mods_counts.get(mods_key) || 0) + 1);

        grade_counts.set(grade, {
            count: (grade_counts.get(grade)?.count || 0) + 1,
            color: (colors.grades as any)[grade.toLowerCase()]
        });

        hit_counts.set("x300", {
            count: (hit_counts.get("x300")?.count || 0) + (score.statistics.great || 0),
            color: colors.judgements.x300
        });

        hit_counts.set("x100", {
            count: (hit_counts.get("x100")?.count || 0) + (score.statistics.ok || 0),
            color: colors.judgements.x100
        });

        hit_counts.set("x50", {
            count: (hit_counts.get("x50")?.count || 0) + (score.statistics.meh || 0),
            color: colors.judgements.x50
        });

        hit_counts.set("xMiss", {
            count: (hit_counts.get("xMiss")?.count || 0) + (score.statistics.miss || 0),
            color: colors.judgements.xMiss
        });

    }

    pp_values.sort((a, b) => a - b);

    const grade_length = 100 / grade_letters.length;
    const max_grade = Array.from(grade_counts.entries()).reduce((a, b) => a[1].count > b[1].count ? a : b);
    const max_mods: string[] = Array.from(mods_counts.entries()).reduce((a, b) => a[1] > b[1] ? a : b)[0].split('-');
    const avg_acc = (acc_values.reduce((a, b) => a + b) / acc_values.length).toFixed(2);
    const avg_combo = Math.round(combo_values.reduce((a, b) => a + b) / combo_values.length);
    const avg_pp = Math.round(pp_values.reduce((a, b) => a + b) / pp_values.length);
    const avg_bpm = Math.round(bpm_values.reduce((a, b) => a + b) / bpm_values.length);
    const avg_length = secondsToTime(length_values.reduce((a, b) => a + b) / length_values.length);

    const max_pp = Math.round(pp_values[pp_values.length - 1]);
    const min_pp = Math.round(pp_values[0]);

    function getScoreMods(sc: Score): string[] {
        const arr = sc.mods.filter(m => m.acronym !== "CL").map(m => m.acronym);
        const mods = arr.length > 0 ? arr : ["NM"];
        return mods;
    }

    return (
        <div class="flex flex-col gap-4">
            <div class="shadow-lg flex flex-col grow col-span-full bg-neutral rounded-lg">
                <div class="p-2 text-neutral-content">Average Play:</div>
                <div class="flex grow flex-row flex-wrap gap-4 items-center p-4 rounded-lg bg-base-300">
                    <h3 class="text-xl" style={{ color: max_grade[1].color }}>{max_grade[0]}</h3>
                    <div>{avg_pp}pp</div>
                    <div><i class="fa-solid fa-bullseye fa-xs" /> {avg_acc}%</div>
                    <div><i class="fa-solid fa-fire fa-xs" /> {avg_combo}x</div>
                    <div><i class="fa-solid fa-stopwatch fa-xs" /> {avg_length}</div>
                    <div><i class="fa-solid fa-music fa-xs" /> {avg_bpm}bpm</div>
                    {max_mods.map(mod => (
                        <div class="tooltip flex items-center justify-center" data-tip={mod}>
                            <img src={`/public/img/mods/${mod.toLowerCase()}.png`} alt={mod} class="h-5" />
                        </div>
                    ))}
                </div>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <div class="p-2 flex flex-row text-neutral-content justify-between">
                        <div>Performance:</div>
                        <div>{avg_pp}pp</div>
                    </div>
                    <div class="flex grow flex-row items-center justify-between gap-4 p-4 rounded-lg bg-base-300">
                        <span>{max_pp}pp</span>
                        <span class="flex flex-row shadow-lg grow h-2 rounded-full overflow-hidden">
                            {grade_letters.map(grade => <div style={{
                                backgroundColor: (colors.grades as any)[grade.toLowerCase()], width: `${grade_length}%`
                            }} />)}
                        </span>
                        <span>{min_pp}pp</span>
                    </div>
                </div>
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <div class="p-2 flex flex-row text-neutral-content justify-between">
                        <div>Mods:</div>
                        <div class="flex flex-row gap-1 items-center">
                            {max_mods.map(m => (
                                <div class="tooltip flex items-center justify-center" data-tip={m}>
                                    <img src={`/public/img/mods/${m.toLowerCase()}.png`} alt={m} class="h-5" />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div class="flex grow flex-row flex-wrap gap-4 items-center p-4 rounded-lg bg-base-300">
                        {Array.from(mods_counts.entries()).sort((a, b) => b[1] - a[1]).map(([mods, count]) => (
                            <div class="flex flex-row gap-1 items-center">
                                {mods.split('-').map(mod => (
                                    <div class="tooltip flex flex-row gap-1 items-center justify-center" data-tip={mod}>
                                        <img src={`/public/img/mods/${mod.toLowerCase()}.png`} alt={mod} class="h-5" />
                                    </div>
                                ))}
                                <div>{count}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <div class="p-2 flex flex-row text-neutral-content justify-between">
                        <div>Grades:</div>
                        <div style={{ color: max_grade[1].color }}>
                            {max_grade[0]}
                        </div>
                    </div>
                    <div class="grow p-4 rounded-lg bg-base-300">
                        <BarChart data={grade_counts} />
                    </div>
                </div>
                <div class="shadow-lg flex flex-col bg-neutral rounded-lg">
                    <div class="p-2 flex flex-row text-neutral-content justify-between">
                        <div>Hits:</div>
                        <div>{avg_acc}%</div>
                    </div>
                    <div class="grow p-4 rounded-lg bg-base-300">
                        <BarChart data={hit_counts} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserSummaryPanel;
