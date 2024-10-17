import type { UserTiny } from "./users"
import type { Mode } from "./osu"

export type BeatmapsetCategory = 'favourite' | 'graveyard' | 'ranked' | 'loved' | 'guest' | 'nominated' | 'pending'
export type BeatmapsetStatus = "any" | "ranked" | "approved" | "qualified" | "loved" | "pending" | "wip" | "graveyard"

export type MinoBeatmapSort = "relevant" | "ranked_date" | "title" | "artist" | "play_count" | "rating" | "beatmaps.difficulty_rating" | "favourite_count"

export type BeatmapsetResults = {
    sets: Beatmapset[],
    offset: number
}

export type BeatmapQuery = {
    title?: string,
    artist?: string,
    mapper?: string,
    bpm_min?: string,
    bpm_max?: string,
    sr_min?: string,
    sr_max?: string,
    len_min?: string,
    len_max?: string,
    year_min?: string,
    year_max?: string,
    ar_min?: string,
    ar_max?: string,
    cs_min?: string,
    cs_max?: string,
    hp_min?: string,
    hp_max?: string,
    od_min?: string,
    od_max?: string,
    mode?: number[] | number,
    status?: number[] | number,
    sorting?: string,
}

export type BeatmapsetCount = {
    beatmap_id: number,
    beatmap: BeatmapExtended,
    beatmapset: Beatmapset,
    count: number,
}

export type Beatmap = {
    id: number
    beatmapset_id: number
    difficulty_rating: number
    mode: Mode
    status: BeatmapsetStatus
    total_length: number
    user_id: number
    version: string
    mode_int: number
}

export type BeatmapExtended = Beatmap & {
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: number
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: number
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
}

export type Covers = {
    cover: string
    "cover@2x": string
    card: string
    "card@2x": string
    list: string
    "list@2x": string
    slimcover: string
    "slimcover@2x": string
}

export type Beatmapset = {
    artist: string,
    artist_unicode: string
    covers: Covers
    creator: string
    favourite_count: number
    id: number
    nsfw: boolean
    offset: number
    play_count: number
    submitted_date: Date
    ranked_date: Date
    preview_url: string
    source: string
    status: BeatmapsetStatus
    spotlight: boolean
    title: string
    title_unicode: string
    user_id: number
    video: boolean,
    tags: string,
    beatmaps?: Beatmap[]
    converts?: Beatmap[]
    description?: {
        description: string
    }
    genre?: {
        name: string
    }
    has_favourited?: boolean
    language?: {
        name: string
    }
    nominations?: number[]
    pack_tags?: string[]
    ratings?: any
    related_users?: any
    user?: UserTiny
    track_id?: number
}

export type SongLanguageType =
    | "any"
    | "English"
    | "Chinese"
    | "French"
    | "German"
    | "Italian"
    | "Japanese"
    | "Korean"
    | "Spanish"
    | "Swedish"
    | "Russian"
    | "Polish"
    | "Instrumental"
    | "Unspecified"
    | "Other"

export type SongGenreType =
    | "any"
    | "Video Game"
    | "Anime"
    | "Rock"
    | "Pop"
    | "Novelty"
    | "Hip Hop"
    | "Electronic"
    | "Metal"
    | "Classical"
    | "Folk"
    | "Jazz"
    | "Unspecified"
    | "Other"

export type SongSortType =
    | "title_desc"
    | "title_asc"
    | "artist_desc"
    | "artist_asc"
    | "difficulty_desc"
    | "difficulty_asc"
    | "updated_desc"
    | "updated_asc"
    | "ranked_desc"
    | "ranked_asc"
    | "rating_desc"
    | "rating_asc"
    | "plays_desc"
    | "plays_asc"
    | "favourites_desc"
    | "favourites_asc"

