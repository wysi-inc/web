import type { UserCookie } from "@/src/types/users";
import Link from "./Link";
import { isAdmin } from "@/src/routes/admin";
import Avatar from "../user/Avatar";
import { txt } from "@/src/tasks/files";

function Logged(p: { user: UserCookie, lang: string }) {
    return (
        <details class="dropdown dropdown-end">
            <summary class="btn btn-square btn-ghost">
                <div class="avatar size-10">
                    <Avatar id={p.user.id} />
                </div>
            </summary>
            <ul class="mt-6 menu dropdown-content w-56 bg-base-100 rounded-box z-[1] p-2 shadow">
                <li>
                    <Link url={`/users/${p.user.id}`} css="btn btn-ghost flex">
                        <i class="fa-solid fa-user" />
                        {txt(p.lang, "nav.log.wysi")}
                    </Link>
                </li>
                <li>
                    <a href={`https://osu.ppy.sh/users/${p.user.id}`}
                        target="_blank" rel="noreferrer noopener"
                        class="btn btn-ghost flex">
                        <i class="fa-regular fa-user" />
                        {txt(p.lang, "nav.log.osu")}
                    </a>
                </li>
                {isAdmin(p.user) ?
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
                        {txt(p.lang, "nav.log.logout")}
                    </Link>
                </li>
            </ul>
        </details>
    );
}

export default Logged;
