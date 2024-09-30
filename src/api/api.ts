import { TokenModel } from "../models/Tokens";
import { OSU_API_TOKEN } from "../tasks/connections";
import { apicall, log } from "../tasks/logs";
import type { UserCookie } from "../types/users";

type FetchOptions = {
    url: any;
    method?: string;
    body?: object;
} & (
        | { token?: string }
        | { user?: UserCookie | null }
    );

export async function osu_fetch(o: FetchOptions): Promise<any | null> {
    try {
        let token = "";
        if ("token" in o && o.token) {
            token = o.token;
            log.info("Using parameter token");
        } else if ("user" in o && o.user) {
            const tokenObject = await TokenModel.findOne({ user_id: o.user.id })
            if (tokenObject) {
                token = tokenObject.access_token;
                log.info("Using user token");
            } else {
                token = OSU_API_TOKEN
                log.info("Using default token");
            }
        } else {
            token = OSU_API_TOKEN
            log.info("Using default token");
        }

        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${token}`
        };

        apicall();

        let body_string;
        if (o.body) {
            body_string = JSON.stringify(o.body);
        }

        const res = await fetch(o.url, {
            method: o.method,
            headers,
            body: body_string
        });

        if (!res.ok) throw await res.text();

        const data = await res.json();
        return data;
    } catch (err) {
        log.error(`Error: ${o.url}`, err);
        return null;
    }
}
