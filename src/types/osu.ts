export type Mode = "osu" | "taiko" | "fruits" | "mania";
export type Mod = "1K" | "2K" | "3K" | "4K" | "5K" | "6K" | "7K" | "8K" | "9K" | "AC" | "AD" | "AL" | "AP" | "AS" | "AT" | "BL" | "BR" | "BU" | "CL" | "CN" | "DA" | "DC" | "DF" | "DP" | "DT" | "EZ" | "FL" | "FR" | "GR" | "HD" | "HR" | "HT" | "MG" | "MR" | "MU" | "NC" | "NF" | "NM" | "NS" | "PF" | "RD" | "RP" | "RX" | "SD" | "SG" | "SI" | "SO" | "ST" | "SY" | "TC" | "TD" | "TP" | "TR" | "WD" | "WG" | "WU";

export type Category = "score" | "performance";
export type ScoreCategory = "best" | "recent" | "firsts" | "pinned";
export type BeatmapCategory = "favourite" | "ranked" | "loved" | "pending" | "graveyard";

import { type JWTPayload, type JWSHeaderParameters, type KeyLike } from 'jose';
import type { Static, TSchema } from '@sinclair/typebox';
import type { Cookie } from 'elysia';
type UnwrapSchema<Schema extends TSchema | undefined, Fallback = unknown> = Schema extends TSchema ? Static<NonNullable<Schema>> : Fallback;
export interface JWTPayloadSpec {
    iss?: string;
    sub?: string;
    aud?: string | string[];
    jti?: string;
    nbf?: number;
    exp?: number;
    iat?: number;
}

export type PanelType = {
    title: string,
    code: string,
    icon: JSX.Element,
    tooltip?: string,
    info?: string,
    show_if: boolean,
    manual?: boolean,
} & (
        { jsx: JSX.Element, url?: never } |
        { url: string, body?: string, jsx?: never }
    );

export interface JWTOption<Name extends string | undefined = 'jwt', Schema extends TSchema | undefined = undefined> extends JWSHeaderParameters, Omit<JWTPayload, 'nbf' | 'exp'> {
    name?: Name;
    secret: string | Uint8Array | KeyLike;
    schema?: Schema;
    nbf?: string | number;
    exp?: string | number;
}

export type Jwt = {
    readonly sign: (morePayload: UnwrapSchema<any, Record<string, string | number>> & JWTPayloadSpec) => Promise<string>;
    readonly verify: (jwt?: string) => Promise<false | (UnwrapSchema<any, Record<string, string | number>> & JWTPayloadSpec)>;
}

export type Route = {
    t: any,
    lang: any,
    request: Request,
    jwt: Jwt,
    cookie: Record<string, Cookie<any>>,
    query: {
        code: string,
        state: any,
    },
    params: Record<any, string>
    body: any,
    redirect: any,
    set: {
        headers: Record<string, string> & {
            'Set-Cookie'?: string | string[];
        };
        status?: number | any;
        redirect?: string;
        cookie?: any;
    }
}

export type InspectorRes = {
    user: {
        user_id: number
        username: string
        post_count: number
        comments_count: number
        level: number
        global_rank: number
        pp: number
        ranked_score: number
        playcount: number
        playtime: number
        total_score: number
        total_hits: number
        replays_watched: number
        ss_count: number
        ssh_count: number
        s_count: number
        sh_count: number
        a_count: number
        country_rank: number
        hit_accuracy: number
        b_count: number
        c_count: number
        d_count: number
        total_pp: number
        cover_url: string
        country_ss_rank: number
        country_ss_rank_highest: number
        country_ss_rank_highest_date: string
        global_ss_rank: number
        global_ss_rank_highest: number
        global_ss_rank_highest_date: string
        country_code: string
        country_name: string
        alt_ssh_count: number
        alt_ss_count: number
        alt_s_count: number
        alt_sh_count: number
        alt_a_count: number
        completion: number
    }
    stats: {
        top50s: number
        scoreRank: number
    }
    scoreRankHistory: {
        id: number
        date: string
        osu_id: number
        username: string
        rank: number
        old_rank?: number
        ranked_score: number
        old_ranked_score?: number
    }[],
    completion: any[],
    clan: {
        osu_id: number
        clan_id: number
        join_date: string
        pending: boolean
        clan: {
            id: number
            name: string
            tag: string
            color: string
            creation_date: string
            description: string
            owner: number
            header_image_url: string
            disable_requests: boolean
        }
    }
}

export type AdvanceUser = {
    id: number
    userid: number
    username: string
    username_safe: string
    country: string
    added: string
    restricted: number
    available: number
    rank: {
        start: number
        current: number
        peak: number
    }
    level: number
    progress: number
    playtime: number
    score: number
    hits: number
    pp: {
        ranked: number
        total: number
    }
    accuracy: number
    grades: {
        XH: number
        X: number
        SH: number
        S: number
        A: number
        B: number
        C: number
        D: number
    }
    ranks: {
        ranked: number
        unranked: number
    }
    tags: {
        name: string
        type: number
    }[],
    favourite: {
        mod: string
        mapper: {
            id: number
            name: string
            count: number
        }[],
        songs: {
            id: number
            name: string
            count: number
        }[],
    }
    scores: {
        total: number
        passed: number
        recent: {
            id: number
            user: number
            beatmap: string
            scoreid?: string
            score: number
            accuracy: number
            maxcombo: number
            count50: number
            count100: number
            count300: number
            countmiss: number
            countkatu: any
            countgeki: any
            fc: number
            mods: number
            time: number
            rank: string
            passed: number
            pp: number
            mode: number
            calculated: number
            added: number
            beatmapid: number
            beatmapsetid: number
            playcount: number
            passcount: number
            title: string
            artist: string
            creator: string
            creatorid: number
            version: string
            length: number
            ranked: number
            last_update: number
        }[],
        best: {
            id: number
            user: number
            beatmap: string
            scoreid: string
            score: number
            accuracy: number
            maxcombo: number
            count50: number
            count100: number
            count300: number
            countmiss: number
            countkatu?: number
            countgeki?: number
            fc: number
            mods: number
            time: number
            rank: string
            passed: number
            pp: number
            mode: number
            calculated: number
            added: number
            beatmapid: number
            beatmapsetid: number
            playcount: number
            passcount: number
            title: string
            artist: string
            creator: string
            creatorid: number
            version: string
            length: number
            ranked: number
            last_update: number
        }[],
    }
}
