import type { CollectionDB, Rank, Setup, UserSocialType } from "../models/User";
import type { Mode } from "./osu";

export type Res = {
    error: boolean,
    msg: string,
    code: number
}

export type UserCookie = {
    id: number,
    username: string,
    role?: "owner" | "admin" | null,
}

export type Skin = {
    id: number,
    name: string,
    modes: string[],
    screenshots: {
        large: string,
        medium: string,
        small: string,
    }[],
    link_to_skin: string
}

export type UserScore = {
    avatar_url: string;
    country_code: string;
    default_group: string;
    id: number;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
    last_visit: string;
    pm_friends_only: boolean;
    profile_colour: string;
    username: string;
    country: {
        code: string;
        name: string;
    };
    cover: {
        custom_url: string;
        url: string;
        id: string;
    };
    groups: {
        colour: string;
        has_listing: boolean;
        has_playmodes: boolean;
        id: number;
        identifier: string;
        is_probationary: boolean;
        name: string;
        short_name: string;
        playmodes?: string;
    }[];
}

export type UserBasic = {
    avatar_url: string
    country_code: string
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_deleted: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: string
    username: string
    cover_url: string
    discord: string
    has_supported: boolean
    interests: any
    join_date: string
    kudosu: Kudosu
    location: any
    max_blocks: number
    max_friends: number
    occupation: any
    playmode: string
    playstyle: string[]
    post_count: number
    profile_hue: number
    profile_order: string[]
    title: any
    twitter: string
    website: string
    country: Country
    cover: Cover
    is_restricted: boolean
    account_history: any[]
    active_tournament_banner: any
    badges: Badge[]
    favourite_beatmapset_count: number
    follower_count: number
    graveyard_beatmapset_count: number
    groups: Group[]
    loved_beatmapset_count: number
    monthly_playcounts: MonthlyPlaycount[]
    page: Page
    pending_beatmapset_count: number
    previous_usernames: any[]
    ranked_beatmapset_count: number
    replays_watched_counts: ReplaysWatchedCount[]
    scores_first_count: number
    statistics: Statistics
    support_level: number
    user_achievements: UserAchievement[]
    rank_history: RankHistory
    rank_highest: {
        date: Date
        rank: number
    }
}

export type Kudosu = {
    total: number
    available: number
}

export type Cover = {
    custom_url: string
    url: string
    id: any
}

export type Badge = {
    awarded_at: string
    description: string
    "image@2x_url": string
    image_url: string
    url: string
}

export type Group = {
    id: number
    identifier: string
    name: string
    short_name: string
    description: string
    colour: string
}

export type MonthlyPlaycount = {
    start_date: string
    count: number
}

export type Page = {
    html: string
    raw: string
}

export type ReplaysWatchedCount = {
    start_date: string
    count: number
}

export type Statistics = {
    level: Level
    pp: number
    global_rank: number
    country_rank: number
    ranked_score: number
    hit_accuracy: number
    play_count: number
    play_time: number
    total_score: number
    total_hits: number
    maximum_combo: number
    replays_watched_by_others: number
    is_ranked: boolean
    grade_counts: GradeCounts
    rank: {
        global: number
        country: number
    }
}

export type UserAchievement = {
    achieved_at: string
    achievement_id: number
}

export type RankHistory = {
    mode: Mode
    data: number[]
}

export type DBRankHistory = {
    global_ranks: Rank[];
    country_ranks: Rank[];
}


export type UserTiny = {
    id: number;
    username: string;
    profile_colour: string;
    avatar_url: string;
    country_code: string;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_online: boolean;
    is_supporter: boolean;
}

export type UserExtended = UserBasic & {
    db_ranks?: DBRankHistory | null,
    db_setup?: Setup | null,
    collections?: CollectionDB[] | null,
    socials?: UserSocialType[] | null,
    skins?: String[] | null,
    wysi_badges?: number[] | null,
    dan?: String | null,
}

export type RankingsType = {
    cursor: Cursor
    ranking: Ranking[]
    total: number
}

export type Cursor = {
    page: number
}

export type Ranking = {
    grade_counts: GradeCounts
    hit_accuracy: number
    is_ranked: boolean
    level: Level
    maximum_combo: number
    play_count: number
    play_time: any
    pp: number
    global_rank: number
    ranked_score: number
    replays_watched_by_others: number
    total_hits: number
    total_score: number
    user: UserBasic
}

export type GradeCounts = {
    a: number
    s: number
    sh: number
    ss: number
    ssh: number
}

export type Level = {
    current: number
    progress: number
}

export type RankingsUser = {
    avatar_url: string
    country: Country
    country_code: string
    cover: UserCover
    default_group: string
    id: number
    is_active: boolean
    is_bot: boolean
    is_online: boolean
    is_supporter: boolean
    last_visit: string
    pm_friends_only: boolean
    profile_colour: any
    username: string
}

export type Country = {
    code: string
    name: string
}

export type UserCover = {
    custom_url: any
    id: string
    url: string
}

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
    user_id: number,
    name: string,
    nativeName: string,
    code: string,
    flag: string
}
