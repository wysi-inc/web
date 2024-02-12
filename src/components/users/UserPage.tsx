import { v2 } from "osu-api-extended";
import { updateUser } from "@/src/resources/db-user";
import type { Mode } from "@/src/types/osu";
import type { User } from "@/src/types/users";
import UserTopPanel from "./u_panels/UserTopPanel";
import UserScoresPanel from "./u_panels/UserScoresPanel";
import UserMedalsPanel from "./u_panels/UserMedalsPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import UserBeatmapsPanel from "./u_panels/UserBeatmapsPanel";
import UserMostPanel from "./u_panels/UserMostPanel";
import UserSetupPanel from "./u_panels/UserSetupPanel";
import UserSummaryPanel from "./u_panels/UserSummaryPanel";
import UserSkinsPanel from "./u_panels/UserSkinsPanel";
import { catalans } from "@/src/resources/constants";

type Props = {
    id: string;
    mode: Mode | undefined;
}

const UserPage = async (props: Props) => {

    const user: User = (await v2.user.details(props.id, props.mode) as User);

    if ("error" in user) return <div>User not found</div>;

    const mode = user.rank_history?.mode as Mode || "osu";
    const defaultCategory = user.scores_pinned_count > 0 ? "pinned" : "best";

    user.db_ranks = await updateUser(
        user.id,
        user.username,
        user?.rank_history?.data || [],
        user?.statistics?.country_rank,
        mode
    );

    if (catalans.includes(user.id)) {
        console.log("Bon dia tu!");
        user.country.code = "CAT";
        user.country.name = "Catalunya";
    }

    return (<>
        <UserTopPanel user={user} />
        <UserSummaryPanel id={user.id} mode={mode} acc={user.statistics.hit_accuracy} />
        <UserSkinsPanel />
        <UserSetupPanel />
        <UserHistoryPanel db_ranks={user.db_ranks} play_counts={user.monthly_playcounts} replays_watched={user.replays_watched_counts} />
        <UserScoresPanel id={user.id} mode={mode} category={defaultCategory} />
        <UserBeatmapsPanel id={user.id} category="favourite" />
        <UserMostPanel id={user.id} />
        <UserMedalsPanel user_medals={user.user_achievements} />
    </>);
}

export default UserPage;
