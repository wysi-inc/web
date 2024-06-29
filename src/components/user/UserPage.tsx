import type { Mode } from "@/src/types/osu";
import UserTopPanel from "./u_panels/UserTopPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import LazyPanel from "./LazyPanel";
import Panel from "./Panel";
import UserSetupPanel from "./u_panels/UserSetupPanel";
import { getUser } from "@/src/db/users/get_user";

type Props = {
    logged_id: number | undefined;
    id: string;
    mode?: Mode;
}

type Panel = {
    title: string,
    code: string,
    icon: JSX.Element,
    tooltip?: string,
    info?: string,
    show_if: boolean,
} & (
        { jsx: JSX.Element, url?: never } |
        { url: string, body?: object, jsx?: never }
    );

const UserPage = async ({ id, logged_id, mode }: Props) => {

    const user = await getUser(id, mode);

    if (!user || (user as any).error) return <div>User not found</div>;

    const editable = logged_id === user.id;

    mode = user.rank_history?.mode as Mode || "osu";

    const panels: Panel[] = [
        {
            title: "History",
            code: "history",
            icon: <i class="fa-solid fa-chart-line" />,
            show_if: true,
            jsx:
                <UserHistoryPanel
                    db_ranks={user.db_ranks}
                    play_counts={user.monthly_playcounts}
                    replays_watched={user.replays_watched_counts}
                />
        },
        {
            title: "About me",
            code: "about",
            icon: <i class="fa-solid fa-user" />,
            show_if: user.page?.html !== "",
            jsx:
                <div class="p-4 rounded-lg bg-base-300 flex justify-center items-center">
                    <div class="bbcode h-96 overflow-y-scroll grow">
                        {
                            user.page.html
                        }
                    </div>
                </div>
        },
        {
            title: "Setup",
            code: "setup",
            icon: <i class="fa-solid fa-computer" />,
            show_if: user.db_setup !== undefined || editable,
            jsx:
                <UserSetupPanel
                    setup={user.db_setup}
                    logged_id={logged_id}
                    page_id={user.id} />
        },
        {
            title: "Skins",
            code: "skins",
            tooltip: "powered by skins.osuck.net",
            icon: <i class="fa-solid fa-palette" />,
            show_if: false,
            url: `/users/${user.id}/0/panels/skins`
        },
        {
            title: "Summary",
            code: "summary",
            icon: <i class="fa-solid fa-ranking-star" />,
            info: "this is a quick summary of your top 100 plays",
            show_if: true,
            url: `/users/${user.id}/${mode}/panels/summary`
        },
        {
            title: "Scores",
            code: "scores",
            icon: <i class="fa-solid fa-flag-checkered" />,
            info: "hover over a grayed out PP to see the (if FC) PP value",
            show_if: true,
            url: `/users/${user.id}/${mode}/panels/scores/best`
        },
        {
            title: "Beatmaps",
            code: "beatmaps",
            icon: <i class="fa-solid fa-screwdriver-wrench" />,
            show_if: true,
            url: `/users/${user.id}/${mode}/panels/beatmaps/favourite`
        },
        {
            title: "Collections",
            code: "collections",
            tooltip: "powered by catboy.best",
            info: "any beatmaps not present in the osu!website will not be downloaded (ex: osu!trainer, customdiffs, unsubmitted beatmaps...)",
            icon: <i class="fa-solid fa-list" />,
            show_if: true,
            url: `/users/${user.id}/${mode}/panels/collections`
        },
        {
            title: "Most Played",
            code: "most",
            icon: <i class="fa-solid fa-rotate-left" />,
            show_if: true,
            url: `/users/${user.id}/0/panels/most`
        },
        {
            title: "Medals",
            code: "medals",
            tooltip: "powered by osekai.net",
            icon: <img src="/public/img/osekai.svg" class="w-5 h-5" alt="osekai" />,
            url: `/users/${user.id}/0/panels/medals`,
            show_if: true,
            body: { medals: user.user_achievements }
        }
    ];

    const number = 123;

    return (<>
        <UserTopPanel user={user} mode={mode} />
        <div class="underline-offset-1 text-neutral-content sticky top-16 bg-base-300 rounded-lg shadow-lg p-2 z-40 flex flex-row gap-4 flex-wrap justify-around">
            {panels.map((p) => {
                if (!p.show_if) return <></>;
                else return (
                    <a class="hover:underline" href={`#${p.code}`}>{p.title}</a>
                );
            })}
        </div>
        {panels.map((p) => {
            if (!p.show_if) return <></>;
            if (p.url) return (
                <LazyPanel title={p.title} code={p.code} icon={p.icon}
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
