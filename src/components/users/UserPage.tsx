import { v2 } from "osu-api-extended";
import type { Mode } from "../../types/osu";
import type { response as v2User } from "osu-api-extended/dist/types/v2_user_details";

type Props = {
    id: string;
    mode: Mode;
}

const UserPage = async (props: Props) => {

    const res: any = await v2.user.details(props.id, props.mode);
    if (res.error == null) return <div>User not found</div>;

    const user = res as v2User;

    return (
        <div>
            <div>{user.id}</div>
            <img src={user.avatar_url} />
        </div>
    );
}

export default UserPage;
