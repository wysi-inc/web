import { Elysia, t } from "elysia";
import { html } from "@elysiajs/html";
import { getPage, htmxOnly } from "../resources/pages";
import Home from "../components/web/Home";
import SearchResults from "../components/web/SearchResults";

export const baseRoutes = new Elysia({ prefix: "/" })
    .use(html())
    .get("/", ({ request, html, set }) => getPage(request, html, set,
        <Home />
    ))
    .post("/search", ({ request, html, body }) => htmxOnly(request, html,
        <SearchResults query={body.q} />
    ), {
        body: t.Object({
            q: t.String()
        })
    })
