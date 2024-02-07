import Search from "./Search";

const Navbar = () => {
    return (
        <nav class="navbar bg-base-100 shadow-lg">
            <div class="navbar-start">
                <div class="dropdown">
                    <button tabindex="0" role="button" class="btn btn-ghost btn-circle flex items-center justify-center">
                        <i class="fa-solid fa-bars fa-lg" />
                    </button>
                    <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a hx-target="#main" hx-push-url="true" hx-post="/" >Home</a></li>
                        <li><a hx-target="#main" hx-push-url="true" hx-post="/rankings" >Rankings</a></li>
                        <li><a hx-target="#main" hx-push-url="true" hx-post="/beatmaps" >Beatmaps</a></li>
                    </ul>
                </div>
                <a class="btn btn-ghost text-xl">wysi</a>
            </div>
            <div class="navbar-center">
                <Search />
            </div>
            <div class="navbar-end">
                <a href="https://github.com/wysi-inc" target="_blank" class="btn btn-ghost btn-circle">
                    <i class="fa-brands fa-github fa-lg" />
                </a>
                <button class="btn btn-ghost btn-circle">
                    <div class="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span class="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </nav>
    );
}
export default Navbar;
