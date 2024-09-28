import type { Beatmap, Beatmapset } from "../types/beatmaps";
import { osu_fetch } from "./api";

export async function api_beatmapset_details(id: number, token?: string): Promise<Beatmapset | null> {
    const url = new URL("https://osu.ppy.sh/api/v2/beatmapsets/lookup");
    url.searchParams.append("id", String(id));
    const res = await osu_fetch({ url, token });
    if (!res) return null;
    return res as Beatmapset;
}

export async function api_beatmap_details(id: number, token?: string): Promise<Beatmap | null> {
    const url = new URL("https://osu.ppy.sh/api/v2/beatmaps/lookup");
    url.searchParams.append("id", String(id));
    const res = await osu_fetch({ url, token });
    if (!res) return null;
    return res as Beatmap;
}
