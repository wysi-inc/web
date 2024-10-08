import UserTopPanel from "./u_panels/UserTopPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import LazyPanel from "./LazyPanel";
import { getUser } from "@/src/db/users/get_user";
import { type Mode, type PanelType } from "../../types/osu";
import Panel from "./Panel";
import UserSetupPanel from "./u_panels/UserSetupPanel";
import Title from "../web/Title";
import UserMedalsPanel from "./u_panels/UserMedalsPanel";
import Report from "../web/Report";
import UserAboutPanel from "./u_panels/UserAboutPanel";
import type { UserCookie } from "@/src/types/users";
import { txt } from "@/src/tasks/files";

async function UserPage(p: {
    logged: UserCookie | null;
    user_id: string;
    mode?: Mode;
    lang: string
}) {

    const user = await getUser(p.user_id, p.mode, p.logged);

    const no_chosen_mode = p.mode === undefined;

    if (!user || (user as any).error) return (
        <div>
            <h2>{txt(p.lang, "alerts.user.user_doesnt_exist")}</h2>
            <span>or maybe the website stopped working, try again in a bit or tell me that its not working on the discord please :( i'll fixit asap</span>
        </div>
    );

    const editable = p.logged?.id === user.id;

    p.mode = user.rank_history?.mode as Mode || "osu";

    const panels: PanelType[] = [
        {
            title: txt(p.lang, "user.sections.history.title"),
            code: "history",
            icon: <i class="fa-solid fa-chart-line" />,
            show_if: true,
            jsx: (
                <UserHistoryPanel
                    db_ranks={user.db_ranks}
                    play_counts={user.monthly_playcounts}
                    replays_watched={user.replays_watched_counts}
                />
            )
        },
        {
            title: txt(p.lang, "user.sections.about"),
            code: "about",
            icon: <i class="fa-solid fa-user" />,
            show_if: user.page?.html !== undefined && user.page.html.length > 0,
            jsx: (<UserAboutPanel html={user.page.html} />)
        },
        {
            title: txt(p.lang, "user.sections.setup.title"),
            code: "setup",
            icon: <i class="fa-solid fa-computer" />,
            show_if: editable || user.db_setup !== undefined,
            manual: true,
            jsx: (<UserSetupPanel lang={p.lang} setup={user.db_setup} page_id={user.id} logged_id={p.logged?.id} />)
        },
        {
            title: "Skins (beta)",
            code: "skins",
            tooltip: "powered by skins.osuck.net",
            icon: <i class="fa-solid fa-palette" />,
            url: `/users/${user.id}/0/panels/skins`,
            manual: true,
            show_if: true
        },
        {
            title: txt(p.lang, "user.sections.year.title"),
            code: "year",
            info: txt(p.lang, "user.sections.year.info"),
            tooltip: "powered by advance.catboy.best",
            icon: <i class="fa-solid fa-calendar-days" />,
            url: `/users/${user.id}/${p.mode}/panels/year`,
            manual: true,
            show_if: true,
        },
        {
            title: txt(p.lang, "user.sections.summary.title"),
            code: "summary",
            icon: <i class="fa-solid fa-newspaper" />,
            info: txt(p.lang, "user.sections.summary.info"),
            url: `/users/${user.id}/${p.mode}/panels/summary`,
            manual: true,
            show_if: true,
        },
        {
            title: txt(p.lang, "user.sections.scores.title"),
            code: "scores",
            icon: <i class="fa-solid fa-flag-checkered" />,
            info: txt(p.lang, "user.sections.scores.info"),
            url: `/users/${user.id}/${p.mode}/panels/scores/best`,
            show_if: true
        },
        {
            title: txt(p.lang, "user.sections.collections.title"),
            code: "collections",
            tooltip: "powered by catboy.best",
            info: txt(p.lang, "user.sections.collections.info"),
            icon: <i class="fa-solid fa-list" />,
            url: `/users/${user.id}/${p.mode}/panels/collections`,
            manual: true,
            show_if: editable || !user.collections == true
        },
        {
            title: txt(p.lang, "user.sections.most"),
            code: "most",
            icon: <i class="fa-solid fa-rotate-left" />,
            url: `/users/${user.id}/0/panels/most`,
            manual: true,
            show_if: true,
        },
        {
            title: txt(p.lang, "user.sections.beatmaps"),
            code: "beatmapsets",
            icon: <i class="fa-solid fa-screwdriver-wrench" />,
            url: `/users/${user.id}/${p.mode}/panels/beatmapsets/favourite`,
            show_if: true
        },
        {
            title: txt(p.lang, "user.sections.medals.title"),
            code: "medals",
            tooltip: "powered by osekai.net",
            icon: <img data-src="/public/img/osekai.svg" class="size-5" alt="osekai" />,
            // url: `/users/${user.id}/0/panels/medals`,
            show_if: user.user_achievements.length > 0,
            jsx: (<UserMedalsPanel lang={p.lang} user_id={user.id} medals={user.user_achievements} />)
        }
    ];

    return (<>
        <Title title={user.username} />
        <UserTopPanel lang={p.lang} user={user} mode={p.mode} editable={editable} />
        <nav class="underline-offset-1 text-neutral-content sticky -mt-8 top-16 bg-base-300 rounded-b-lg text-sm shadow-lg p-2 z-40 flex items-center justify-center flex-row gap-x-6 gap-y-2 flex-wrap">
            <a class="hover:underline" href="#top">{txt(p.lang, "user.sections.top")}</a>
            {panels.map((p) => {
                if (!p.show_if) return <></>;
                return <a class="hover:underline" href={`#${p.code}`}>{p.title}</a>
            })}
        </nav>
        {panels.map((panel) => {
            if (!panel.show_if) return <></>;
            if (panel.url) return (
                <LazyPanel title={panel.title} code={panel.code} icon={panel.icon} manual={panel.manual}
                    url={panel.url} body={panel.body} tooltip={panel.tooltip} info={panel.info} />
            );
            else return (
                <Panel title={panel.title} code={panel.code} icon={panel.icon} tooltip={panel.tooltip} info={panel.info} manual={panel.manual}>
                    {panel.jsx}
                </Panel>
            );
        })}
        <button class="btn btn-warning btn-square fixed bottom-4 right-4"
            onclick="report_modal.showModal()">
            <i class="fa-solid fa-triangle-exclamation" />
        </button>
        <dialog id="report_modal" class="modal">
            <div class="modal-box">
                <form method="dialog">
                    <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 class="text-lg font-bold">Report This User</h3>
                <Report author={p.logged} target={user.id} />
            </div>
        </dialog>
        <script>{`history.replaceState({}, null, '/users/${user.id}${no_chosen_mode ? "" : `/${p.mode}`}');`}</script>
    </>);
}

export default UserPage;
