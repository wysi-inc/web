import { v2 } from "osu-api-extended";
import Flag from "./u_panels/u_components/Flag";
import SubdivisionFlag from "./u_panels/u_components/SubdivisionFlag";
import Clan from "./u_panels/u_components/Clan";

type Props = {
    user_id: number
}

async function UserCard(p: Props) {

    const user = await v2.user.details(p.user_id);

    if (!user) return <div>This user doesnt exist</div>;

    return (<>
        <div class="rounded-lg shadow-lg bg-base-100 p-2 flex flex-row gap-2">
            <img src={user.avatar_url} alt="pfp" loading="lazy" class="size-12 rounded-lg" />
            <div class="flex flex-row gap-2 items-center">
                <Clan user_id={user.id} />
                <a href={`https://osu.ppy.sh/users/${user.id}`}
                    target="_blank" class="text-xl underline-offset-2 hover:underline">{user.username}</a>
                <Flag name={user.country.name} code={user.country.code} />
                <SubdivisionFlag user_id={user.id} />
            </div>
        </div>
    </>);
}

export default UserCard;
