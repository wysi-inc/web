import { v2 } from "osu-api-extended";
import type { Mode } from "@/src/types/osu";
import type { User } from "@/src/types/users";
import UserTopPanel from "./u_panels/UserTopPanel";
import UserScoresPanel from "./u_panels/UserScoresPanel";

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
        <div class="rounded-lg bg-base-200 p-4">
            <div role="tablist" class="tabs tabs-boxed bg-base-300">
                <button role="tab" class="tab tab-active">Global Rank</button>
                <button role="tab" class="tab">Country Rank</button>
                <button role="tab" class="tab">Play Count</button>
                <button role="tab" class="tab">Replays Watched</button>
            </div>
        </div>
        <UserScoresPanel id={user.id} mode={user.rank_history.mode as Mode} category={defaultCategory} />
    </>);
}

export default UserPage;
