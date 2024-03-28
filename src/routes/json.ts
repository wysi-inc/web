import { Elysia } from "elysia";
import type { Category, Mode } from "../types/osu";
import { getRankings, getUser } from "../db/users/get_user";

export const jsonRoutes = new Elysia({ prefix: '/json' })
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
