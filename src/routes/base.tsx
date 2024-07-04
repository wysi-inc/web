import { Elysia, t } from "elysia";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import HtmxPage from "../libs/routes";
import { userAuthData } from "../libs/auth";
import About from "../components/web/About";
import type { Route } from "../types/osu";
import { save_donation } from "../db/web/save_donation";
import Support from "../components/web/Support";

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

const kofi_token = String(process.env.KOFI_TOKEN);

export const baseRoutes = new Elysia({ prefix: '' })
    .get("/", async ({ request, jwt, cookie }: Route) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <Home />
        </HtmxPage>
    ))
    .get("/about", async ({ request, jwt, cookie }: Route) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <About />
        </HtmxPage>
    ))
    .get("/support", async ({ request, jwt, cookie }: Route) => (
        <HtmxPage headers={request.headers} cookie={cookie} jwt={jwt}>
            <Support />
        </HtmxPage>
    ))
    .post("/search", ({ body }: Route) => (
        <SearchResults query={body.q} />
    ), searchBody)
    .post("/donations", async ({ body, set }: Route) => {
        const data = JSON.parse(body.data);
        if (data.verification_token !== kofi_token) {
            set.status = 401;
            return "Unauthorized";
        }
        if (!await save_donation(data)) {
            set.status = 500;
            return "Something went wrong";
        }
        set.status = 200;
        return "tysm <3";
    })
    .get("/oauth", async ({ request, jwt, cookie, query }: Route) => {
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
    .get("/logout", ({ request, cookie }: Route) => {
        cookie.auth.remove();
        return <>
            <HtmxPage headers={request.headers} user={null}>
                <Home />
            </HtmxPage>
        </>
    })
