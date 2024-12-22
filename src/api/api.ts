import { sleep } from "bun";
import { TokenModel } from "../models/Tokens";
import { OSU_API_TOKEN } from "../tasks/connections";
import { apicall, log } from "../tasks/logs";
import type { Res, UserCookie } from "../types/users";

type FetchOptions = {
    url: any;
    method?: string;
    body?: object;
} & ({ token?: string } | { user?: UserCookie | null });

let ratelimit: boolean = false;

async function lock_ratelimit(ms: number) {
    ratelimit = true;
    await sleep(ms);
    ratelimit = false;
}

export async function osu_fetch(o: FetchOptions): Promise<Res<any>> {
    if (ratelimit)
        return {
            error: true,
            code: 429,
            data: "Error: Rate limit hit",
        };
    try {
        let token = "";
        if ("token" in o && o.token) {
            token = o.token;
            log.info("Using parameter token");
        } else if ("user" in o && o.user) {
            const tokenObject = await TokenModel.findOne({
                $and: [{ user_id: o.user.id }, { expires_at: { $gt: Math.floor(Date.now() / 1000) } }],
            });
            if (tokenObject) {
                token = tokenObject.access_token;
                log.info("Using user token");
            } else {
                token = OSU_API_TOKEN;
                log.info("Using default token");
            }
        } else {
            token = OSU_API_TOKEN;
            log.info("Using default token");
        }

        const headers = {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
        };

        let body_string;
        if (o.body) {
            body_string = JSON.stringify(o.body);
        }

        const res = await fetch(o.url, {
            method: o.method,
            headers,
            body: body_string,
        });

        apicall();

        if (!res.ok) {
            const err = await res.text();
            if (err.includes("429")) {
                log.error("Error: Rate limit hit");
                lock_ratelimit(Number(res.headers.get("X-RateLimit-Remaining")) || 60000);
                return {
                    error: true,
                    code: 429,
                    data: "Error: Rate limit hit",
                };
            } else {
                log.error(`Error: ${o.url}`, err);
                return {
                    error: true,
                    code: 500,
                    data: "Something went wrong",
                    errorObj: err,
                };
            }
        }
        const data = await res.json();
        return {
            error: false,
            code: 200,
            data: data,
        };
    } catch (err) {
        log.error(`Error: ${o.url}`, err);
        return {
            error: true,
            code: 500,
            data: "Something went wrong",
            errorObj: err,
        };
    }
}
