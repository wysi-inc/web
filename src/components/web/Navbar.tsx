import type { UserCookie } from "@/src/types/users";
import HxA from "./HxA";
import Login from "./Login";
import Search from "./Search";
import Logged from "./Logged";

type Props = {
    user: UserCookie | null;
}

const Navbar = ({ user }: Props) => {
    return <>
        <nav class="flex flex-col bg-base-100 shadow-lg sticky top-0 z-50 w-full">
            <div class="grid grid-cols-3 p-2">
                <div class="flex flex-row items-center justify-start">
                    <div class="dropdown lg:hidden">
                        <button tabindex="0" role="button" class="btn btn-ghost flex items-center justify-center" aria-label="dropdown menu">
                            <i class="fa-solid fa-bars fa-lg" />
                        </button>
                        <ul class="menu menu-sm dropdown-content mt-5 z-50 p-2 shadow bg-base-100 rounded-box w-40">
                            <li>
                                <HxA url="/" css="btn btn-ghost">
                                    Home
                                </HxA>
                            </li>
                            <li>
                                <HxA url="/rankings" css="btn btn-ghost">
                                    Rankings
                                </HxA>
                            </li>
                            <li>
                                <HxA url="/beatmaps" css="btn btn-ghost">
                                    Beatmaps
                                </HxA>
                            </li>
                            <li>
                                <HxA url="/about" css="btn btn-ghost">
                                    About
                                </HxA>
                            </li>
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
                    <HxA url="/" css="hidden sm:flex gap-4 items-center btn btn-ghost px-2 text-xl">
                        <img src="/public/wysi.svg" class="w-8 h-8 rounded-lg drop-shadow-lg shadow-lg" alt="wysi logo" />
                        <span>wysi</span>
                    </HxA>
                    <div class="hidden lg:flex flex-row text-sm">
                        <HxA url="/" css="btn btn-ghost">
                            Home
                        </HxA>
                        <HxA url="/rankings" css="btn btn-ghost">
                            Rankings
                        </HxA>
                        <HxA url="/beatmaps" css="btn btn-ghost">
                            Beatmaps
                        </HxA>
                        <HxA url="/about" css="btn btn-ghost">
                            About
                        </HxA>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center">
                    <Search />
                </div>
                <div class="flex flex-row items-center justify-end">
                    <div class="flex">
                        <label class="btn btn-ghost swap swap-rotate">
                            <input type="checkbox" class="theme-controller" value="pastel" />
                            <i class="swap-on fa-solid fa-sun" />
                            <i class="swap-off fa-solid fa-moon" />
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
                    {user ?
                        <Logged user={user} /> :
                        <Login />
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
