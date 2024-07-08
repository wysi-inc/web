import { v2 } from "osu-api-extended";
import OnlineDot from "../user/u_panels/u_components/OnlineDot";
import Flag from "../user/u_panels/u_components/Flag";
import Link from "./Link";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Clan from "../user/u_panels/u_components/Clan";
import type { Beatmapset } from "@/src/types/beatmaps";

type Props = {
    query: string | undefined;
}

async function SearchResults({ query }: Props) {

    if (!query) return <></>;

    const res = await v2.site.search({ query, mode: "user" });

    const users = res.user.data;
    const response = await v2.beatmaps.search({ query }) as any;
    const beatmaps = response.beatmapsets as Beatmapset[];

    const LIMIT = 5;

    return (<>
        <div class="rounded-lg bg-base-100 flex flex-col p-2 gap-2">
            <div class="px-1 flex flex-row gap-2 items-center">
                <i class="fa-solid fa-user" />
                <h2>Users</h2>
            </div>
            {users.map((u, i) => i < LIMIT ?
                <Link url={`/users/${u.id}`}>
                    <div class="flex flex-row justify-between p-2 gap-2 bg-base-300 rounded-lg">
                        <div class="flex flex-row gap-2 items-center">
                            <Flag name={""} code={u.country_code} />
                            <SubdivisionFlag user_id={u.id} />
                            <Clan user_id={u.id} />
                            <span>{u.username}</span>
                        </div>
                        <div class="flex justify-center">
                            <OnlineDot size={24} online={u.is_online} />
                        </div>
                    </div>
                </Link> : <></>)}
        </div>
        <div class="rounded-lg bg-base-100 flex flex-col p-2 gap-2">
            <div class="px-1 flex flex-row gap-2 items-center">
                <i class="fa-solid fa-music" />
                <h2>Beatmaps</h2>
            </div>
            {beatmaps.map((b, i) => i < LIMIT ?
                <Link url={`/users/${b.user_id}`}>
                    <div class="flex flex-row p-2 gap-2 bg-base-300 rounded-lg">
                        <img src={`https://b.ppy.sh/thumb/${b.id}l.jpg`} class="max-h-11 max-w-16 rounded-lg" alt="thumbnail" loading="lazy" />
                        <div class="flex flex-col">
                            <span class="truncate max-w-80">{b.title} <span class="text-sm">by {b.artist}</span></span>
                            <span class="truncate max-w-80 text-sm text-base-content text-opacity-60">mapped by {b.creator}</span>
                        </div>
                    </div>
                </Link> : <></>)}
        </div>
        <script>getUserStuff()</script>
    </>);
}



export default SearchResults;
