import { Elysia } from 'elysia'
import { jwt } from '@elysiajs/jwt';
import { jwt_params, verifyUser } from '../resources/functions';
import { getPage } from '../resources/pages';
import type { BeatmapCategory, Mode, ScoreCategory } from '../types/osu';
import type { ProfileMedal } from '../types/medals';
import UserPage from '../components/user/UserPage';
import UserScoresPanel from '../components/user/u_panels/UserScoresPanel';
import UserBeatmapsPanel from '../components/user/u_panels/UserBeatmapsPanel';
import UserSummaryPanel from '../components/user/u_panels/UserSummaryPanel';
import UserMostPanel from '../components/user/u_panels/UserMostPanel';
import UserSkinsPanel from '../components/user/u_panels/UserSkinsPanel';
import UserSetupPanel from '../components/user/u_panels/UserSetupPanel';
import UserMedalsPanel from '../components/user/u_panels/UserMedalsPanel';
import UserScoresList from '../components/user/u_panels/u_components/UserScoresList';
import UserBeatmapsList from '../components/user/u_panels/u_components/UserBeatmapsList';
import UserMostList from '../components/user/u_panels/u_components/UserMostList';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    .use(jwt(jwt_params()))
    .get("/", async ({ request, cookie: { auth }, params, jwt }) =>
        getPage(request.headers, await verifyUser(jwt, auth.value),
            <UserPage id={params.id} />
        )
    )
    .group("/:mode", (_) => _
        .get("/", async ({ request, cookie: { auth }, params, jwt }) =>
            getPage(request.headers, await verifyUser(jwt, auth.value),
                <UserPage id={params.id} mode={params.mode as Mode} />
            )
        )
        .group("/panels", (_) => _
            .post("/scores/:category", ({ params }) => (
                <UserScoresPanel
                    id={Number(params.id)}
                    mode={params.mode as Mode}
                    category={params.category as ScoreCategory}
                />)
            )
            .post("/beatmaps/:category", ({ params }) => (
                <UserBeatmapsPanel
                    id={Number(params.id)}
                    category={params.category as BeatmapCategory}
                />
            ))
            .post("/summary", ({ params }) => (
                <UserSummaryPanel
                    id={Number(params.id)}
                    mode={params.mode as Mode}
                />
            ))
            .post("/most", ({ params }) => (
                <UserMostPanel id={Number(params.id)} />
            ))
            .post("/skins", ({ params }) => (
                <UserSkinsPanel id={Number(params.id)} />
            ))
            .post("/setup", ({ params }) => (
                <UserSetupPanel
                    id={Number(params.id)}
                />
            ))
            .post("/medals", async ({ body }) => (
                <UserMedalsPanel
                    user_medals={
                        (body as any)?.medals?.map((m: string) =>
                            JSON.parse(m) as ProfileMedal)
                    }
                />
            ))
        )
        .group("/lists", (_) => _
            .post("/scores/:category", ({ params, query }) => (
                <UserScoresList
                    id={Number(params.id)}
                    mode={params.mode as Mode}
                    category={params.category as ScoreCategory}
                    offset={Number(query.offset)}
                    limit={Number(query.limit)}
                />
            ))
            .post("/beatmaps/:category", ({ params, query }) => (
                <UserBeatmapsList
                    id={Number(params.id)}
                    category={params.category as BeatmapCategory}
                    offset={Number(query.offset)}
                    limit={Number(query.limit)}
                />
            ))
            .post("/most", ({ params, query }) => (
                <UserMostList
                    id={Number(params.id)}
                    offset={Number(query.offset)}
                    limit={Number(query.limit)}
                />
            ))
        )
    )
