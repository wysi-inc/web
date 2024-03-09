import { v2 } from "osu-api-extended";
import type { BeatmapQuery, BeatmapSearch, Beatmapset, BeatmapsetStatusQuery } from "../types/beatmaps";
import type { Mode } from "../types/osu";

export async function getBeatmaps(q: BeatmapQuery, cursor_string: string | undefined): Promise<BeatmapSearch | null> {
    const res: BeatmapSearch = (await v2.beatmaps.search({
        query: [
            q.title && q.title,
            q.artist && `artist=${q.artist}`,
            q.mapper && `creator=${q.mapper}`,
            q.bpm_min === "0" ? null : `bpm>=${q.bpm_min}`,
            q.bpm_max === "300" ? null : `bpm<=${q.bpm_max}`,
            q.stars_min === "0" ? null : `stars>=${q.stars_min}`,
            q.stars_max === "10" ? null : `stars<=${q.stars_max}`,
            q.length_min === "0" ? null : `length>=${q.length_min}`,
            q.length_max === "600" ? null : `length<=${q.length_max}`,
            q.year_min === "2007" ? null : `created>=${q.year_min}`,
            q.year_max === new Date().getFullYear().toString() ? null : `created<=${q.year_max}`,
            q.ar_min === "0" ? null : `ar>=${q.ar_min}`,
            q.ar_max === "10" ? null : `ar<=${q.ar_max}`,
            q.cs_min === "0" ? null : `cs>=${q.cs_min}`,
            q.cs_max === "10" ? null : `cs<=${q.cs_max}`,
            q.hp_min === "0" ? null : `hp>=${q.hp_min}`,
            q.hp_max === "10" ? null : `hp<=${q.hp_max}`,
            q.od_min === "0" ? null : `od>=${q.od_min}`,
            q.od_max === "10" ? null : `od<=${q.od_max}`,
        ].filter(Boolean).join(" "),
        sort: "updated_desc",
        section: q.status === "all" ? undefined : q.status as BeatmapsetStatusQuery,
        mode: q.mode === "all" ? undefined : q.mode as Mode,
        cursor_string
    }) as any) as BeatmapSearch;
    if ((res as any).error) {
        return null;
    }
    return res;
}

export async function getBeatmap(id: number): Promise<Beatmapset> {
    return await v2.beatmap.set.details(id.toString());
}
