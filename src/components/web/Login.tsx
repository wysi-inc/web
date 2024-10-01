import { txt } from "@/src/tasks/files";
import { env } from "bun";

function Login(p: { lang: string }) {
    const url = `https://osu.ppy.sh/oauth/authorize?client_id=${env.OSU_ID}&redirect_uri=${env.OSU_REDIRECT}&response_type=code&scope=public identify friends.read`;
    return (
        <a href={url} class="btn btn-ghost" aria-label="login with osu!">
            <span class="hidden lg:inline">{txt(p.lang, "nav.log.login")}</span>
            <i class="fa-solid fa-right-to-bracket" />
        </a>
    );
}

export default Login;
