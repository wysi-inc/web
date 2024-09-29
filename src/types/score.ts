import type { BeatmapExtended, Beatmapset } from "./beatmaps";
import type { UserScore } from "./users";

export type BeatmapScores = {
    scores: ScoreType[],
    userScore?: ScoreType
};

export type ScoreType = {
    id: number;
    accuracy: number;
    best_id: number;
    created_at: string;
    max_combo: number;
    mode: string;
    mode_int: number;
    mods: string[];
    passed: boolean;
    perfect: boolean;
    pp: number;
    rank: string;
    replay: boolean;
    score: number;
    statistics: ScoreHitCounts;
    type: string;
    user_id: number;
    current_user_attributes: {
        pin: {
            is_pinned: boolean;
            score_id: number;
            score_type: string;
        };
    };
    beatmap: BeatmapExtended,
    beatmapset: Beatmapset,
    rank_global: number;
    user: UserScore
}

export type ScoreHitCounts = {
    count_geki: number;
    count_300: number;
    count_katu: number;
    count_100: number;
    count_50: number;
    count_miss: number;
}
