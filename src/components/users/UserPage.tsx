import { v2 } from "osu-api-extended";
import type { Mode } from "@/src/types/osu";
import type { User } from "@/src/types/users";
import UserTopPanel from "./u_panels/UserTopPanel";
import UserScoresPanel from "./u_panels/UserScoresPanel";
import UserMedalsPanel from "./u_panels/UserMedalsPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import UserBeatmapsPanel from "./u_panels/UserBeatmapsPanel";

type Props = {
    id: string;
    mode: Mode | undefined;
}

const UserPage = async (props: Props) => {

    const user: User = await v2.user.details(props.id, props.mode);

    if ("error" in user) return <div>User not found</div>;

    const defaultCategory = user.scores_pinned_count > 0 ? "pinned" : "best";

    return (<>
        <UserTopPanel user={user} />
        <UserHistoryPanel user_id={user.id} username={user.username} mode={props.mode as Mode} />
        <UserScoresPanel id={user.id} mode={user.rank_history.mode as Mode} category={defaultCategory} />
        <UserBeatmapsPanel id={user.id} category="favourite" />
        <UserMedalsPanel user_medals={user.user_achievements} />
    </>);
}

export default UserPage;
