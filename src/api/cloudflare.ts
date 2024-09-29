import { env } from "bun";

export async function api_cloudflare_stats(): Promise<any | null> {
    const url = new URL(`https://api.cloudflare.com/client/v4/graphql`);

    url.searchParams.set("since", (new Date(Date.now() - 6 * 60 * 60 * 1000)).toISOString()); // 30 days ago
    url.searchParams.set("until", new Date().toISOString());

    const query = `{
        viewer {
            zones(filter: { zoneTag: "${env.CLOUDFLARE_ZONE}" }) {
            }
        }
    }`;

    const res = await fetch(url.toString(), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${env.CLOUDFLARE_TOKEN}`
        },
        body: JSON.stringify({
            query: query,
            variables: {}, // If you have variables, include them here
        }),
    })
    if (!res.ok) {
        console.error(`Error getting cloudflare stats`, await res.text());
        return null;
    }
    return await res.json();
}
