import type { Rank, Setup } from "../models/User";
import type { response as v2User } from "osu-api-extended/dist/types/v2_user_details";
import type { response as v2Score } from "osu-api-extended/dist/types/v2_scores_user_category";
import type { response as v2UserList } from "osu-api-extended/dist/types/v2_site_ranking_details";

export type RankHistory = {
    global_rank_history: Rank[];
    country_rank_history: Rank[];
};

export type UserBasic = v2User;

export type User = UserBasic & {
    db_ranks: RankHistory;
    db_setup: Setup;
};

export type UserList = v2UserList;

export type Score = v2Score;
export type UserAchievement = {
    achieved_at: Date;
    achievement_id: number;
};
