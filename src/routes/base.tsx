import { Elysia, error, t } from "elysia";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";
import HtmxPage from "../libs/routes";
import { userAuthData } from "../libs/auth";
import About from "../components/web/About";
import { save_donation } from "../db/web/save_donation";
import Support from "../components/web/Support";
import Testing from "../components/web/Testing";
import { env } from "bun";
import { plugins } from "./plugins";
import type { UserCookie } from "../types/users";

const searchBody = { body: t.Object({ q: t.String() }) };
const oauthQuery = { query: t.Object({ code: t.String(), state: t.Any() }) };

export const baseRoutes = new Elysia({ prefix: '' })
    .use(plugins)
    .get("/", async ({ lang, t, request, jwt, cookie }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Home t={t} />
        </HtmxPage>
    ))
    .get("/about", async ({ lang, t, request, jwt, cookie }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <About />
        </HtmxPage>
    ))
    .get("/support", async ({ lang, t, request, jwt, cookie }) => (
        <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
            <Support />
        </HtmxPage>
    ))
    .post("/search", ({ body }) => (
        <SearchResults query={body.q} />
    ), searchBody)
    .get("/wiki/*", async ({ lang, t, params, request, jwt, cookie }) => {
        if (env.STATE === "dev") {
            return (
                <HtmxPage lang={lang} t={t} headers={request.headers} cookie={cookie} jwt={jwt}>
                    <Testing params={Object.values(params)} />
                </HtmxPage>
            )
        }
        return <>Page not available</>;
    })
    .post("/donations", async ({ body }) => {
        const data = JSON.parse(body.data);
        if (data.verification_token !== env.KOFI_TOKEN) return error(401, "Unauthorized");
        if (!await save_donation(data)) return error(500, "Something went wrong");
        return "tysm <3";
    }, {
        body: t.Object(t.Any())
    })
    .get("/oauth", async ({ set, jwt, cookie, query }) => {
        const res = await userAuthData(query.code);
        if (!res) return error(500, "error");
        const user: UserCookie = {
            id: res.data.id,
            username: res.data.username,
            role: res.role ? res.role : undefined
        }
        cookie?.auth?.set({
            value: await jwt.sign(user),
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 2,
            path: "/",
        })
        set.redirect = "/";
    }, oauthQuery)
    .get("/logout", ({ set, cookie }) => {
        cookie.auth.remove();
        set.redirect = "/";
    })
