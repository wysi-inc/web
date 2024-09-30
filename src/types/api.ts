import type { UserTiny } from "./users"
import { type JWTPayload, type JWSHeaderParameters, type KeyLike } from 'jose';
import type { Static, TSchema } from '@sinclair/typebox';

export type ClientAuth = {
    access_token: string,
    expires_in: number,
    token_type: string
}

export type UserAuth = {
    access_token: string,
    expires_in: number,
    refresh_token: string
    token_type: string
}

export type SiteSearch = {
    user?: {
        data: UserTiny[],
        total: number
    },
    wiki_page?: {
        data: any[],
        total: number
    }
}

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
