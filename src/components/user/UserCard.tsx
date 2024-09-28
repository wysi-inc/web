import Flag from "./u_panels/u_components/Flag";
import SubdivisionFlag from "./u_panels/u_components/SubdivisionFlag";
import Clan from "./u_panels/u_components/Clan";
import Link from "../web/Link";
import { api_user_details } from "@/src/api/user";

type Props = {
    user_id: number
}

async function UserCard(p: Props) {

    const user = await api_user_details(p.user_id);
    if (!user) return <div>This user doesnt exist</div>;

    return (<>
        <div class="rounded-lg shadow-lg bg-base-100 p-2 flex flex-row gap-2">
            <img data-src={user.avatar_url} alt="pfp" loading="lazy" class="size-10 rounded-lg" />
            <div class="flex flex-row gap-2 items-center">
                <Flag name={user.country.name} code={user.country.code} />
                <SubdivisionFlag user_id={user.id} />
                <Clan user_id={user.id} />
                <Link url={`/users/${user.id}`} css="text-xl">{user.username}</Link>
            </div>
        </div>
    </>);
}

export default UserCard;
