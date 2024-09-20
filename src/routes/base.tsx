import { Elysia, t } from "elysia";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import HtmxPage from "../libs/routes";
import { userAuthData } from "../libs/auth";
import About from "../components/web/About";
import type { Route } from "../types/osu";
import { save_donation } from "../db/web/save_donation";
import Support from "../components/web/Support";
import Testing from "../components/web/Testing";

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
const state = process.env.STATE;

export const baseRoutes = new Elysia({ prefix: '' })
    .get("/", async ({ lang, t, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Home t={t} />
        </HtmxPage>
    ))
    .get("/about", async ({ lang, t, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <About />
        </HtmxPage>
    ))
    .get("/support", async ({ lang, t, request, jwt, cookie }: Route) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Support />
        </HtmxPage>
    ))
    .post("/search", ({ body }: Route) => (
        <SearchResults query={body.q} />
    ), searchBody)
    .get("/wiki/*", async ({ lang, t, params, request, jwt, cookie }: Route) => {
        if (state === "dev") {
            return (
                <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
                    <Testing params={Object.values(params)} />
                </HtmxPage>
            )
        }
        return <>Page not available</>;
    })
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
    .get("/oauth", async ({ set, jwt, cookie, query }: Route) => {
        const res = await userAuthData(query.code);
        if (!res) return "error";
        const user = {
            id: res.data.id,
            username: res.data.username,
            avatar: res.data.avatar_url,
            role: res.role
        }
        cookie?.auth?.set({
            value: await jwt.sign(user),
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 2,
            path: '/',
        })
        set.redirect = "/";
    }, oauthQuery)
    .get("/logout", ({ set, cookie }: Route) => {
        cookie.auth.remove();
        set.redirect = "/";
    })
