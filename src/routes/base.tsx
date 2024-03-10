import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { jwt } from '@elysiajs/jwt'
import { auth } from "osu-api-extended";
import { osu_id, osu_redirect, osu_secret } from "@/index";
import { getPage } from "../resources/pages";
import Home from "@/src/components/web/Home";
import SearchResults from "@/src/components/web/SearchResults";

export const baseRoutes = new Elysia({ prefix: "/" })
    .use(html())
    .use(
        jwt({
            name: 'cookiezi',
            secret: 'test'
        })
    )
    .get("/", ({ request, set, html }) => getPage(request, html, set,
        <Home />
    ))
    .get("/login", () => {
        console.log("yea");
        const scope_list: any = ["public", "identify", "friends.read"];
        const url = auth.build_url(osu_id, osu_redirect, scope_list);
        return url;
    })
    .get("/oauth", async ({ request, set, query, html }) => {
        const code = query.code;
        const user_data = await auth.authorize(code, 'osu', osu_id, osu_secret, osu_redirect);
        console.log(user_data);
        getPage(request, html, set,
            <></>
        )
    }, {
        query: t.Object({
            code: t.String()
        })
    })
    .post("/search", ({ request, body, html }) => html(
        <SearchResults query={body.q} />
    ), {
        body: t.Object({
            q: t.String()
        })
    })
