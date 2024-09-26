import type { UserCookie } from "@/src/types/users";
import Login from "./Login";
import Search from "./Search";
import Logged from "./Logged";
import Link from "./Link";
import LanguageSwitcher from "./LanguageSwitcher";

type Props = {
    user: UserCookie | null,
    t: any,
    lang: any
}

const Navbar = ({ lang, t, user }: Props) => {

    const routes = [
        {
            title: t.nav.home,
            url: "/",
            icon: <i class="fa-solid fa-house" />,
        },
        {
            title: t.nav.rankings,
            url: "/rankings",
            icon: <i class="fa-solid fa-ranking-star" />
        },
        {
            title: t.nav.beatmaps,
            url: "/beatmapsets",
            icon: <i class="fa-solid fa-music" />
        },
        {
            title: t.nav.support,
            url: "/support",
            icon: <i class="fa-solid fa-heart" />,
            collapsed: true
        },
        {
            title: t.nav.about,
            url: "/about",
            icon: <i class="fa-regular fa-circle-question" />,
            collapsed: true
        },
    ];

    return <>
        <nav class="sticky top-0 z-50 flex w-full flex-col bg-base-100 shadow-lg">
            <div class="grid grid-cols-3 p-2 md:grid-cols-5">
                <div class="flex flex-row items-center justify-start md:col-span-2">
                    <div class="dropdown xl:hidden">
                        <div tabindex="0" role="button" class="btn btn-ghost flex items-center justify-center">
                            <i class="fa-solid fa-bars fa-lg" />
                        </div>
                        <ul tabindex="0" class="dropdown-content menu menu-sm z-50 mt-5 w-40 rounded-box bg-base-100 p-2 shadow">
                            {routes.map(route =>
                                <li>
                                    <Link url={route.url} css="btn btn-ghost">
                                        {route.icon}
                                        {route.title}
                                    </Link>
                                </li>
                            )}
                            <div class="divider flex sm:hidden" />
                            <label class="btn btn-ghost sm:hidden">
                                <button class="hidden" aria-label="theme switch" data-toggle-theme="dracula,pastel" data-act-class="ACTIVECLASS" />
                                <i class="fa-solid fa-circle-half-stroke" />
                                Theme
                            </label>
                            <div class="divider flex md:hidden" />
                            <li class="md:hidden">
                                <a href="https://github.com/wysi-inc" target="_blank" class="btn btn-ghost" aria-label="Github">
                                    <i class="fa-brands fa-github fa-lg" />
                                    GitHub
                                </a>
                            </li>
                            <li class="md:hidden">
                                <a href="https://discord.gg/QYVxgS2934" target="_blank" class="btn btn-ghost" aria-label="Discord">
                                    <i class="fa-brands fa-discord" />
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown lg:hidden">
                    </div>
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
                    <Search t={t} />
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
                        <LanguageSwitcher t={t} lang={lang} />
                    </div>
                    {user ?
                        <Logged t={t} user={user} /> :
                        <Login t={t} />
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
