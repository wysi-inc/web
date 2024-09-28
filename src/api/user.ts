import type { Mode } from "../types/osu";
import type { UserBasic } from "../types/users";
import { osu_fetch } from "./api";

export async function api_me_details(token?: string): Promise<UserBasic | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/me`);
    return await osu_fetch({ url, token });
}

export async function api_user_details(
    id: number | string,
    mode?: Mode,
    token?: string
): Promise<UserBasic | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/users/${id}${mode ? `/${mode}` : ""}`);
    return await osu_fetch({ url, token });
}


export async function api_user_beatmaps(
    id: number,
    type: "favourite" | "graveyard" | "guest" | "loved" | "most_played" | "nominated" | "pending" | "ranked",
    token?: string
): Promise<UserBasic | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/users/${id}/beatmapsets/${type}`);
    return await osu_fetch({ url, token });
}
const url = new URL(
    "https://osu.ppy.sh/api/v2/users/1/beatmapsets/favourite"
);
