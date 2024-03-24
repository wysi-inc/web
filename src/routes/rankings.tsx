import { Elysia } from 'elysia'
import { getPage } from '../resources/pages';
import { verifyUser } from '../resources/functions';
import type { Category, Mode } from '../types/osu';
import Rankings from '../components/user/Rankings';

export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    //@ts-ignore
    .get("/", async ({ request, jwt, cookie: { auth } }) =>
        getPage(request.headers, await verifyUser(jwt, auth.value),
            <Rankings
                mode={"osu"}
                category={"performance"}
                page={1}
            />
        ))
    //@ts-ignore
    .get("/:mode/:category/:page", async ({ params: { mode, category, page }, request, jwt, cookie: { auth } }) =>
        getPage(request.headers, await verifyUser(jwt, auth.value),
            <Rankings
                mode={mode as Mode}
                category={category as Category}
                page={Number(page)}
            />
        ))
