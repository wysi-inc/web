import UserTopPanel from "./u_panels/UserTopPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import LazyPanel from "./LazyPanel";
import { getUser } from "@/src/db/users/get_user";
import { type Mode, type PanelType } from "../../types/osu";
import Panel from "./Panel";

type Props = {
    logged_id: number | undefined;
    user_id: string;
    mode?: Mode;
}

const UserPage = async (p: Props) => {

    const user = await getUser(p.user_id, p.mode);

    if (!user || (user as any).error) return <div>User not found</div>;

    const editable = p.logged_id === user.id;

    p.mode = user.rank_history?.mode as Mode || "osu";

    const panels: PanelType[] = [
        {
            title: "History",
            code: "history",
            icon: <i class="fa-solid fa-chart-line" />,
            jsx:
                <UserHistoryPanel
                    db_ranks={user.db_ranks}
                    play_counts={user.monthly_playcounts}
                    replays_watched={user.replays_watched_counts}
                />
        },
        {
            title: "About",
            code: "about",
            icon: <i class="fa-solid fa-user" />,
            jsx:
                <div class="rounded-lg bg-base-300 flex justify-center items-center">
                    {user.page.html ?
                        <div class="bbcode h-96 overflow-y-scroll grow">
                            {
                                user.page.html
                            }
                        </div> : <></>
                    }
                </div>
        },
        {
            title: "Setup",
            code: "setup",
            icon: <i class="fa-solid fa-computer" />,
            url: `/users/${user.id}/0/panels/setup`
        },
        // {
        //     title: "Skins",
        //     code: "skins",
        //     tooltip: "powered by skins.osuck.net",
        //     icon: <i class="fa-solid fa-palette" />,
        //     url: `/users/${user.id}/0/panels/skins`
        // },
        {
            title: "Year",
            code: "year",
            info: `This is a recap of this year so far, the data will be reset at Jaunary 1st ${new Date().getFullYear() + 1}`,
            tooltip: "powered by advance.catboy.best",
            icon: <i class="fa-solid fa-calendar-days" />,
            manual: true,
            url: `/users/${user.id}/0/panels/year`
        },
        {
            title: "Summary",
            code: "summary",
            icon: <i class="fa-solid fa-ranking-star" />,
            info: "this is a quick summary of your top 100 plays",
            url: `/users/${user.id}/${p.mode}/panels/summary`
        },
        {
            title: "Scores",
            code: "scores",
            icon: <i class="fa-solid fa-flag-checkered" />,
            info: "hover over a grayed out PP to see the (if FC) PP value",
            url: `/users/${user.id}/${p.mode}/panels/scores/best`,
        },
        {
            title: "Beatmaps",
            code: "beatmaps",
            icon: <i class="fa-solid fa-screwdriver-wrench" />,
            url: `/users/${user.id}/${p.mode}/panels/beatmaps/favourite`
        },
        {
            title: "Collections",
            code: "collections",
            tooltip: "powered by catboy.best",
            info: "any beatmaps not present in the osu!website will not be downloaded (ex: osu!trainer, customdiffs, unsubmitted beatmaps...)",
            icon: <i class="fa-solid fa-list" />,
            url: `/users/${user.id}/${p.mode}/panels/collections`
        },
        {
            title: "Most Played",
            code: "most",
            icon: <i class="fa-solid fa-rotate-left" />,
            url: `/users/${user.id}/0/panels/most`
        },
        {
            title: "Medals",
            code: "medals",
            tooltip: "powered by osekai.net",
            icon: <img src="/public/img/osekai.svg" class="w-5 h-5" alt="osekai" loading="lazy" />,
            url: `/users/${user.id}/0/panels/medals`,
        }
    ];

    return (<>
        <UserTopPanel user={user} mode={p.mode} />
        <div class="underline-offset-1 text-neutral-content sticky -mt-8 top-16 bg-base-300 md:rounded-lg shadow-lg p-2 z-40 flex items-center justify-center flex-row gap-6 flex-wrap">
            <a class="hover:underline" href="#top">Top</a>
            {panels.map((p) =>
                <a class="hover:underline" href={`#${p.code}`}>{p.title}</a>
            )}
        </div>
        {panels.map((p) => {
            if (p.url) return (
                <LazyPanel title={p.title} code={p.code} icon={p.icon} manual={p.manual}
                    url={p.url} body={p.body} tooltip={p.tooltip} info={p.info} />
            );
            else return (
                <Panel title={p.title} code={p.code} icon={p.icon} tooltip={p.tooltip} info={p.info}>
                    {p.jsx}
                </Panel>
            );
        })}
    </>);
}

export default UserPage;
