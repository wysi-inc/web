import BaseHtml from "../components/BaseHtml";
import type { UserCookie } from "../types/users";

export function getPage(headers: any, user: UserCookie | null, children: JSX.Element) {
    if (headers?.has("hx-request")) {
        // set.status = 200;
        // set.headers['HX-Push-URL'] = request.url;
        return children;
    }
    return <BaseHtml user={user} children={children} />
}
