import BaseHtml from "../components/BaseHtml";
import type { Jwt } from "../types/osu";
import type { UserCookie } from "../types/users";
import { verifyUser } from "./auth";

type Props = {
    t: any,
    lang: any,
    headers: any,
    children: JSX.Element,
} & (
        { cookie: any, jwt: Jwt, } |
        { user: UserCookie | null, }
    );

const HtmxPage = async (p: Props) => {
    if (p.headers?.has("hx-request")) {
        return <>
            {p.children}
        </>
    }

    if ("cookie" in p) {
        const user = await verifyUser(p.jwt, p.cookie?.auth?.value);
        return <>
            <BaseHtml lang={p.lang} t={p.t} user={user}>
                {p.children}
            </BaseHtml>
        </>
    }

    return <>
        <BaseHtml lang={p.lang} t={p.t} user={p.user}>
            {p.children}
        </BaseHtml>
    </>
}

export default HtmxPage;
