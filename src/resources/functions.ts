import { osu_id, osu_redirect, osu_secret } from "@/index";

export function secondsToTime(secs: number): string {
    let hours = Math.floor(secs / 3600);
    let minutes = Math.floor(secs / 60) % 60;
    let seconds = secs % 60;
    return `${hours > 0 ? hours + 'h ' : ''}${minutes > 0 ? minutes + 'm ' : ''}${seconds}s`;
}

export async function userAuthCode(code: string) {

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
