import { Elysia } from 'elysia'
import { html } from "@elysiajs/html";
import { rankingsController } from '../controllers/ranking';

export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    .use(html())
    .get("/", rankingsController)
    .get("/:mode/:category/:page", rankingsController)

