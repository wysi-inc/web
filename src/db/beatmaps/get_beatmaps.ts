import type { BeatmapQuery, Beatmapset } from "@/src/types/beatmaps";
import { v2 } from "osu-api-extended";

export async function getBeatmaps(q?: BeatmapQuery, offset?: string): Promise<{ sets: Beatmapset[], offset: number }> {
    const url = new URL("https://catboy.best/api/v2/search");
    if (q) {
        let sorting: string;
        if (!q?.sorting || q?.sorting_title === "relevant") {
            sorting = "";
        } else {
            sorting = q.sorting;
        }
        const min_date = new Date();
        min_date.setFullYear(Number(q.year_min));
        const max_date = new Date();
        max_date.setFullYear(Number(q.year_max) + 1);
        const query = [];
        if (q.mapper) {
            query.push(`creator=${q.mapper}`);
        }
        if (q.bpm_min && Number(q.bpm_min) > 0) {
            query.push(`bpm>=${q.bpm_min}`);
        }
        if (q.bpm_max && Number(q.bpm_max) < 300) {
            query.push(`bpm>=${q.bpm_min}`);
        }
        if (q.sr_min && Number(q.sr_min) > 0) {
            query.push(`beatmaps.difficulty_rating>=${q.sr_min}`);
        }
        if (q.sr_max && Number(q.sr_max) < 10) {
            query.push(`beatmaps.difficulty_rating<=${q.sr_max}`);
        }
        if (q.year_min && Number(q.year_min) > 2007) {
            query.push(`submitted_date>=${min_date.getTime()}`);
        }
        if (q.year_max && Number(q.year_max) < new Date().getFullYear()) {
            query.push(`submitted_date<=${max_date.getTime()}`);
        }
        if (q.ar_min && Number(q.ar_min) > 0) {
            query.push(`beatmaps.ar>=${q.ar_min}`);
        }
        if (q.ar_max && Number(q.ar_max) < 10) {
            query.push(`beatmaps.ar<=${q.ar_max}`);
        }
        if (q.cs_min && Number(q.cs_min) > 0) {
            query.push(`beatmaps.cs>=${q.cs_min}`);
        }
        if (q.cs_max && Number(q.cs_max) < 10) {
            query.push(`beatmaps.cs<=${q.cs_max}`);
        }
        if (q.hp_min && Number(q.hp_min) > 0) {
            query.push(`beatmaps.hp>=${q.hp_min}`);
        }
        if (q.hp_max && Number(q.hp_max) < 10) {
            query.push(`beatmaps.hp<=${q.hp_max}`);
        }
        if (q.od_min && Number(q.od_min) > 0) {
            query.push(`beatmaps.od>=${q.od_min}`);
        }
        if (q.od_max && Number(q.od_max) < 10) {
            query.push(`beatmaps.od<=${q.od_max}`);
        }
        let query_string = "";
        if (q.title) {
            query_string += q.title;
        }
        if (query.length > 0) {
            query_string += `[${query.join(" AND ")}]`;
        }
        if (query_string) {
            url.searchParams.set("query", query_string);
        }
        url.searchParams.set("limit", "50");
        url.searchParams.set("offset", offset || "0");
        url.searchParams.set("mode", q.mode || "-1");
        url.searchParams.set("status", q.status || "-3");
        if (sorting) {
            url.searchParams.set("sort", sorting);
        }
    }

    console.log(url);

    const res = await fetch(url.toString());
    if (!res.ok) return { sets: [], offset: 0 };
    const sets = await res.json() as any;
    return { sets, offset: Number(offset) + sets.length };
}

export async function getBeatmapset(id: number): Promise<Beatmapset> {
    return await v2.beatmap.set.details(id.toString());
}
