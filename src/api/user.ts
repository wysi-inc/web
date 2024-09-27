import type { Mode } from "../types/osu";
import type { UserBasic } from "../types/users";
import { osu_fetch } from "./api";

export async function api_user_details(
    id: number | string,
    mode?: Mode
): Promise<UserBasic | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/users/${id}${mode ? `/${mode}` : ""}`);
    return await osu_fetch(url.toString());
}
