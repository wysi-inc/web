import type { Mod, Mode } from "../types/osu";
import type { BeatmapScores, ScoreType } from "../types/score";
import { osu_fetch } from "./api";

export async function api_score_details(id: number, token?: string): Promise<ScoreType | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/scores/${id}`);
    return await osu_fetch({ url, token });
}

export async function api_scores_beatmap(
    id: number,
    obj: {
        mode: Mode,
        mods: Mod[],
        type: "global" | "country" | "friend"
    },
    token?: string): Promise<BeatmapScores | null> {
    const url = new URL(`https://osu.ppy.sh/api/v2/beatmaps/${id}/scores`);
    Object.keys(obj).forEach(key => url.searchParams.append(key, obj[key]));
    return await osu_fetch({ url, token });
}
