import type { UserTiny } from "./users"

export type ClientAuth = {
    access_token: string,
    expires_in: number,
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
