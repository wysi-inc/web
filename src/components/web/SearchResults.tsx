import { v2 } from "osu-api-extended";
import OnlineDot from "../user/u_panels/u_components/OnlineDot";
import Flag from "../user/u_panels/u_components/Flag";
import Link from "./Link";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Clan from "../user/u_panels/u_components/Clan";

type Props = {
    query: string | undefined;
}

async function SearchResults({ query }: Props) {

    if (!query) return <></>;

    const res = await v2.site.search({
        mode: "user",
        query
    })

    const users = res.user.data;
    const LIMIT = 8;

    return (<>
        {users.map((user, i) => i < LIMIT ?
            <div class="flex flex-row justify-between p-2 gap-2 bg-base-300 rounded-lg">
                <div class="flex flex-row gap-2 items-center">
                    <Flag name={""} code={user.country_code} />
                    <SubdivisionFlag user_id={user.id} />
                    <Clan user_id={user.id} />
                    <Link url={`/users/${user.id}`}>
                        {user.username}
                    </Link>
                </div>
                <div class="flex justify-center">
                    <OnlineDot size={24} online={user.is_online} />
                </div>
            </div> : <></>
        )}
        <script>getUserStuff()</script>
    </>);
}



export default SearchResults;
