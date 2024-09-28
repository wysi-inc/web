import { OSU_API_TOKEN } from "../tasks/connections";
import { apicall, log } from "../tasks/logs";

export async function osu_fetch(p: {
    url: any,
    method?: string,
    body?: object,
    token?: string
}
): Promise<any | null> {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${p.token || OSU_API_TOKEN}`
        };

        apicall();

        let body_string;
        if (p.body) {
            body_string = JSON.stringify(p.body);
        }

        const res = await fetch(p.url, {
            method: p.method,
            headers,
            body: body_string
        });

        if (!res.ok) throw res.text;

        const data = await res.json();
        return data;
    } catch (err) {
        log.error("Error getting data", err);
        return null;
    }
}
