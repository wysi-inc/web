import { OSU_API_TOKEN } from "../tasks/connections";
import { apicall, log } from "../tasks/logs";

export async function osu_fetch(
    url: string,
    method: string = "GET",
    body?: object
): Promise<any | null> {
    try {
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Bearer ${OSU_API_TOKEN}`
        };

        apicall();

        let body_string;
        if (body) {
            body_string = JSON.stringify(body);
        }

        const res = await fetch(url.toString(), { method, headers, body_string });

        if (!res.ok) {
            throw res.text;
        }

        const data = await res.json();
        return data;
    } catch (err) {
        log.error("Error getting data", err);
        return null;
    }
}
