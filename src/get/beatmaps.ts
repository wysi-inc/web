import type { BeatmapQuery, Beatmapset } from "../types/beatmaps";

export async function getBeatmaps(query: BeatmapQuery): Promise<Beatmapset[]> {

    const url = new URL("https://catboy.best/api/v2/search");
    url.searchParams.set("limit", "50");
    url.searchParams.set("offset", "0");

    if (!query) {
        return await (await fetch(url.toString())).json() as Beatmapset[];
    }

    const title = query.title || "";
    let filters = [
        query.mapper ? `creator=${query.mapper}` : undefined,
        query.bpm_min ? `bpm>=${query.bpm_min}` : undefined,
        query.bpm_max ? `bpm<=${query.bpm_max}` : undefined,
        query.stars_min ? `beatmaps.difficulty_rating>=${query.stars_min}` : undefined,
        query.stars_max ? `beatmaps.difficulty_rating<=${query.stars_max}` : undefined,
        query.length_min ? `beatmaps.total_length>=${query.length_min}` : undefined,
        query.length_max ? `beatmaps.total_length<=${query.length_max}` : undefined,
        query.year_min ? `last_updated>=${new Date(query.year_min).getTime() / 1000}` : undefined,
        query.year_max ? `last_updated<=${new Date(query.year_max).getTime() / 1000}` : undefined,
        query.ar_min ? `beatmaps.ar>=${query.ar_min}` : undefined,
        query.ar_max ? `beatmaps.ar<=${query.ar_max}` : undefined,
        query.cs_min ? `beatmaps.cs>=${query.cs_min}` : undefined,
        query.cs_max ? `beatmaps.cs<=${query.cs_max}` : undefined,
        query.hp_min ? `beatmaps.drain>=${query.hp_min}` : undefined,
        query.hp_max ? `beatmaps.drain<=${query.hp_max}` : undefined,
        query.od_min ? `beatmaps.accuracy>=${query.od_min}` : undefined,
        query.od_max ? `beatmaps.accuracy<=${query.od_max}` : undefined,
    ];

    filters = filters.filter((f) => f);

    const modes: number[] = Object.entries(query).
        filter(([key, value]) => key.startsWith("mode_") && value === "on")
        .map(([key, _]) => {
            switch (key.split("_")[1]) {
                case "osu":
                    return 0;
                case "taiko":
                    return 1
                case "fruits":
                    return 2
                case "mania":
                    return 3
                default:
                    return NaN;
            }
        });

    const status: number[] = Object.entries(query)
        .filter(([key, value]) => key.startsWith("status_") && value === "on")
        .map(([key, _]) => {
            switch (key.split("_")[1]) {
                case "ranked":
                    return 1;
                case "approved":
                    return 2
                case "qualified":
                    return 3
                case "loved":
                    return 4
                case "pending":
                    return 0;
                case "wip":
                    return -1;
                case "graveyard":
                    return -2;
                default:
                    return NaN;
            }
        });

    const limit = 50;
    const offset = query.offset || 0;

    title && url.searchParams.set("q", `${title}${filters.length > 0 ? `[${filters.join(" AND ")}]` : ""}`);
    modes.length > 0 && url.searchParams.set("m", modes.join(","));
    status.length > 0 && url.searchParams.set("status", status.join(","));
    offset && url.searchParams.set("offset", offset.toString());
    limit && url.searchParams.set("limit", limit.toString());

    console.log(url.toString());
    return await (await fetch(url.toString())).json() as Beatmapset[];
}
