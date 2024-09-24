import { env } from "bun";
import { auth } from "osu-api-extended";

const Login = ({ t }: any) => {
    const scope_list: any = ["public", "identify", "friends.read"];
    const url = auth.build_url(env.OSU_ID, env.OSU_REDIRECT, scope_list);
    return (
        <a href={url} class="btn btn-ghost" aria-label="login with osu!">
            <span class="hidden lg:inline">{t.nav.log.login}</span>
            <i class="fa-solid fa-right-to-bracket" />
        </a>
    );
}

export default Login;
