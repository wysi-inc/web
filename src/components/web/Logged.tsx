import type { UserCookie } from "@/src/types/users";
import HxA from "./HxA";

type Props = {
    user: UserCookie;
}
const Logged = (props: Props) => {
    return (
        <HxA url={`/users/${props.user.id}`}>
            <div class="btn btn-ghost pt-0 flex flex-row gap-2 items-center">
                <span>{props.user.username}</span>
                <img src={props.user.avatar} class="w-8 h-8 rounded-lg drop-shadow-lg shadow-lg" alt="avatar" />
            </div>
        </HxA>
    );
}

export default Logged;
