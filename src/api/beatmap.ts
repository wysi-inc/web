import type { BeatmapExtended, Beatmapset } from "../types/beatmaps";
import type { Res, UserCookie } from "../types/users";
import { osu_fetch } from "./api";

export async function api_beatmapset_details(id: number, user?: UserCookie | null): Promise<Res<Beatmapset>> {
    const url = new URL(`https://osu.ppy.sh/api/v2/beatmapsets/${id}`);
    return await osu_fetch({ url, user });
}

export async function api_beatmap_details(id: number, user?: UserCookie | null): Promise<Res<BeatmapExtended>> {
    const url = new URL(`https://osu.ppy.sh/api/v2/beatmaps/${id}`);
    return await osu_fetch({ url, user });
}

export async function api_beatmapset_search(url: string): Promise<Res<Beatmapset[]>> {
    const res = await fetch(url, {
        headers: { Referer: "https://wysi727.com" },
    });
    if (!res.ok)
        return {
            error: true,
            code: 404,
            data: "Couldn't find any beatmaps",
        };
    const sets = (await res.json()) as Beatmapset[];
    return {
        error: false,
        code: 200,
        data: sets,
    };
}
