import type { UserCookie } from "@/src/types/users";
import Login from "./Login";
import Search from "./Search";
import Logged from "./Logged";
import Link from "./Link";
import LanguageSwitcher from "./LanguageSwitcher";
import { txt } from "@/src/tasks/files";

function Navbar(p: { lang: string, user?: UserCookie | null }) {

    const routes = [
        {
            title: txt(p.lang, "nav.home"),
            url: "/",
            icon: <i class="fa-solid fa-house" />,
        },
        {
            title: txt(p.lang, "nav.rankings"),
            url: "/rankings",
            icon: <i class="fa-solid fa-ranking-star" />
        },
        {
            title: txt(p.lang, "nav.beatmaps"),
            url: "/beatmapsets",
            icon: <i class="fa-solid fa-music" />
        },
        {
            title: txt(p.lang, "nav.support"),
            url: "/support",
            icon: <i class="fa-solid fa-heart" />,
            collapsed: true
        },
        {
            title: txt(p.lang, "nav.about"),
            url: "/about",
            icon: <i class="fa-regular fa-circle-question" />,
            collapsed: true
        },
    ];

    return <>
        <nav class="sticky top-0 z-50 flex w-full flex-col bg-base-100 shadow-lg">
            <div class="grid grid-cols-3 p-2 md:grid-cols-5">
                <div class="flex flex-row items-center justify-start md:col-span-2">
                    <details class="dropdown xl:hidden" id="nav_burger">
                        <summary class="btn btn-square btn-ghost">
                            <i class="fa-solid fa-bars fa-lg" />
                        </summary>
                        <ul class="mt-6 menu dropdown-content w-56 bg-base-100 rounded-box z-[1] p-2 shadow">
                            {routes.map(route =>
                                <li onclick="document.getElementById('nav_burger')?.removeAttribute('open')">
                                    <Link url={route.url} css="btn btn-ghost flex flex-row gap-2">
                                        {route.icon}
                                        <span>{route.title}</span>
                                    </Link>
                                </li>
                            )}
                            <div class="divider sm:hidden m-0" />
                            <li class="md:hidden">
                                <button class="btn btn-ghost sm:hidden" aria-label="theme switch" data-toggle-theme="dracula,pastel" data-act-class="ACTIVECLASS">
                                    <i class="fa-solid fa-circle-half-stroke" />
                                    <span>Theme</span>
                                </button>
                            </li>
                            <div class="divider md:hidden m-0" />
                            <li class="md:hidden">
                                <a href="https://github.com/wysi-inc" target="_blank" class="btn btn-ghost" aria-label="Github">
                                    <i class="fa-brands fa-github fa-lg" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                            <li class="md:hidden">
                                <a href="https://discord.gg/QYVxgS2934" target="_blank" class="btn btn-ghost" aria-label="Discord">
                                    <i class="fa-brands fa-discord" />
                                    <span>Discord</span>
                                </a>
                            </li>
                        </ul>
                    </details>
                    <Link url="/" css="btn btn-ghost hidden items-center gap-4 px-2 text-xl sm:flex">
                        <img loading="lazy" src="/public/wysi.svg" class="h-8 w-8 rounded-lg shadow-lg drop-shadow-lg" alt="wysi logo" />
                        <span>wysi</span>
                    </Link>
                    <div class="z-50 hidden flex-row text-sm xl:flex">
                        {routes.map(r =>
                            <Link url={r.url} css="btn btn-ghost">
                                {r.collapsed ? r.icon : r.title}
                            </Link>
                        )}
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center">
                    <Search lang={p.lang} />
                </div>
                <div class="z-50 flex flex-row items-center justify-end md:col-span-2">
                    <a href="https://github.com/wysi-inc" target="_blank"
                        class="btn btn-ghost hidden md:flex" aria-label="Github">
                        <i class="fa-brands fa-github fa-lg" />
                    </a>
                    <a href="https://discord.gg/QYVxgS2934" target="_blank"
                        class="btn btn-ghost hidden md:flex" aria-label="Discord">
                        <i class="fa-brands fa-discord" />
                    </a>
                    <div class="hidden sm:flex">
                        <label class="btn btn-ghost">
                            <button class="hidden" aria-label="theme switch" data-toggle-theme="dracula,pastel" data-act-class="ACTIVECLASS" />
                            <i class="fa-solid fa-circle-half-stroke" />
                        </label>
                    </div>
                    <div class="">
                        <LanguageSwitcher lang={p.lang} />
                    </div>
                    {p.user ?
                        <Logged lang={p.lang} user={p.user} /> :
                        <Login lang={p.lang} />
                    }
                </div>
            </div>
            <div class="h-1">
                <div id="page-loading" class="htmx-indicator loading-indicator h-full w-full bg-accent" />
            </div>
        </nav>
    </>
}
export default Navbar;
