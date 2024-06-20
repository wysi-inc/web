import type { Subdivision, UserSubdivision } from "../types/users";
import { colors } from "./colors";
import { subdivisionFlags } from "./constants";

export function secondsToTime(secs: number): string {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = Math.floor(secs % 60);
    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
}

export function getGradeLetter(grade: string): string {
    switch (grade.toLowerCase()) {
        case "ssh":
        case "ss":
        case "xh":
            return "X";
        case "sh":
            return "S";
        default:
            return grade.toUpperCase();
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
        startColor = colors.difficulty[10]
        endColor = colors.difficulty[10]
        ratio = 1;
    }
    const startR = parseInt(startColor.slice(1, 3), 16);
    const startG = parseInt(startColor.slice(3, 5), 16);
    const startB = parseInt(startColor.slice(5, 7), 16);
    const endR = parseInt(endColor.slice(1, 3), 16);
    const endG = parseInt(endColor.slice(3, 5), 16);
    const endB = parseInt(endColor.slice(5, 7), 16);
    const r = Math.round(startR + (endR - startR) * ratio).toString(16).padStart(2, "0");
    const g = Math.round(startG + (endG - startG) * ratio).toString(16).padStart(2, "0");
    const b = Math.round(startB + (endB - startB) * ratio).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
}

export function isEmpty(obj: any): boolean {
    if (!obj) return true;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === null || obj[key] === undefined || obj[key] === "" || obj[key] === 0 || (Array.isArray(obj[key]) && obj[key].length === 0)) {
                continue;
            } else if (typeof obj[key] === 'object') {
                return isEmpty(obj[key]);
            } else {
                return false;
            }
        }
    }
    return true;
}

export async function getSubdivision(ids: number[]): Promise<Map<number, UserSubdivision>> {
    const res = await fetch(`https://osuworld.octo.moe/api/subdiv/users?ids=${ids.map(i => i).join(",")}`);
    if (!res.ok) return new Map();
    const data = await res.json() as Subdivision[];
    let subdivisionsMap = new Map<number, UserSubdivision>();
    for (let i = 0; i < data.length; i++) {
        const user = data[i];
        const subdivision = subdivisionFlags[user.country_id]?.regions[user.region_id]
        if (!subdivision) continue;
        subdivisionsMap.set(Number(user.id), subdivision);
    }
    return subdivisionsMap;
}
