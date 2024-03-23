import type { UserCookie } from "@/src/types/users";
import HxA from "./HxA";

type Props = {
    user: UserCookie;
}
const Logged = (props: Props) => {
    return (
        <div class="dropdown dropdown-end">
            <button tabindex="0" role="button" class="btn btn-ghost pt-0 flex flex-row gap-2 items-center">
                <span>{props.user.username}</span>
                <img src={props.user.avatar} class="w-8 h-8 rounded-lg drop-shadow-lg shadow-lg" alt="avatar" />
            </button>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <HxA url={`/users/${props.user.id}`}>
                        <span class="p-1">
                            wysi!profile
                        </span>
                    </HxA>
                </li>
                <li>
                    <a href={`https://osu.ppy.sh/users/${props.user.id}`}
                        target="_blank" rel="noreferrer noopener" class="p-1">
                        osu!profile
                    </a>
                </li>
                <li>
                    <HxA url="/logout">
                        <span class="p-1">
                            logout
                        </span>
                    </HxA>
                </li>
            </ul>
        </div>
    );
}

export default Logged;
