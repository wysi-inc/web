import { getUser } from "@/src/db/users/get_user";
import { txt } from "@/src/tasks/files";
import type { UserCookie } from "@/src/types/users";
import { type Mode, type PanelType } from "../../types/osu";
import Report from "../web/Report";
import Title from "../web/Title";
import LazyPanel from "./LazyPanel";
import Panel from "./Panel";
import UserAboutPanel from "./u_panels/UserAboutPanel";
import UserHistoryPanel from "./u_panels/UserHistoryPanel";
import UserMedalsPanel from "./u_panels/UserMedalsPanel";
import UserSetupPanel from "./u_panels/UserSetupPanel";
import UserTopPanel from "./u_panels/UserTopPanel";

async function UserPage(p: {
    logged: UserCookie | null;
    user_id: string;
    mode?: Mode;
    lang: string
}) {

    const res = await getUser(p.user_id, p.mode, p.logged);

    if (res.error) return (
        <div>
            <h2>{res.data}</h2>
            <span>or maybe the website stopped working, try again in a bit or tell me that its not working on the discord please :( i'll fixit asap</span>
        </div>
    );

    const user = res.data;

    const editable = p.logged?.id === user.id;

    p.mode = user.rank_history?.mode || "osu";

    const panels: PanelType[] = [
        {
            title: txt(p.lang, "user.sections.history.title"),
            code: "history",
            icon: <i class="fa-solid fa-chart-line" />,
            show_if: true,
            tooltip: "Hold ALT and scroll to move",
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
            show_if: editable || !user.skins === false
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
            icon: <img loading="lazy" src="/public/img/osekai.svg" class="size-5" alt="osekai" />,
            // url: `/users/${user.id}/0/panels/medals`,
            show_if: user.user_achievements.length > 0,
            jsx: (<UserMedalsPanel lang={p.lang} user_id={user.id} medals={user.user_achievements} />)
        }
    ];

    // route={`/users/${user.id}${no_chosen_mode ? "" : `/${p.mode}`}`}
    return (<>
        <UserTopPanel lang={p.lang} user={user} mode={p.mode} editable={editable} />
        <nav class="sticky top-16 z-40 -mt-8 flex flex-row flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-b-lg bg-base-300 p-2 text-sm text-neutral-content underline-offset-1 shadow-lg">
            <a class="hover:underline" href="#top">{txt(p.lang, "user.sections.top")}</a>
            {panels.map((p) => {
                if (!p.show_if) return (<></>);
                return <a class="hover:underline" href={`#${p.code}`}>{p.title}</a>
            })}
        </nav>
        {panels.map((panel) => {
            if (!panel.show_if) return (<></>);
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
        <button class="btn btn-square btn-warning sticky bottom-4 right-4" onclick="report_modal.showModal()">
            <i class="fa-solid fa-triangle-exclamation" />
        </button>
        <dialog id="report_modal" class="modal">
            <div class="modal-box">
                <form method="dialog">
                    <button class="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">✕</button>
                </form>
                <h3 class="text-lg font-bold">Report This User</h3>
                <Report author={p.logged} target={user.id} />
            </div>
        </dialog>
        <Title title={user.username} scripts={[
            "https://cdn.jsdelivr.net/npm/sortablejs@latest/Sortable.min.js",
            "https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js",
            "https://cdn.jsdelivr.net/npm/hammerjs@2.0.8/hammer.min.js",
            "https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js",
            "https://cdn.jsdelivr.net/npm/chartjs-plugin-crosshair@2.0.0/dist/chartjs-plugin-crosshair.min.js",
            "/public/js/history.js",
            "/public/js/setup.js",
            "/public/js/choke.js",
            "/public/js/drag.js",
        ]} />
        <script>getUserStuff()</script>
    </>);
}

export default UserPage;
