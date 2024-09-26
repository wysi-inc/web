import { v2 } from "osu-api-extended";
import OnlineDot from "../user/u_panels/u_components/OnlineDot";
import Flag from "../user/u_panels/u_components/Flag";
import Link from "./Link";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Clan from "../user/u_panels/u_components/Clan";
import type { Beatmapset } from "@/src/types/beatmaps";

async function SearchResults(p: { query?: string; }) {
    if (!p.query) return <></>;
    const res = await v2.site.search({ query: p.query, mode: "user" });
    const users = res.user.data;
    const response = await v2.beatmaps.search({ query: p.query }) as any;
    const beatmaps = response.beatmapsets as Beatmapset[];
    const LIMIT = 5;

    return (<>
        <div class="flex flex-col gap-2 rounded-lg bg-base-100 p-2">
            <div class="flex flex-row items-center gap-2 px-1">
                <i class="fa-solid fa-user" />
                <h2>Users</h2>
            </div>
            {users.map((u, i) => i < LIMIT ?
                <Link url={`/users/${u.id}`} css="flex flex-row justify-between gap-2 rounded-lg bg-base-300 p-2">
                    <div class="flex flex-row items-center gap-2">
                        <Flag code={u.country_code} static={true} />
                        <SubdivisionFlag user_id={u.id} />
                        <Clan user_id={u.id} />
                        <span>{u.username}</span>
                    </div>
                    <div class="flex justify-center">
                        <OnlineDot size={24} online={u.is_online} />
                    </div>
                </Link> : <></>)}
        </div>
        <div class="flex flex-col gap-2 rounded-lg bg-base-100 p-2">
            <div class="flex flex-row items-center gap-2 px-1">
                <i class="fa-solid fa-music" />
                <h2>Beatmaps</h2>
            </div>
            {beatmaps.map((b, i) => i < LIMIT ?
                <Link url={`/beatmapsets/${b.id}`}>
                    <div class="flex flex-row gap-2 rounded-lg bg-base-300 p-2">
                        <img data-src={`https://b.ppy.sh/thumb/${b.id}l.jpg`} class="max-h-11 max-w-16 rounded-lg" alt="thumbnail" />
                        <div class="flex flex-col">
                            <span class="max-w-80 truncate">{b.title} <span class="text-sm">by {b.artist}</span></span>
                            <span class="max-w-80 truncate text-sm text-base-content text-opacity-60">mapped by {b.creator}</span>
                        </div>
                    </div>
                </Link> : <></>)}
        </div>
    </>);
}



export default SearchResults;
