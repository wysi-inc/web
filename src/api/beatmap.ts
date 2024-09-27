import type { Beatmap, Beatmapset } from "../types/beatmaps";
import { osu_fetch } from "./api";

export async function api_beatmapset_details(id: number): Promise<Beatmapset | null> {
    const url = new URL("https://osu.ppy.sh/api/v2/beatmapsets/lookup");
    url.searchParams.append("id", String(id));
    return await osu_fetch(url.toString());
}

export async function api_beatmap_details(id: number): Promise<Beatmap | null> {
    const url = new URL("https://osu.ppy.sh/api/v2/beatmaps/lookup");
    url.searchParams.append("id", String(id));
    return await osu_fetch(url.toString());
}
