import { txt } from "@/src/tasks/files";
import { env } from "bun";

function Login(p: { lang: string }) {
    const url = new URL("https://osu.ppy.sh/oauth/authorize");
    url.searchParams.set("client_id", env.OSU_ID);
    url.searchParams.set("redirect_uri", env.OSU_REDIRECT);
    url.searchParams.set("response_type", "code");
    url.searchParams.set("scope", "public identify friends.read");
    return (
        <button class="btn btn-ghost" aria-label="login with osu!" onclick={`window.location.href = \`${url.toString()}&state=\${window.location.href}\``}>
            <span class="hidden lg:inline">{txt(p.lang, "nav.log.login")}</span>
            <i class="fa-solid fa-right-to-bracket" />
        </button>
    );
}

export default Login;
