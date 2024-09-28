import type { BeatmapExtended, Beatmapset } from "../types/beatmaps";
import { osu_fetch } from "./api";

export async function api_beatmapset_details(id: number, token?: string): Promise<Beatmapset | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/beatmapsets/${id}`);
    return await osu_fetch({ url, token });
}

export async function api_beatmap_details(id: number, token?: string): Promise<BeatmapExtended | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/beatmaps/${id}`);
    return await osu_fetch({ url, token });
}
