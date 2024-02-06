import type { Mode } from "./osu";

export type BeatmapsetCategory = 'favourite' | 'graveyard' | 'ranked' | 'loved' | 'guest' | 'nominated' | 'pending';
export type BeatmapsetStatus = "ranked" | "approved" | "qualified" | "loved" | "pending" | "wip" | "graveyard";

export type Beatmapset = {
    id: number;
    artist: string;
    artist_unicode: string;
    creator: string;
    source: string;
    tags: string;
    title: string;
    title_unicode: string;
    favourite_count: number;
    hype?: null;
    nsfw: boolean;
    offset: number;
    play_count: number;
    spotlight: boolean;
    status: BeatmapsetStatus;
    track_id?: null;
    user_id: number;
    video: boolean;
    bpm: number;
    can_be_hyped: boolean;
    deleted_at?: null;
    discussion_enabled: boolean;
    discussion_locked: boolean;
    is_scoreable: boolean;
    last_updated: number;
    legacy_thread_url: string;
    nominations_summary: NominationsSummary;
    ranked: number;
    ranked_date: number;
    storyboard: boolean;
    submitted_date: number | string;
    availability: Availability;
    has_favourited: boolean;
    beatmaps: Beatmap[];
    converts?: Beatmap[] | null;
    description: Description;
    genre: GenreOrLanguage;
    language: GenreOrLanguage;
    ratings?: number[] | null;
    related_users?: RelatedUsersEntity[] | null;
    last_checked: number;
    rating: number;
    covers: Covers;
}

export type Beatmap = {
    beatmapset_id: number;
    difficulty_rating: number;
    id: number;
    mode: Mode;
    status: BeatmapsetStatus;
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
    deleted_at?: null;
    drain: number;
    hit_length: number;
    is_scoreable: boolean;
    last_updated: string;
    mode_int: number;
    passcount: number;
    playcount: number;
    ranked: boolean;
    url: string;
    checksum: string;
    failed: number;
    exited: number;
}

export type Covers = {
    cover: string;
    "cover@2x": string;
    card: string;
    "card@2x": string;
    list: string;
    "list@2x": string;
    slimcover: string;
    "slimcover@2x": string;
}

export type Description = {
    description: string;
}

export type GenreOrLanguage = {
    id: number;
    name: string;
}

export type RelatedUsersEntity = {
    id: number;
    username: string;
    country_code: string;
}

export type NominationsSummary = {
    current: number;
    required: number;
}

export type Availability = {
    download_disabled: boolean;
    more_information?: null;
}

export type BeatmapPlays = {
    beatmap_id: number;
    count: number;
    beatmap: Beatmap;
    beatmapset: Beatmapset;
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
    | "Other";

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
    | "Other";

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
    | "favourites_asc";
