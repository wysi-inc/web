import { Elysia, t } from "elysia";
import type { Category, Mode } from "../types/osu";
import { getRankings, getUser } from "../db/users/get_user";
import { getSubdivisions } from "../libs/web_utils";

export const apiRoutes = new Elysia({ prefix: '/api' })
    .get("/", () => ({ msg: "test" })
    )
    .get("/user/:id", ({ params }) =>
        getUser(params.id, "osu")
    )
    .get("/rankings", async () =>
        (await getRankings("osu", "performance", 1))?.ranking
    )
    .get("/rankings/:mode/:category/:page", ({ params }) =>
        getRankings(params.mode as Mode, params.category as Category, Number(params.page))
    )
    .post("/subdivisions/", async ({ body }) => {
        return await getSubdivisions(body.ids);
    }, {
        body: t.Object({
            ids: t.Array(t.Number())
        })
    })
