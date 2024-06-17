import type { UserCookie } from "@/src/types/users";
import HxA from "./HxA";

type Props = {
    user: UserCookie;
}
const Logged = (props: Props) => {
    return (
        <div class="dropdown dropdown-end">
            <button tabindex="0" role="button" class="drop-shadow-lg aspect-square shadow-lg btn p-0 btn-ghost">
                <div class="avatar">
                    <div class="size-10 rounded-lg">
                        <img src={props.user.avatar} class="" alt="avatar" />
                    </div>
                </div>
            </button>
            <ul tabindex="0" class="menu menu-sm dropdown-content mt-5 z-50 p-2 shadow-lg bg-base-100 rounded-box w-40">
                <li>
                    <HxA url={`/users/${props.user.id}`} css="btn btn-ghost flex">
                        <i class="fa-solid fa-user" />
                        wysi!profile
                    </HxA>
                </li>
                <li>
                    <a href={`https://osu.ppy.sh/users/${props.user.id}`}
                        target="_blank" rel="noreferrer noopener"
                        class="btn btn-ghost flex">
                        <i class="fa-regular fa-user" />
                        osu!profile
                    </a>
                </li>
                <li>
                    <HxA url="/logout" css="btn btn-ghost flex">
                        <i class="fa-solid fa-right-from-bracket" />
                        logout
                    </HxA>
                </li>
            </ul>
        </div>
    );
}

export default Logged;
