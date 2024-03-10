import BaseHtml from "../components/BaseHtml";
import type { UserCookie } from "../types/users";

export function getPage(request: Request, html: any, set: any, user: UserCookie | null, children: JSX.Element): Response {
    if (request.headers.has("hx-request")) {
        // set.status = 200;
        // set.headers['HX-Push-URL'] = request.url;
        return html(children);
    }
    console.log("first request");
    console.log(user);
    return html(
        <BaseHtml user={user} children={children} />
    );
}
