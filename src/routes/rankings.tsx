import { Elysia } from 'elysia'
import { html } from "@elysiajs/html";
import { getPage } from '../resources/pages'
import Rankings from '../components/user/Rankings'
import type { Category, Mode } from '../types/osu';

export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    .use(html())
    .get("/", ({ request, set, html }) => getPage(request, html, set,
        <Rankings mode="osu" page={1} category="performance" />
    ))
    .get("/:mode/:category/:page", ({ request, set, params, html }) => getPage(request, html, set,
        <Rankings mode={params.mode as Mode} category={params.category as Category} page={Number(params.page)} />
    ))

