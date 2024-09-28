import { env } from "bun";
import type { Jwt } from "../types/osu";
import type { UserCookie } from "../types/users";
import { UserModel } from "../models/User";
import { api_auth_user } from "../api/auth";
import { api_me_details } from "../api/user";

export async function userAuthCode(code: string): Promise<any> {
    const res = await fetch("https://osu.ppy.sh/oauth/token", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `client_id=${env.OSU_ID}&client_secret=${env.OSU_SECRET}&code=${code}&grant_type=authorization_code&redirect_uri=${env.OSU_REDIRECT}`
    });

    const data = await res.json();
    return data;
}

export async function userAuthData(code: string) {
    const res = await api_auth_user(code);
    if (!res) return;
    const user_data = await api_me_details(res.access_token);
    if (!user_data) return;
    const user = await UserModel.findOne({ user_id: user_data.id });
    return { data: user_data, role: user?.role };
}

export async function verifyUser(jwt?: Jwt, auth?: string): Promise<UserCookie | null> {
    const profile: UserCookie = await jwt?.verify(auth);
    if (!profile) {
        return null;
    }
    return profile;
}
