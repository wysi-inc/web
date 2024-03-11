import { Elysia } from 'elysia'
import { jwt } from '@elysiajs/jwt';
import { getPage } from '../resources/pages';
import { jwt_params, verifyUser } from '../resources/functions';
import type { Category, Mode } from '../types/osu';
import Rankings from '../components/user/Rankings';

export const rankingRoutes = new Elysia({ prefix: '/rankings' })
    .use(jwt(jwt_params()))
    .get("/", async ({ request, jwt, cookie: { auth } }) =>
        getPage(request.headers, await verifyUser(jwt, auth.value),
            <Rankings
                mode={"osu"}
                category={"performance"}
                page={1}
            />
        ))
    .get("/:mode/:category/:page", async ({ params: { mode, category, page }, request, jwt, cookie: { auth } }) =>
        getPage(request.headers, await verifyUser(jwt, auth.value),
            <Rankings
                mode={mode as Mode}
                category={category as Category}
                page={Number(page)}
            />
        ))
