import type { Mode } from "@/src/types/osu";
import type { Score } from "@/src/types/users";
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

    let score_grades = {
        xh: 0,
        x: 0,
        sh: 0,
        s: 0,
        a: 0,
        b: 0,
        c: 0,
        d: 0,
    }
    scores.forEach((sc: Score) => {
        score_grades.xh += sc.rank === "XH" ? 1 : 0;
        score_grades.x += sc.rank === "X" ? 1 : 0;
        score_grades.sh += sc.rank === "SH" ? 1 : 0;
        score_grades.s += sc.rank === "S" ? 1 : 0;
        score_grades.a += sc.rank === "A" ? 1 : 0;
        score_grades.b += sc.rank === "B" ? 1 : 0;
        score_grades.c += sc.rank === "C" ? 1 : 0;
        score_grades.d += sc.rank === "D" ? 1 : 0;
    });

    const grade_labels: string[] = ["XH", "X", "SH", "S", "A", "B", "C", "D"];
    const grade_counts: number[] = [score_grades.xh, score_grades.x, score_grades.sh, score_grades.s, score_grades.a, score_grades.b, score_grades.c, score_grades.d];
    const grade_colors: string[] = [colors.grades.xh, colors.grades.x, colors.grades.sh, colors.grades.s, colors.grades.a, colors.grades.b, colors.grades.c, colors.grades.d];

    let score_hits = {
        x300: 0,
        x100: 0,
        x50: 0,
        xMiss: 0,
    }
    scores.forEach(sc => {
        const statistics = sc.statistics;
        score_hits.x300 += statistics.great || 0;
        score_hits.x100 += statistics.ok || 0;
        score_hits.x50 += statistics.meh || 0;
        score_hits.xMiss += statistics.miss || 0;
    })

    const hit_labels: string[] = ["300", "100", "50", "Miss"];
    const hit_counts: number[] = [score_hits.x300, score_hits.x100, score_hits.x50, score_hits.xMiss];
    const hit_colors: string[] = [colors.judgements.x300, colors.judgements.x100, colors.judgements.x50, colors.judgements.xMiss];

    const all_pp: number[] = scores.map(s => s.pp || 0);

    const max_pp = Math.round(Math.max(...all_pp));
    const min_pp = Math.round(Math.min(...all_pp));

    const avg_pp = Math.round(all_pp.reduce((a, b) => a + b, 0) / all_pp.length);
    const avg_combo = Math.round(scores.map(s => s.max_combo).reduce((a, b) => a + b, 0) / scores.length);

    let avg_acc: number = 0;
    let avg_length: number = 0;
    const avg_bpm = Math.round(scores.map(s => {
        let bpm = s.beatmap.bpm;
        let len = s.beatmap.total_length;
        avg_acc += s.accuracy;
        s.mods.forEach(m => {
            if (m.acronym === "DT" || m.acronym === "NC") {
                bpm *= 1.5;
                len *= 2 / 3;
            }

            if (m.acronym === "HT") {
                bpm *= 0.75;
                len *= 4 / 3;
            }
        })
        avg_length += len;
        return bpm;
    }).reduce((a, b) => a + b, 0) / scores.length);
    avg_length = Math.round(avg_length / scores.length);
    avg_acc = avg_acc * 100 / scores.length;
    const avg_grade = grade_labels[grade_counts.indexOf(Math.max(...grade_counts))];

    let modsCounter: { [key: string]: number } = {};
    scores.forEach((score) => {
        const arr = score.mods.filter(m => m.acronym !== "CL").map(m => m.acronym);
        const mods = arr.length > 0 ? arr : ["NM"];
        const key = mods.join('-');
        if (modsCounter[key]) {
            modsCounter[key] += 1;
        } else {
            modsCounter[key] = 1;
        }
    });
    let largestKey = null;
    let largestValue = -Infinity;
    for (const key in modsCounter) {
        if (modsCounter[key] > largestValue) {
            largestKey = key;
            largestValue = modsCounter[key];
        }
    }
    const avg_mods = largestKey ? largestKey.split('-').map(String) : [];

    return (
        <div class="flex flex-col gap-4">
            <div class="flex flex-col col-span-full bg-neutral rounded-lg">
                <div class="p-2">Average Play:</div>
                <div class="flex flex-row flex-wrap gap-4 items-center p-4 rounded-lg bg-base-300">
                    <h3 class="text-xl" style={{ color: (colors.grades as any)[avg_grade.toLowerCase()] }}>{avg_grade}</h3>
                    <div>{avg_pp}pp</div>
                    <div><i class="fa-solid fa-bullseye fa-xs" /> {avg_acc.toFixed(2)}%</div>
                    <div><i class="fa-solid fa-fire fa-xs" /> {avg_combo.toLocaleString()}x</div>
                    <div><i class="fa-solid fa-stopwatch fa-xs" /> {secondsToTime(avg_length)}</div>
                    <div><i class="fa-solid fa-music fa-xs" /> {avg_bpm}bpm</div>
                    {avg_mods.map(m => (
                        <div class="tooltip flex items-center justify-center" data-tip={m}>
                            <img src={`/public/img/mods/${m.toLowerCase()}.png`} alt={m} class="h-5" />
                        </div>
                    ))}
                </div>
            </div>
            <div class="flex flex-row gap-2 p-4 rounded-lg bg-base-300">
                <h4>Max PP: {max_pp}pp</h4>
                <h4>Min PP: {min_pp}pp</h4>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg bg-base-300">
                <BarChart
                    labels={grade_labels}
                    data={grade_counts}
                    colors={grade_colors}
                />
                <BarChart
                    labels={hit_labels}
                    data={hit_counts}
                    colors={hit_colors}
                />
            </div>
        </div>
    );
}

export default UserSummaryPanel;
