import type { UserCookie } from "@/src/types/users";
import HxA from "./HxA";
import Login from "./Login";
import Search from "./Search";
import Logged from "./Logged";

type Props = {
    user: UserCookie | null;
}

const Navbar = (props: Props) => {
    return (
        <div class="flex flex-col bg-base-100 shadow-lg sticky top-0 z-50 w-full">
            <nav class="grid grid-cols-3 p-2">
                <div class="flex flex-row items-center justify-start">
                    <div class="dropdown lg:hidden">
                        <button tabindex="0" role="button" class="btn btn-ghost flex items-center justify-center">
                            <i class="fa-solid fa-bars fa-lg" />
                        </button>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-5 z-50 p-2 shadow bg-base-100 rounded-box w-40">
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
                            <div class="divider" />
                            <label class="flex sm:hidden btn btn-ghost flex-row gap-2 justify-between items-center">
                                <i class="fa-solid fa-sun" />
                                <input class="toggle" type="checkbox" checked
                                    data-toggle-theme="dracula,pastel" />
                                <i class="fa-solid fa-moon" />
                            </label>
                            <li>
                                <a href="https://github.com/wysi-inc" target="_blank"
                                    class="flex md:hidden btn btn-ghost">
                                    <i class="fa-brands fa-github fa-lg" />
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/QYVxgS2934" target="_blank"
                                    class="flex md:hidden btn btn-ghost">
                                    <i class="fa-brands fa-discord" />
                                    Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                    <HxA url="/">
                        <div class="hidden sm:flex gap-4 items-center btn btn-ghost px-2 text-xl">
                            <img src="/public/wysi.svg" class="w-8 h-8 rounded-lg drop-shadow-lg shadow-lg" alt="wysi" />
                            <span>wysi</span>
                        </div>
                    </HxA>
                    <div class="hidden lg:flex flex-row text-sm">
                        <HxA url="/">
                            <button class="btn btn-ghost" hx-get="/rankings">
                                Home
                            </button>
                        </HxA>
                        <HxA url="/rankings">
                            <button class="btn btn-ghost" hx-get="/rankings">
                                Rankings
                            </button>
                        </HxA>
                        <HxA url="/beatmaps">
                            <button class="btn btn-ghost" hx-get="/rankings">
                                Beatmaps
                            </button>
                        </HxA>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center">
                    <Search />
                </div>
                <div class="flex flex-row items-center justify-end">
                    <label class="hidden sm:flex btn btn-ghost flex-row gap-2 justify-between items-center">
                        <i class="fa-solid fa-sun" />
                        <input class="toggle" type="checkbox" checked
                            data-toggle-theme="dracula,pastel" />
                        <i class="fa-solid fa-moon" />
                    </label>
                    <div class="hidden md:flex flex-row items-center justify-end">
                        <a href="https://github.com/wysi-inc" target="_blank"
                            class="hidden md:flex btn btn-ghost">
                            <i class="fa-brands fa-github fa-lg" />
                        </a>
                        <a href="https://discord.gg/QYVxgS2934" target="_blank"
                            class="hidden md:flex btn btn-ghost">
                            <i class="fa-brands fa-discord" />
                        </a>
                    </div>
                    {props?.user ?
                        <Logged user={props.user} /> :
                        <Login />
                    }
                </div>
            </nav>
            <div class="h-1">
                <div id="page-loading" class="htmx-indicator bg-accent h-full w-full loading-indicator" />
            </div>
        </div>
    );
}
export default Navbar;
