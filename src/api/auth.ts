import { env } from "bun";
import { osu_fetch } from "./api";
import type { ClientAuth } from "../types/api";


export async function api_auth_client(): Promise<ClientAuth | null> {
    try {
        const url = new URL("https://osu.ppy.sh/oauth/token");
        const headers = {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        };

        let body = `client_id=${env.OSU_ID}&client_secret=${env.OSU_SECRET}&grant_type=client_credentials&scope=public`;

        const res = await osu_fetch(url.toString(), "POST", JSON.stringify(body));

    } catch (err) {
        log.error("Something went wrong when connecting to the osu!API", err);
    }
}

export async function api_auth_user(code: string): Promise<ClientAuth | null> {
    const url = new URL("https://osu.ppy.sh/oauth/token");

    let body = {
        client_id: env.OSU_ID,
        client_secret: env.OSU_SECRET,
        code: code,
        grant_type: "authorization_code",
        redirect_uri: env.OSU_REDIRECT
    }

    const res = await osu_fetch(url.toString(), "POST", JSON.stringify(body));
    if (!res) return null;
    return res;
}
