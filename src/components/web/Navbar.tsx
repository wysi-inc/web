import HxA from "./HxA";
import Search from "./Search";

const Navbar = () => {
    return (
        <div class="flex flex-col bg-base-100 shadow-lg sticky top-0 z-50 w-full">
            <nav class="grid grid-cols-3 p-2">
                <div class="flex flex-row items-center justify-start">
                    <div class="dropdown lg:hidden">
                        <button tabindex="0" role="button" class="btn btn-ghost flex items-center justify-center">
                            <i class="fa-solid fa-bars fa-lg" />
                        </button>
                        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <HxA url="/">
                                    Home
                                </HxA>
                            </li>
                            <li>
                                <HxA url="/rankings">
                                    Rankings
                                </HxA>
                            </li>
                            <li>
                                <HxA url="/beatmaps">
                                    Beatmaps
                                </HxA>
                            </li>
                        </ul>
                    </div>
                    <a class="hidden sm:flex gap-4 items-center btn btn-ghost px-2 text-xl"
                        hx-get="/" hx-target="#main" hx-push-url="true" hx-indicator="#page-loading">
                        <img src="/public/wysi.svg" class="w-8 h-8 rounded-lg drop-shadow-lg shadow-lg" alt="wysi" />
                        <span>wysi</span>
                    </a>
                    <div class="hidden lg:flex flex-row text-sm">
                        <a hx-target="#main" hx-push-url="true" hx-indicator="#page-loading"
                            class="btn btn-ghost" hx-get="/">
                            Home
                        </a>
                        <a hx-target="#main" hx-push-url="true" hx-indicator="#page-loading"
                            class="btn btn-ghost" hx-get="/rankings">
                            Rankings
                        </a>
                        <a hx-target="#main" hx-push-url="true" hx-indicator="#page-loading"
                            class="btn btn-ghost" hx-get="/beatmaps">
                            Beatmaps
                        </a>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-center">
                    <Search />
                </div>
                <div class="flex flex-row items-center justify-end">
                    <a href="https://github.com/wysi-inc" target="_blank"
                        class="hidden md:flex btn btn-ghost">
                        <i class="fa-brands fa-github fa-lg" />
                    </a>
                    <a href="https://discord.gg/QYVxgS2934" target="_blank"
                        class="hidden md:flex btn btn-ghost">
                        <i class="fa-brands fa-discord" />
                    </a>
                    <button class="btn btn-ghost" disabled>
                        <span class="hidden lg:inline">login with osu!</span>
                        <i class="fa-solid fa-right-to-bracket" />
                    </button>
                </div>
            </nav>
            <div class="h-1">
                <div id="page-loading" class="htmx-indicator bg-accent h-full w-full loading-indicator" />
            </div>
        </div>
    );
}
export default Navbar;
