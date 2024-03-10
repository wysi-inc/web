import { userAuthData, verifyUser } from "../resources/functions";
import { getPage } from "../resources/pages";
import type { UserCookie } from "../types/users";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";

export const homeController = async ({ request, set, html, jwt, cookie: { auth } }: any): Response => {
    const user = await verifyUser(jwt, auth);
    if (!user) {
        <Home />
    }
    return getPage(request, html, set, user,
        <Home />
    )
}

export const whoamiController = async ({ jwt, set, cookie: { auth } }: any) => {
    const user = await verifyUser(jwt, auth);
    if (!user) {
        set.status = 401;
        return "Unauthorized";
    }
    return user;
}

export const oauthController = async ({ jwt, setCookie, query }: any) => {
    const code = query.code;
    //const data = await userAuthCode(code);
    const data = await userAuthData(code);

    if ((data as any).error) return "error";

    const params: UserCookie = {
        id: data.id,
        username: data.username,
        avatar: data.avatar_url
    }

    const cookie_age = 60 * 60 * 24 * 7;

    setCookie("auth", await jwt.sign(params), {
        httpOnly: false,
        maxAge: cookie_age,
        sameSite: true,
        secure: false,
        priority: "high",
    })

    return "authorized, go back to the site";
}


export const searchController = ({ body, html }: any): Response => {
    return html(
        <SearchResults query={body.q} />
    )
}
