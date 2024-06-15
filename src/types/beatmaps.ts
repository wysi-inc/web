import type { response as V2Beatmapset } from "osu-api-extended/dist/types/v2_beatmap_set_details";
import type { response as V2Beatmap } from "osu-api-extended/dist/types/v2_beatmap_id_details";
import type { response as V2BeatmapSearch } from "osu-api-extended/dist/types/v2_beatmaps_search";

export type BeatmapsetCategory = 'favourite' | 'graveyard' | 'ranked' | 'loved' | 'guest' | 'nominated' | 'pending';
export type BeatmapsetStatus = "any" | "ranked" | "approved" | "qualified" | "loved" | "pending" | "wip" | "graveyard";

export type BeatmapSort = "title_desc" | "title_asc" | "artist_desc" | "artist_asc" | "difficulty_desc" | "difficulty_asc" | "updated_desc" | "updated_asc" | "ranked_desc" | "ranked_asc" | "rating_desc" | "rating_asc" | "plays_desc" | "plays_asc" | "favourites_desc" | "favourites_asc";

export type BeatmapQuery = {
    title?: string;
    artist?: string;
    mapper?: string;
    bpm_min?: string;
    bpm_max?: string;
    stars_min?: string;
    stars_max?: string;
    length_min?: string;
    length_max?: string;
    year_min?: string;
    year_max?: string;
    ar_min?: string;
    ar_max?: string;
    cs_min?: string;
    cs_max?: string;
    hp_min?: string;
    hp_max?: string;
    od_min?: string;
    od_max?: string;
    mode?: string;
    status?: string;
    offset?: string;
    sorting?: string;
    sorting_title?: string;
}

export type BeatmapSearch = V2BeatmapSearch;

export type Beatmapset = V2Beatmapset;

export type Beatmap = V2Beatmap;

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

export type v1Beatmap = {
    id: {
        set: number;
        diff: number;
    };
    date: {
        submit: string;
        approved: string;
        update: string;
    };
    metadata: {
        artist: {
            original: string;
            unicode: string;
        };
        title: {
            original: string;
            unicode: string;
        };
        creator: {
            id: number;
            name: string;
        };
        favs: number;
        rating: number;
        source: string;
        genre_id: {
            id: number;
            name: string;
        };
        language_id: {
            id: number;
            name: string;
        };
        tags: string;
    };
    status: {
        id: number;
        name: string;
    };
    difficulties: {
        id: number;
        diff: string;
        mode: {
            id: number;
            name: string;
        };
        file_md5: string;
        stats: {
            star: {
                pure: number;
                aim: number;
                speed: number;
            };
            ar: number;
            od: number;
            cs: number;
            hp: number;
            bpm: {
                avg: number;
            };
            combo: number;
            time: {
                full: number;
                drain: number;
            };
            objects: {
                all: number;
                circles: number;
                sliders: number;
                spinners: number;
            };
        };
        plays: number;
        pass: number;
    };
    misc: {
        download_unavailable: boolean;
        audio_unavailable: boolean;
        storyboard: boolean;
        video: boolean;
        packs: string;
        bg: {
            full: string;
            raw: string;
            slim: {
                1: string;
                2: string;
            };
            cover: {
                1: string;
                2: string;
            };
            card: {
                1: string;
                2: string;
            };
            list: {
                1: string;
                2: string;
            };
        };
    };
}
