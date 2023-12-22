export interface usr {
    id: number;
    username: string;
    previous_usernames?: string[];
    country: {
        code: string;
        name: string;
    };
    avatar_url: string;
    cover_url: string;
    title?: string;
    join_date: string;
    playmode: string;
    groups?: {
        colour: string,
        has_listing: boolean,
        has_playmodes: boolean,
        id: number,
        identifier: string,
        is_probationary: boolean,
        name: string,
        short_name: string,
        playmodes: string[]
    }[];
    badges?: {
        awarded_at: string;
        description: string;
        image_url: string;
        url: string;
    }[];
    wysi_badges: string[];
    page: {
        html: string;
        raw: string;
    };
    user_achievements?: {
        achieved_at: string;
        achievement_id: number;
    }[];

    is_online: boolean;
    is_active: boolean;
    is_bot: boolean;
    is_deleted: boolean;
    is_supporter: boolean;  
    support_level: number;
    has_supported: boolean;
    pm_friends_only: boolean;
    last_visit: string;

    profile_order?: (string)[] | null;

    active_tournament_banners?: {
        id: number,
        tournament_id: number,
        image: string,
    }[];

    about: {
        discord: string;
        twitter: string;
        website: string;
        interests: string;
        occupation: string;
        location: string;

        playstyle?: ("tablet" | "mouse" | "display" | "keyboard")[];
    };
    
    statistics: {
        play_time: number;
        play_count: number;
        pp: number;
        ranked_score: number;
        total_score: number;
        hit_accuracy: number;
        maximum_combo: number;
        level: {
            current: number;
            progress: number;
        };
        grade_counts: {
            x: number;
            xh: number;
            s: number;
            sh: number;
            a: number;
        };
        hit_counts: {
            count_100: number;
            count_300: number;
            count_50: number;
            count_miss: number;
        }
    };
    history: {
        monthly_playcounts?: {
            start_date: string;
            count: number;
        }[];
        monthly_replays?: {
            start_date: string;
            count: number;
        }[];
        global_rank?: {
            date: string;
            rank: number;
        }[];
        country_rank?: {
            date: string;
            rank: number;
        }[];
        global_rank_highest: {
            rank: number;
            updated_at: string;
        };
        country_rank_highest: {
            rank: number;
            updated_at: string;
        };
    };
    counts: {
        beatmapset_favourite_count: number;
        beatmapset_ranked_count: number;
        beatmapset_loved_count: number;
        beatmapset_guest_count: number;
        beatmapset_nominated_count: number;
        beatmapset_pending_count: number;
        beatmapset_graveyard_count: number;
        beatmapset_ranked_and_approved_count: number;
        beatmapset_unranked_count: number;

        beatmap_playcounts_count: number;

        scores_best_count: number;
        scores_first_count: number;
        scores_pinned_count: number;
        scores_recent_count: number;

        replays_watched_by_others: number;
        total_hits_count: number;
        follower_count: number;
        mapping_follower_count: number;
        comments_count: number;
        post_count: number;

    }
    setup: {
        keyboard: {
            name: string;
            layout: string;
            keys?: string[];
        };
        tablet: {
            name: string;
            area: {
                w: number;
                h: number;
            };
            position: {
                x: number;
                y: number;
                r: number;
            };
            size: {
                w: number;
                h: number;
            };
        };
        mouse: {
            name: string;
            dpi: number;
        };
        peripherals: {
            monitor: string;
            headphones: string;
            microphone: string;
            tablet: string;
            mouse: string;
            keyboard: string;
            keypad: string;
            mousepad: string;
            chair: string;
            camera: string;
            audio: string;
        };
        computer: {
            cpu: string;
            gpu: string;
            ram: string;
            psu: string;
            storage: string;
            motherboard: string;
            case: string;
        };
    };
    kudosu: {
        available: number;
        total: number;
    };
}