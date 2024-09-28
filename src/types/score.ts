export type BeatmapScores = {
    scores: ScoreType[],
    userScore?: ScoreType
};

export type ScoreType = {
    accuracy: number;
    best_id: number;
    created_at: string;
    id: number;
    max_combo: number;
    mode: string;
    mode_int: number;
    mods: string[];
    passed: boolean;
    perfect: boolean;
    pp: number;
    rank: string;
    replay: boolean;
    total_score: number;
    legacy_total_score: number;
    legacy_perfect: number;
    ended_at: number;
    score: number;
    statistics: {
        count_100: number;
        count_300: number;
        count_50: number;
        count_geki: number;
        count_katu: number;
        count_miss: number;
    };
    type: string;
    user_id: number;
    current_user_attributes: {
        pin: {
            is_pinned: boolean;
            score_id: number;
            score_type: string;
        };
    };
    beatmap: {
        beatmapset_id: number;
        difficulty_rating: number;
        id: number;
        mode: string;
        status: string;
        total_length: number;
        user_id: number;
        version: string;
        accuracy: number;
        ar: number;
        bpm: number;
        convert: boolean;
        count_circles: number;
        count_sliders: number;
        count_spinners: number;
        cs: number;
        deleted_at: string;
        drain: number;
        hit_length: number;
        is_scoreable: boolean;
        last_updated: string;
        mode_int: number;
        passcount: number;
        playcount: number;
        ranked: number;
        url: string;
        checksum: string;
        max_combo: number;
        user: {
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
        };
    };
    beatmapset: {
        artist: string;
        artist_unicode: string;
        covers: {
            cover: string;
            'cover@2x': string;
            card: string;
            'card@2x': string;
            list: string;
            'list@2x': string;
            slimcover: string;
            'slimcover@2x': string;
        };
        creator: string;
        favourite_count: number;
        hype: string;
        id: number;
        nsfw: boolean;
        offset: number;
        play_count: number;
        preview_url: string;
        source: string;
        spotlight: boolean;
        status: string;
        title: string;
        title_unicode: string;
        track_id: string;
        user_id: number;
        video: boolean;
    };
    rank_global: number;
    user: {
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
    };
}
