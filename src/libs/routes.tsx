import BaseHtml from "../components/BaseHtml";
import type { UserCookie } from "../types/users";
import { verifyUser } from "./auth";

type Props = {
    headers: any;
    children: JSX.Element;
} & (
        { cookie: any; jwt: any; } |
        { user: UserCookie | null; }
    );

const HtmxPage = async (props: Props) => {
    if (props.headers?.has("hx-request")) {
        return <>
            {props.children}
        </>
    }

    if ("cookie" in props) {
        const user = await verifyUser(props.jwt, props.cookie?.auth?.value);
        return <>
            <BaseHtml user={user}>
                {props.children}
            </BaseHtml>
        </>
    }

    return <>
        <BaseHtml user={props.user}>
            {props.children}
        </BaseHtml>
    </>
}

export default HtmxPage;
