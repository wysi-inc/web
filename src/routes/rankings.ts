import { Elysia } from 'elysia'
import { rankingsController } from '../controllers/ranking';

export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    .get("/", rankingsController)
    .get("/:mode/:category/:page", rankingsController)

