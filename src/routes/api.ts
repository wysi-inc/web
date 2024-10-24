import { Elysia, t } from "elysia";
import { getUser } from "../db/users/get_user";
import { getSubdivisions } from "../libs/web_utils";

export const apiRoutes = new Elysia({ prefix: "/api" })
    .get("/", () => ({ msg: "test" }))
    .get("/user/:id", async ({ params }) => await getUser(params.id, "osu"))
    .post(
        "/subdivisions/",
        async ({ body }) => {
            return await getSubdivisions(body.ids);
        },
        {
            body: t.Object({
                ids: t.Array(t.Number()),
            }),
        }
    );
