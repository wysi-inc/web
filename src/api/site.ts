import type { SiteSearch } from "../types/api";
import { osu_fetch } from "./api";

export async function api_site_search(
    query: string,
    token?: string
): Promise<SiteSearch | null> {
    const url = new URL("https://osu.ppy.sh/api/v2/search");
    url.searchParams.append("mode", "user");
    url.searchParams.append("query", query);
    url.searchParams.append("page", "1");
    return await osu_fetch({ url, token });
}
