import { env } from "bun";
import { osu_fetch } from "./api";
import type { ClientAuth } from "../types/api";
import { log } from "../tasks/logs";


export async function api_auth_client(): Promise<ClientAuth | null> {
    try {
        const url = new URL("https://osu.ppy.sh/oauth/token");
        let body = {
            client_id: env.OSU_ID,
            client_secret: env.OSU_SECRET,
            grant_type: "client_credentials",
            scope: "public"
        };
        return await osu_fetch({ url, method: "POST", body });
    } catch (err) {
        log.error("Something went wrong when connecting to the osu!API", err);
        return null;
    }
}

export async function api_auth_user(code: string): Promise<ClientAuth | null> {
    try {
        const url = new URL("https://osu.ppy.sh/oauth/token");

        let body = {
            client_id: env.OSU_ID,
            client_secret: env.OSU_SECRET,
            code: code,
            grant_type: "authorization_code",
            redirect_uri: env.OSU_REDIRECT
        }

        return await osu_fetch({ url, method: "POST", body });
    } catch (err) {
        log.error("Something went wrong when connecting to the osu!API", err);
        return null;
    }
}
