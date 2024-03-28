import { Elysia, t } from "elysia";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import HtmxPage from "../libs/routes";
import { userAuthData } from "../libs/auth";

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
    .get("/", async ({ request, jwt, cookie }) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <Home />
        </HtmxPage>
    ))
    .post("/search", ({ body }) => (
        <SearchResults query={body.q} />
    ), searchBody)
    //@ts-ignore
    .get("/oauth", async ({ request, jwt, cookie, query }) => {
        const data = await userAuthData(query.code);
        if ((data as any).error) return "error";
        const user = {
            id: data.id,
            username: data.username,
            avatar: data.avatar_url
        }
        cookie?.auth?.set({
            value: await jwt.sign(user),
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7,
            path: '/',
        })
        return <>
            <HtmxPage headers={request.headers} user={user}>
                <Home />
            </HtmxPage>
        </>
    }, oauthQuery)
    .get("/logout", ({ request, cookie }) => {
        cookie.auth.remove();
        return <>
            <HtmxPage headers={request.headers} user={null}>
                <Home />
            </HtmxPage>
        </>
    })
