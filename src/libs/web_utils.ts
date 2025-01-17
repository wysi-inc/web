import { SUBDIVISION_FLAGS } from "../tasks/files";
import type { Mode } from "../types/osu";
import type { ScoreHitCounts } from "../types/score";
import type { Subdivision, UserSubdivision } from "../types/users";
import { colors } from "./colors";

export function secondsToTime(secs: number): string {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = Math.floor(secs % 60);
    return `${hours > 0 ? hours + "h " : ""}${minutes > 0 ? minutes + "m " : ""}${seconds}s`;
}

export function getGradeLetter(grade: string): string {
    switch (grade.toLowerCase()) {
        case "ssh":
        case "xh":
            return "SS+";
        case "x":
            return "SS";
        case "sh":
            return "S+";
        default:
            return grade.toUpperCase();
    }
}

export function ModeToCode(mode: Mode) {
    switch (mode) {
        case "osu":
            return 0;
        case "taiko":
            return 1;
        case "fruits":
            return 2;
        case "mania":
            return 3;
        default:
            return -1;
    }
}

export function getGradeColor(grade: string): string {
    switch (grade.toLowerCase()) {
        case "x":
        case "ss":
            return colors.grades.x;
        case "xh":
        case "ssh":
            return colors.grades.xh;
        case "sh":
            return colors.grades.sh;
        case "s":
            return colors.grades.s;
        case "a":
            return colors.grades.a;
        case "b":
            return colors.grades.b;
        case "c":
            return colors.grades.c;
        case "d":
            return colors.grades.d;
        default:
            return colors.grades.f;
    }
}

export function getDiffColor(diff: number): string {
    let startColor: string;
    let endColor: string;
    let ratio: number;
    if (diff < 10) {
        startColor = colors.difficulty[Math.floor(diff)];
        endColor = colors.difficulty[Math.ceil(diff)];
        ratio = diff - Math.floor(diff);
    } else {
        startColor = colors.difficulty[10];
        endColor = colors.difficulty[10];
        ratio = 1;
    }
    const startR = parseInt(startColor.slice(1, 3), 16);
    const startG = parseInt(startColor.slice(3, 5), 16);
    const startB = parseInt(startColor.slice(5, 7), 16);
    const endR = parseInt(endColor.slice(1, 3), 16);
    const endG = parseInt(endColor.slice(3, 5), 16);
    const endB = parseInt(endColor.slice(5, 7), 16);
    const r = Math.round(startR + (endR - startR) * ratio)
        .toString(16)
        .padStart(2, "0");
    const g = Math.round(startG + (endG - startG) * ratio)
        .toString(16)
        .padStart(2, "0");
    const b = Math.round(startB + (endB - startB) * ratio)
        .toString(16)
        .padStart(2, "0");
    return `#${r}${g}${b}`;
}

export function isEmpty(obj: any): boolean {
    if (!obj) return true;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === null || obj[key] === undefined || obj[key] === "" || obj[key] === 0 || (Array.isArray(obj[key]) && obj[key].length === 0)) {
                continue;
            } else if (typeof obj[key] === "object") {
                return isEmpty(obj[key]);
            } else {
                return false;
            }
        }
    }
    return true;
}

export async function getSubdivisions(ids: number[]): Promise<UserSubdivision[]> {
    const res = await fetch(`https://osuworld.octo.moe/api/subdiv/users?ids=${ids.map((i) => i).join(",")}`);
    if (!res.ok) return [];
    const data = (await res.json()) as Subdivision[];
    const subdivisionsMap = [];
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const subdivision = SUBDIVISION_FLAGS[user.country_id]?.regions[user.region_id];
        if (!subdivision) continue;
        subdivisionsMap.push({ ...subdivision, code: user.region_id, user_id: user.id });
    }
    return subdivisionsMap;
}

export function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
        throw new Error(msg);
    }
}

export function getFCacc(hits: ScoreHitCounts, mode: Mode) {
    let acc = 0.0;
    switch (mode) {
        case "osu":
            acc =
                (100.0 * (6 * hits.count_300 + 2 * hits.count_100 + hits.count_50)) / (6 * (hits.count_50 + hits.count_100 + hits.count_300 + hits.count_miss));
            break;
        case "taiko":
            acc = (100.0 * (2 * hits.count_300 + hits.count_100)) / (2 * (hits.count_300 + hits.count_100 + hits.count_miss));
            break;
        case "fruits":
            acc =
                (100.0 * (hits.count_300 + hits.count_100 + hits.count_50)) /
                (hits.count_300 + hits.count_100 + hits.count_50 + hits.count_katu + hits.count_miss);
            break;
        case "mania":
            acc =
                (100.0 * (6 * hits.count_geki + 6 * hits.count_300 + 4 * hits.count_katu + 2 * hits.count_100 + hits.count_50)) /
                (6 * (hits.count_50 + hits.count_100 + hits.count_300 + hits.count_miss + hits.count_geki + hits.count_katu));
            break;
    }

    return parseFloat(acc.toFixed(2));
}

export function fixURL(position: number, value: any, url: string) {
    const route = url.split("/");
    route[position] = value;
    return route.join("/");
}
