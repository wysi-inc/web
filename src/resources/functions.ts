import { osu_id, osu_redirect, osu_secret } from "@/index";
import { auth } from "osu-api-extended";
import type { UserBasic, UserCookie } from "../types/users";

export function secondsToTime(secs: number): string {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = Math.round(secs % 60);
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

export async function verifyUser(jwt: any, auth: string | undefined): Promise<UserCookie | null> {

    const profile: UserCookie = await jwt.verify(auth);
    if (!profile) {
        return null;
    }
    return profile;

}

export const jwt_params = () => ({
    secret: process.env.OSU_SECRET as string,
    cookie: "auth",
    cookieOptions: {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/',
    }
})


export function isEmpty(obj: any): boolean {
    if (!obj) return true;
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === null || obj[key] === undefined || obj[key] === "" || obj[key] === 0 || (Array.isArray(obj[key]) && obj[key].length === 0)) {
                continue;
            } else if (typeof obj[key] === 'object') {
                return isEmpty(obj[key]);
            } else {
                return false;
            }
        }
    }
    return true;
}
