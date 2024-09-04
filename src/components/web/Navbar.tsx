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
            icon: <i class="fa-solid fa-house" />
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
            icon: <i class="fa-solid fa-heart" />
        },
        {
            title: t.nav.about,
            url: "/about",
            icon: <i class="fa-regular fa-circle-question" />
        },
    ];

    return <>
        <nav class="flex flex-col bg-base-100 shadow-lg sticky top-0 z-50 w-full">
            <div class="grid grid-cols-3 p-2">
                <div class="flex flex-row items-center justify-start">
                    <div class="dropdown">
                        <div tabindex="0" role="button" class="btn btn-ghost flex items-center justify-center">
                            <i class="fa-solid fa-bars fa-lg" />
                        </div>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-5 z-50 p-2 shadow bg-base-100 rounded-box w-40">
                            {routes.map(route =>
                                <li>
                                    <Link url={route.url} css="btn btn-ghost">
                                        {route.icon}
                                        {route.title}
                                    </Link>
                                </li>
                            )}
                            <div class="md:hidden divider" />
                            <li class="flex md:hidden">
                                <a href="https://github.com/wysi-inc" target="_blank"
                                    class="btn btn-ghost" aria-label="Github">
                                    <i class="fa-brands fa-github fa-lg" />
                                    GitHub
                                </a>
                            </li>
                            <li class="flex md:hidden">
                                <a href="https://discord.gg/QYVxgS2934" target="_blank"
                                    class="btn btn-ghost" aria-label="Discord">
                                    <i class="fa-brands fa-discord" />
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown lg:hidden">
                    </div>
                    <Link url="/" css="hidden sm:flex gap-4 items-center btn btn-ghost px-2 text-xl">
                        <img loading="lazy" src="/public/wysi.svg" class="w-8 h-8 rounded-lg drop-shadow-lg shadow-lg" alt="wysi logo" />
                        <span>wysi</span>
                    </Link>
                    <div class="hidden lg:flex flex-row text-sm">
                        {routes.map(route =>
                            <Link url={route.url} css="btn btn-ghost">
                                <span class="hidden xl:flex">{route.title}</span>
                                <span class="flex xl:hidden">{route.icon}</span>
                            </Link>
                        )}
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center">
                    <Search t={t} />
                </div>
                <div class="flex flex-row items-center justify-end">
                    <div class="flex">
                        <label class="btn btn-ghost">
                            <button class="hidden" aria-label="theme switch" data-toggle-theme="dracula,pastel" data-act-class="ACTIVECLASS" />
                            <i class="fa-solid fa-circle-half-stroke" />
                        </label>
                    </div>
                    <div class="hidden md:flex flex-row items-center justify-end">
                        <a href="https://github.com/wysi-inc" target="_blank"
                            class="hidden md:flex btn btn-ghost" aria-label="Github">
                            <i class="fa-brands fa-github fa-lg" />
                        </a>
                        <a href="https://discord.gg/QYVxgS2934" target="_blank"
                            class="hidden md:flex btn btn-ghost" aria-label="Discord">
                            <i class="fa-brands fa-discord" />
                        </a>
                    </div>
                    <div class="hidden md:flex flex-row items-center justify-end">
                        <LanguageSwitcher t={t} lang={lang} />
                    </div>
                    {user ?
                        <Logged t={t} user={user} /> :
                        <Login t={t} />
                    }
                </div>
            </div>
            <div class="h-1">
                <div id="page-loading" class="htmx-indicator bg-accent h-full w-full loading-indicator" />
            </div>
        </nav>
    </>
}
export default Navbar;
