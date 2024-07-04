export type Mode = "osu" | "taiko" | "fruits" | "mania";
export type Mod = "NF" | "EZ" | "HD" | "HR" | "SD" | "DT" | "HT" | "NC" | "FL" | "SO" | "PF" | "4K" | "5K" | "6K" | "7K" | "8K" | "FI" | "RD" | "LM" | "9K" | "10K" | "1K" | "3K" | "2K" | "V2" | "MR";
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
    request: Request,
    jwt: Jwt,
    cookie: Record<string, Cookie<any>>,
    query: {
        code: string,
        state: any,
    },
    params: Record<any, string>
    body: any,
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
