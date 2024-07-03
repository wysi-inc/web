import { v2 } from "osu-api-extended";
import OnlineDot from "../user/u_panels/u_components/OnlineDot";
import HxA from "./HxA";
import { getSubdivisions } from "@/src/libs/web_utils";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Flag from "../user/u_panels/u_components/Flag";

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

    const subdivisions = await getSubdivisions(users.map(u => u.id));

    function getSubdivisionFlag(user: any) {
        const subdivision = subdivisions.get(user.id);
        if (!subdivision) return;
        return <SubdivisionFlag name={subdivision.name} country_code={user.country_code} subdivision_code={subdivision.code} />;
    }

    return (<>
        {users.map((user, i) => i < LIMIT ?
            <HxA url={`/users/${user.id}`} css="flex hover:bg-base-200 bg-base-200 rounded-lg cursor-pointer">
                <div class="grow flex flex-row justify-between p-2">
                    <div class="grow flex flex-row gap-4">
                        <div class="flex flex-row gap-2 items-center">
                            <Flag name={""} code={user.country_code} />
                            {getSubdivisionFlag(user)}
                        </div>
                        <span class="flex flex-row items-center gap-2">
                            {user.username}
                        </span>
                    </div>
                    <div class="flex justify-center">
                        <OnlineDot size={24} online={user.is_online} />
                    </div>
                </div>
            </HxA> : <></>
        )}
    </>);
}



export default SearchResults;
