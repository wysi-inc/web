import { getUser } from "@/src/get/user";
import type { Mode } from "@/src/types/osu";
import UserTopPanel from "./u_panels/UserTopPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import LazyPanel from "./LazyPanel";
import Panel from "./Panel";
import UserSetupPanel from "./u_panels/UserSetupPanel";

type Props = {
    logged_id: number | undefined;
    id: string;
    mode?: Mode;
}

const UserPage = async ({ id, logged_id, mode }: Props) => {

    const user = await getUser(id, mode);

    if (!user || (user as any).error) return <div>User not found</div>;

    mode = user.rank_history?.mode as Mode || "osu";
    const defaultCategory = user.scores_pinned_count > 0 ? "pinned" : "best";

    return (<>
        <UserTopPanel user={user} />
        <Panel title="History" icon={<i class="fa-solid fa-chart-line" />}>
            <UserHistoryPanel
                db_ranks={user.db_ranks}
                play_counts={user.monthly_playcounts}
                replays_watched={user.replays_watched_counts}
            />
        </Panel>
        <Panel title="About me" icon={<i class="fa-solid fa-user" />}>
            <div class="h-96 overflow-y-scroll">
                {user.page.html}
            </div>
        </Panel>
        <Panel title="Setup (wip)" icon={<i class="fa-solid fa-computer" />}>
            <UserSetupPanel
                setup={user.db_setup}
                logged_id={logged_id}
                page_id={user.id} />
        </Panel>
        <LazyPanel code="skins" title="Skins (wip)" icon={<i class="fa-solid fa-palette" />}
            url={`/users/${user.id}/0/panels/skins`} />
        <LazyPanel code="summary" title="Scores Summary" icon={<i class="fa-solid fa-ranking-star" />}
            url={`/users/${user.id}/${mode}/panels/summary`} />
        <LazyPanel code="scores" title="Scores" icon={<i class="fa-solid fa-flag-checkered" />}
            url={`/users/${user.id}/${mode}/panels/scores/${defaultCategory}`} />
        <LazyPanel code="beatmaps" title="Beatmaps" icon={<i class="fa-solid fa-screwdriver-wrench" />}
            url={`/users/${user.id}/${mode}/panels/beatmaps/favourite`} />
        <LazyPanel code="most" title="Most Played" icon={<i class="fa-solid fa-rotate-left" />}
            url={`/users/${user.id}/0/panels/most`} />
        <LazyPanel code="medals" title="Medals" icon={<img src="/public/img/osekai.svg" class="w-5 h-5" alt="osekai" />}
            tooltip="powered by osekai.net"
            url={`/users/${user.id}/0/panels/medals`}
            body={{ medals: user.user_achievements }}
        />
    </>);
}

export default UserPage;
