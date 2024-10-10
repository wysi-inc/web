import type { Cookie } from "elysia";
import BaseHtml from "../components/BaseHtml";
import type { Jwt } from "../types/api";
import type { UserCookie } from "../types/users";
import { verifyUser } from "./auth";

type Props = {
    lang: string,
    headers: any,
    children: JSX.Element,
} & (
        { cookie: Cookie, jwt: Jwt, } |
        { user: UserCookie | null, }
    );

async function HtmxPage(p: Props) {
    if (p.headers.has("hx-request")) return p.children;

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
