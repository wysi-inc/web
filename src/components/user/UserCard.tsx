import { v2 } from "osu-api-extended";
import Flag from "./u_panels/u_components/Flag";
import SubdivisionFlag from "./u_panels/u_components/SubdivisionFlag";
import Clan from "./u_panels/u_components/Clan";
import Link from "../web/Link";
import { apicall } from "@/src/tasks/logs";

type Props = {
    user_id: number
}

async function UserCard(p: Props) {

    const user = await v2.user.details(p.user_id);
    apicall();

    if (!user) return <div>This user doesnt exist</div>;

    return (<>
        <div class="rounded-lg shadow-lg bg-base-100 p-2 flex flex-row gap-2">
            <img data-src={user.avatar_url} alt="pfp" loading="lazy" class="size-12 rounded-lg" />
            <div class="flex flex-row gap-2 items-center">
                <Clan user_id={user.id} />
                <Link url={`/users/${user.id}`} css="text-xl">{user.username}</Link>
                <Flag name={user.country.name} code={user.country.code} />
                <SubdivisionFlag user_id={user.id} />
            </div>
        </div>
    </>);
}

export default UserCard;
