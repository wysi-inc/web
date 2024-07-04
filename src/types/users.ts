import type { Rank, Setup, UserFlag } from "../models/User";
import type { response as v2User } from "osu-api-extended/dist/types/v2_user_details";
import type { response as v2Score } from "osu-api-extended/dist/types/v2_scores_user_category";
import type { response as v2UserList } from "osu-api-extended/dist/types/v2_site_ranking_details";

export type UserCookie = {
    id: number,
    username: string,
    avatar: string
}

export type RankHistory = {
    global_ranks: Rank[];
    country_ranks: Rank[];
};

export type UserBasic = v2User;

export type User = UserBasic & {
    db_ranks: RankHistory;
    db_setup: Setup;
    flag: UserFlag;
    groups: {
        colour: string;
        has_listing: boolean;
        has_playmodes: boolean;
        id: number;
        identifier: string;
        is_probationary: boolean;
        name: string;
        short_name: string;
        playmodes: string[];
    }[];
};

export type UserList = v2UserList;

export type Score = v2Score;
export type UserAchievement = {
    achieved_at: Date;
    achievement_id: number;
};

export type ColorCount = {
    count: number;
    color: string;
}

export type Subdivision = {
    id: number
    username: string
    country_id: string
    region_id: string
}

export type UserSubdivision = {
    name: string,
    nativeName: string,
    code: string,
    flag: string
}
