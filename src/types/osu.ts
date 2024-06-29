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
