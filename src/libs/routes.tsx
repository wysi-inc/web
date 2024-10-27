import type { Cookie } from "elysia";
import BaseHtml from "../components/BaseHtml";
import type { Jwt } from "../types/api";
import type { UserCookie } from "../types/users";
import { verifyUser } from "./auth";

type Props = {
    lang: string;
    req: Request;
    set: any;
    children: JSX.Element;
} & ({ cookie: Cookie; jwt: Jwt } | { user: UserCookie | null });

async function HtmxPage(p: Props) {
    if (p.req?.headers?.has("hx-request")) {
        // const route = p.req.url.split("/");
        // const base = route[3];
        // switch (base) {
        //     case "u":
        //     case "user":
        //         route[3] = "users";
        //         p.set.headers["HX-Push-Url"] = route.join("/");
        //         break;
        //     case "s":
        //     case "set":
        //     case "beatmapset":
        //         route[3] = "beatmapsets";
        //         p.set.headers["HX-Push-Url"] = route.join("/");
        //         break;
        // }
        return p.children;
    }

    if ("cookie" in p) {
        const user = await verifyUser(p.jwt, p.cookie);
        return (
            <BaseHtml lang={p.lang} user={user}>
                {p.children}
            </BaseHtml>
        );
    }

    return (
        <BaseHtml lang={p.lang} user={p.user}>
            {p.children}
        </BaseHtml>
    );
}

export default HtmxPage;
