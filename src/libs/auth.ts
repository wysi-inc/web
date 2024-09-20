import { auth } from "osu-api-extended";
import type { UserBasic, UserCookie } from "../types/users";
import { osu_id, osu_redirect, osu_secret } from "@/index";
import type { Jwt } from "../types/osu";
import { User } from "../models/User";

export async function userAuthCode(code: string): Promise<any> {
    const res = await fetch("https://osu.ppy.sh/oauth/token", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `client_id=${osu_id}&client_secret=${osu_secret}&code=${code}&grant_type=authorization_code&redirect_uri=${osu_redirect}`
    });

    const data = await res.json();
    return data;
}

export async function userAuthData(code: string): Promise<{ data: UserBasic, role: string | null | undefined } | undefined> {
    const user_data: UserBasic = await auth.authorize(code, 'osu', osu_id, osu_secret, osu_redirect) as any;
    if ((user_data as any).error) return;
    const user = await User.findOne({ user_id: user_data.id });
    return { data: user_data, role: user?.role };
}

export async function verifyUser(jwt?: Jwt, auth?: string): Promise<UserCookie | null> {
    const profile: UserCookie = await jwt?.verify(auth);
    if (!profile) {
        return null;
    }
    return profile;
}
