import type { response as v2User } from "osu-api-extended/dist/types/v2_user_details";
import type { response as v2Score } from "osu-api-extended/dist/types/v2_scores_user_category";
import type { Rank, Setup } from "../models/User";

export type RankHistory = {
    global_rank_history: Rank[];
    country_rank_history: Rank[];
};

export type User = v2User & {
    db_ranks: RankHistory;
    db_setup: Setup;
};

export type Score = v2Score;
export type UserAchievement = {
    achieved_at: Date;
    achievement_id: number;
};
