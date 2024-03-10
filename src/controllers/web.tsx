import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import { userAuthCode, userAuthData } from "../resources/functions";
import { getPage } from "../resources/pages";

export const homeController = ({ request, set, html }: any): Response => {
    return getPage(request, html, set,
        <Home />
    )
}

export const whoamiController = async ({ jwt, set, auth }: any) => {
    const profile = await jwt.verify(auth.value);
    if (!profile) {
        set.status = 401;
        return "Unauthorized";
    }
    return profile;
}

export const oauthController = async ({ jwt, set, cookie: { auth }, query, html, request }: any) => {
    const code = query.code;
    //const data = await userAuthCode(code);
    const data = await userAuthData(code);

    if ((data as any).error) return html(<Home />)

    auth.set({
        value: await jwt.sign({
            id: data.id,
            username: data.username,
            avatar: data.avatar_url,
        }),
        httpOnly: true,
        maxAge: 7 * 86400,
        path: '/profile',
    })

    return getPage(request, html, set,
        <Home />,
    )
}


export const searchController = ({ body, html }: any): Response => {
    return html(
        <SearchResults query={body.q} />
    )
}
