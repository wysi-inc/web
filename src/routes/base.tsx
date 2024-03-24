import { Elysia, t } from "elysia";
import { userAuthData, verifyUser } from "../resources/functions";
import { getPage } from "../resources/pages";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";

const searchBody = {
    body: t.Object({
        q: t.String()
    })
}

const oauthQuery = {
    query: t.Object({
        code: t.String(),
        state: t.Any()
    })
}

export const baseRoutes = new Elysia({ prefix: '' })
    //@ts-ignore
    .get("/", async ({ request, jwt, cookie: { auth } }) => (
        getPage(request.headers, await verifyUser(jwt, auth.value),
            <Home />
        )
    ))
    .post("/search", ({ body }) => (
        <SearchResults query={body.q} />
    ), searchBody)
    //@ts-ignore
    .get("/oauth", async ({ request, jwt, cookie: { auth }, query }) => {
        const data = await userAuthData(query.code);
        if ((data as any).error) return "error";
        const user = {
            id: data.id,
            username: data.username,
            avatar: data.avatar_url
        }
        auth.set({
            value: await jwt.sign(user),
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        })
        return getPage(request.headers, user,
            <Home />
        )
    }, oauthQuery)
    //@ts-ignore
    .get("/logout", ({ request, cookie }) => {
        cookie.auth.remove();
        return getPage(request.headers, null,
            <Home />
        )
    })
