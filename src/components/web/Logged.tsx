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
                        wysi!profile
                    </HxA>
                </li>
                <li>
                    <a href={`https://osu.ppy.sh/users/${props.user.id}`}
                        target="_blank" rel="noreferrer noopener">
                        osu!profile
                    </a>
                </li>
                <li>
                    <HxA url="/logout">
                        logout
                    </HxA>
                </li>
            </ul>
        </div>
    );
}

export default Logged;
