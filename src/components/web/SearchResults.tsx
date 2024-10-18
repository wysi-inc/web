import { api_site_search } from "@/src/api/site";
import { RESULT_LIMIT } from "@/src/libs/constants";
import Clan from "../user/u_panels/u_components/Clan";
import Flag from "../user/u_panels/u_components/Flag";
import OnlineDot from "../user/u_panels/u_components/OnlineDot";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Link from "./Link";

async function SearchResults(p: { query?: string; }) {
    if (!p.query) return <></>;
    const res = await api_site_search(p.query);
    if (!res) return <></>;
    return (<>
        <div class="flex flex-col gap-2 rounded-lg bg-base-100 p-2">
            <div class="flex flex-row items-center gap-2 px-1">
                <i class="fa-solid fa-user" />
                <h2>Users ({res.user?.total})</h2>
            </div>
            {res.user?.data.map((u, i) => i < RESULT_LIMIT.USER.SEARCH ?
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
    </>);
}



export default SearchResults;