export type v1Beatmap = {
    id: {
        set: number,
        diff: number,
    },
    date: {
        submit: string,
        approved: string,
        update: string,
    },
    metadata: {
        artist: {
            original: string,
            unicode: string,
        },
        title: {
            original: string,
            unicode: string,
        },
        creator: {
            id: number,
            name: string,
        },
        favs: number,
        rating: number,
        source: string,
        genre_id: {
            id: number,
            name: string,
        },
        language_id: {
            id: number,
            name: string,
        },
        tags: string,
    },
    status: {
        id: number,
        name: string,
    },
    difficulties: {
        id: number,
        diff: string,
        mode: {
            id: number,
            name: string,
        },
        file_md5: string,
        stats: {
            star: {
                pure: number,
                aim: number,
                speed: number,
            },
            ar: number,
            od: number,
            cs: number,
            hp: number,
            bpm: {
                avg: number,
            },
            combo: number,
            time: {
                full: number,
                drain: number,
            },
            objects: {
                all: number,
                circles: number,
                sliders: number,
                spinners: number,
            },
        },
        plays: number,
        pass: number,
    },
    misc: {
        download_unavailable: boolean,
        audio_unavailable: boolean,
        storyboard: boolean,
        video: boolean,
        packs: string,
        bg: {
            full: string,
            raw: string,
            slim: {
                1: string,
                2: string,
            },
            cover: {
                1: string,
                2: string,
            },
            card: {
                1: string,
                2: string,
            },
            list: {
                1: string,
                2: string,
            },
        },
    },
}


export type MinoBeatmap = {
    beatmapset_id: number
    difficulty_rating: number
    id: number
    mode: string
    status: string
    total_length: number
    user_id: number
    version: string
    accuracy: number
    ar: number
    bpm: number
    convert: boolean
    count_circles: number
    count_sliders: number
    count_spinners: number
    cs: number
    deleted_at: any
    drain: number
    hit_length: number
    is_scoreable: boolean
    last_updated: number
    mode_int: number
    passcount: number
    playcount: number
    ranked: number
    url: string
    checksum: string
    max_combo: number
    last_checked: number
    set: {
        id: number
        artist: string
        artist_unicode: string
        creator: string
        source: string
        tags: string
        title: string
        title_unicode: string
        next_update: number
        covers: {
            cover: string
            "cover@2x": string
            card: string
            "card@2x": string
            list: string
            "list@2x": string
            slimcover: string
            "slimcover@2x": string
        }
        favourite_count: number
        hype: any
        nsfw: boolean
        offset: number
        play_count: number
        preview_url: string
        spotlight: boolean
        status: BeatmapsetStatus
        track_id: any
        user_id: number
        video: boolean
        bpm: number
        can_be_hyped: boolean
        deleted_at: any
        discussion_enabled: boolean
        discussion_locked: boolean
        is_scoreable: boolean
        last_updated: number
        legacy_thread_url: string
        nominations_summary: {
            current: number
        }
        ranked: number
        ranked_date: number
        storyboard: boolean
        submitted_date: number
        availability: {
            download_disabled: boolean
            more_information: any
        }
        has_favourited: boolean
        beatmaps: Beatmap[]
        description: {
            description: string
        }
        genre: {
            id: number
            name: string
        }
        language: {
            id: number
            name: string
        }
        user: {
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
            profile_colour: any
            username: string
        }
        last_checked: number
        rating: number
    }
}

export type v2Score = {
    accuracy: number,
    best_id: number,
    created_at: string,
    id: number,
    max_combo: number,
    mode: string,
    mode_int: number,
    mods: string[],
    passed: boolean,
    perfect: boolean,
    pp: number,
    rank: string,
    replay: boolean,
    score: number,
    statistics: {
        count_100: number,
        count_300: number,
        count_50: number,
        count_geki: number,
        count_katu: number,
        count_miss: number,
    },
    type: string,
    user_id: number,
    current_user_attributes: {
        pin: {
            is_pinned: boolean,
            score_id: number,
            score_type: string,
        },
    },
}
