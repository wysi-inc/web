import { auth } from "osu-api-extended";
import type { UserBasic, UserCookie } from "../types/users";
import type { Jwt } from "../types/osu";
import { User } from "../models/User";
import { env } from "bun";

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

export async function userAuthData(code: string): Promise<{ data: UserBasic, role: string | null | undefined } | undefined> {
    const user_data: UserBasic = await auth.authorize(code, 'osu', env.OSU_ID, env.OSU_SECRET, env.OSU_REDIRECT) as any;
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
