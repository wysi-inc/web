import { osu_id, osu_redirect } from "@/index";
import { auth } from "osu-api-extended";

const Login = () => {
    const scope_list: any = ["public", "identify", "friends.read"];
    const url = auth.build_url(osu_id, osu_redirect, scope_list);
    return (
        <a href={url} class="btn btn-ghost" aria-label="login with osu!">
            <span class="hidden lg:inline">login with osu!</span>
            <i class="fa-solid fa-right-to-bracket" />
        </a>
    );
}

export default Login;
