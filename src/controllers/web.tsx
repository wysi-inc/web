import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import { userAuthCode, userAuthData } from "../resources/functions";
import { getPage } from "../resources/pages";

export const homeController = ({ request, set, html }: any): Response => {
    return getPage(request, html, set,
        <Home />
    )
}

export const whoamiController = async ({ jwt, set, cookie }: any) => {
    console.log("cookie", cookie);
    console.log("auth", cookie["auth"]);
    const profile = await jwt.verify(cookie["auth"]);
    if (!profile) {
        set.status = 401;
        return "Unauthorized";
    }
    return profile;
}

export const oauthController = async ({ jwt, cookie, setCookie, set, query, html, request }: any) => {
    const code = query.code;
    //const data = await userAuthCode(code);
    const data = await userAuthData(code);

    if ((data as any).error) return html(<Home />)

    // const params = {
    //     id: data.id,
    //     username: data.username,
    //     avatar: data.avatar_url,
    // }
    //

    const params = {
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

    // console.log("auth", auth);
    //
    // if (!auth) {
    //     set.status = 418;
    //     return "wtf";
    // }
    //
    // auth.set({
    //     value: await jwt.sign(params),
    //     httpOnly: true,
    //     maxAge: 7 * 86400,
    //     path: '/test',
    // })
    //
    // console.log(auth.value);

    return params;

    // return getPage(request, html, set,
    //     <Home />,
    // )
}


export const searchController = ({ body, html }: any): Response => {
    return html(
        <SearchResults query={body.q} />
    )
}
