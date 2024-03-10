import { osu_id, osu_redirect, osu_secret } from "@/index";
import { auth } from "osu-api-extended";
import type { UserBasic, UserCookie } from "../types/users";
import { getUser } from "../get/user";

export function secondsToTime(secs: number): string {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
}

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

export async function userAuthData(code: string): Promise<UserBasic> {
    const user_data: UserBasic = await auth.authorize(code, 'osu', osu_id, osu_secret, osu_redirect) as any;
    return user_data;
}

export async function verifyUser(jwt: any, auth: string): Promise<UserCookie | null> {

    const profile: UserCookie = await jwt.verify(auth);
    if (!profile) {
        return null;
    }

    const user = await getUser(profile.id.toString(), undefined);
    if (!user) {
        return null;
    }

    profile.username = user.username;
    profile.avatar = user.avatar_url;

    return profile;

}
