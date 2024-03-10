import { Elysia, t } from "elysia";
import { homeController, oauthController, searchController, whoamiController } from "../controllers/web";

const oauthQuery = {
    query: t.Object({
        code: t.String(),
        state: t.Any()
    })
}

const searchBody = {
    body: t.Object({
        q: t.String()
    })
}

export const baseRoutes = new Elysia({ prefix: '' })
    .get("/", homeController)
    .get("/oauth", oauthController, oauthQuery)
    .post("/search", searchController, searchBody)
    .get("/whoami", whoamiController)
