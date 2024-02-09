import type { response as v2User } from "osu-api-extended/dist/types/v2_user_details";
import type { response as v2Score } from "osu-api-extended/dist/types/v2_scores_user_category";
import type { Medal } from "../models/Medal";

export type User = v2User;
export type Score = v2Score;
export type UserAchievement = {
    achieved_at: Date;
    achievement_id: number;
};

export type UserMedal = Medal & {
    achieved: boolean;
    achieved_at: Date | null;
}

