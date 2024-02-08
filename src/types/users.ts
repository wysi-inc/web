import type { response as v2User } from "osu-api-extended/dist/types/v2_user_details";
import type { response as v2Score } from "osu-api-extended/dist/types/v2_scores_user_category";

export type User = v2User;
export type Score = v2Score;
export type ScoreCategory = "best" | "recent" | "firsts" | "pinned";
