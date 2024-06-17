import type { Mode } from "@/src/types/osu";
import UserTopPanel from "./u_panels/UserTopPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import LazyPanel from "./LazyPanel";
import Panel from "./Panel";
import UserSetupPanel from "./u_panels/UserSetupPanel";
import { getUser } from "@/src/db/users/get_user";
import UserCollectionsPanel from "./u_panels/UserCollectionsPanel";

type Props = {
    logged_id: number | undefined;
    id: string;
    mode?: Mode;
}

const UserPage = async ({ id, logged_id, mode }: Props) => {

    const user = await getUser(id, mode);

    if (!user || (user as any).error) return <div>User not found</div>;

    const editable = logged_id === user.id;

    mode = user.rank_history?.mode as Mode || "osu";

    return <>
        <UserTopPanel user={user} mode={mode} />
        <div class="underline-offset-1 text-neutral-content sticky top-16 bg-base-300 rounded-lg shadow-lg p-2 z-50 flex flex-row justify-around">
            <a class="hover:underline" href="#history">History</a>
            <a class="hover:underline" href="#about">About me</a>
            <a class="hover:underline" href="#setup">Setup</a>
            <a class="hover:underline" href="#skins">Skins</a>
            <a class="hover:underline" href="#summary">Scores Summary</a>
            <a class="hover:underline" href="#scores">Scores</a>
            <a class="hover:underline" href="#beatmaps">Beatmaps</a>
            <a class="hover:underline" href="#most">Most Played</a>
            <a class="hover:underline" href="#medals">Medals</a>
        </div>
        <Panel title="History" code="history" icon={<i class="fa-solid fa-chart-line" />}>
            <UserHistoryPanel
                db_ranks={user.db_ranks}
                play_counts={user.monthly_playcounts}
                replays_watched={user.replays_watched_counts}
            />
        </Panel>
        {user.page?.html ?
            <Panel title="About me" code="about" icon={<i class="fa-solid fa-user" />}>
                <div class="p-4 rounded-lg bg-base-300">
                    <div class="h-96 overflow-y-scroll">
                        {user.page.html}
                    </div>
                </div>
            </Panel> : <></>
        }
        {editable && user.db_setup ?
            <Panel title="Setup" code="setup" icon={<i class="fa-solid fa-computer" />}>
                <UserSetupPanel
                    setup={user.db_setup}
                    logged_id={logged_id}
                    page_id={user.id} />
            </Panel> : <></>
        }
        <LazyPanel code="skins" title="Skins (wip)" icon={<i class="fa-solid fa-palette" />}
            url={`/users/${user.id}/0/panels/skins`} />
        <LazyPanel code="summary" title="Scores Summary" icon={<i class="fa-solid fa-ranking-star" />}
            url={`/users/${user.id}/${mode}/panels/summary`} />
        <LazyPanel code="scores" title="Scores" icon={<i class="fa-solid fa-flag-checkered" />}
            url={`/users/${user.id}/${mode}/panels/scores/best`} />
        <LazyPanel code="beatmaps" title="Beatmaps" icon={<i class="fa-solid fa-screwdriver-wrench" />}
            url={`/users/${user.id}/${mode}/panels/beatmaps/favourite`} />
        <LazyPanel code="collections" title="Collections" icon={<i class="fa-solid fa-list" />}
            url={`/users/${user.id}/${mode}/panels/collections`} />
        <LazyPanel code="most" title="Most Played" icon={<i class="fa-solid fa-rotate-left" />}
            url={`/users/${user.id}/0/panels/most`} />
        <LazyPanel code="medals" title="Medals" icon={<img src="/public/img/osekai.svg" class="w-5 h-5" alt="osekai" />}
            tooltip="powered by osekai.net"
            url={`/users/${user.id}/0/panels/medals`}
            body={{ medals: user.user_achievements }}
        />
    </>
}

export default UserPage;
