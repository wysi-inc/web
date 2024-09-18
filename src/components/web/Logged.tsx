import type { UserCookie } from "@/src/types/users";
import Link from "./Link";

type Props = {
    user: UserCookie,
    t: any
}
const Logged = (p: Props) => {
    return (
        <div class="dropdown dropdown-end">
            <button aria-label="user logged menu" tabindex="0" role="button" class="aspect-square btn p-0 btn-ghost">
                <div class="avatar">
                    <div class="size-10 rounded-lg">
                        <img loading="lazy" src={p.user.avatar} class="" alt="avatar" />
                    </div>
                </div>
            </button>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-5 z-50 p-2 shadow-lg bg-base-100 rounded-box w-40">
                <li>
                    <Link url={`/users/${p.user.id}`} css="btn btn-ghost flex">
                        <i class="fa-solid fa-user" />
                        {p.t.nav.log.wysi}
                    </Link>
                </li>
                <li>
                    <a href={`https://osu.ppy.sh/users/${p.user.id}`}
                        target="_blank" rel="noreferrer noopener"
                        class="btn btn-ghost flex">
                        <i class="fa-regular fa-user" />
                        {p.t.nav.log.osu}
                    </a>
                </li>
                {p.user.admin ?
                    <li>
                        <Link url="/admin" css="btn btn-ghost flex">
                            <i class="fa-solid fa-screwdriver-wrench" />
                            Admin
                        </Link>
                    </li> : <></>
                }
                <li>
                    <Link url="/logout" css="btn btn-ghost flex">
                        <i class="fa-solid fa-right-from-bracket" />
                        {p.t.nav.log.logout}
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Logged;
