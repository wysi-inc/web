import type { Category, Mode } from "../types/osu";
import type { RankingsType, Res, UserCookie } from "../types/users";
import { osu_fetch } from "./api";

export async function api_ranking(
    mode: Mode,
    category: Category,
    obj: {
        cursor?: string;
        filter?: "all" | "friends";
        country?: string;
        variant?: string;
    },
    user?: UserCookie | null
): Promise<Res<RankingsType>> {
    const url = new URL(`https://osu.ppy.sh/api/v2/rankings/${mode}/${category}`);
    Object.keys(obj).forEach((key) => url.searchParams.append(key, obj[key]));
    return await osu_fetch({ url, user });
}
