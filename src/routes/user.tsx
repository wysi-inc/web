import { Elysia } from 'elysia'
import { html } from "@elysiajs/html";
import { getPage, htmxOnly } from '../resources/pages'
import UserPage from '../components/user/UserPage';
import UserScoresList from '../components/user/u_panels/u_components/UserScoresList';
import UserBeatmapsList from '../components/user/u_panels/u_components/UserBeatmapsList';
import UserMostList from '../components/user/u_panels/u_components/UserMostList';
import UserSummaryPanel from '../components/user/u_panels/UserSummaryPanel';
import UserScoresPanel from '../components/user/u_panels/UserScoresPanel';
import UserBeatmapsPanel from '../components/user/u_panels/UserBeatmapsPanel';
import UserMostPanel from '../components/user/u_panels/UserMostPanel';
import UserSkinsPanel from '../components/user/u_panels/UserSkinsPanel';
import UserSetupPanel from '../components/user/u_panels/UserSetupPanel';
import UserMedalsPanel from '../components/user/u_panels/UserMedalsPanel';
import type { BeatmapCategory, Mode, ScoreCategory } from '../types/osu';
import type { ProfileMedal } from '../types/medals';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    .use(html())
    .get("/", ({ request, set, params, html }) => getPage(request, html, set,
        <UserPage id={params.id} mode={undefined as any} />
    ))
    .group("/:mode", (_) => _
        .get("/:mode", ({ request, set, params, html }) => getPage(request, html, set,
            <UserPage id={params.id} mode={params.mode as Mode} />
        ))
        .group("/panels", (_) => _
            .post("/scores_summary", ({ request, set, params, html }) => getPage(request, html, set,
                <UserSummaryPanel id={Number(params.id)} mode={params.mode as Mode} />
            ))
            .post("/scores/:category", ({ request, set, params, html }) => getPage(request, html, set,
                <UserScoresPanel id={Number(params.id)} mode={params.mode as Mode} category={params.category as ScoreCategory} />
            ))
            .post("/beatmaps/:category", ({ request, set, params, html }) => getPage(request, html, set,
                <UserBeatmapsPanel id={Number(params.id)} category={params.category as BeatmapCategory} />
            ))
            .post("/most_played", ({ request, set, params, html }) => getPage(request, html, set,
                <UserMostPanel id={Number(params.id)} />
            ))
            .post("/skins", ({ request, set, params, html }) => getPage(request, html, set,
                <UserSkinsPanel id={Number(params.id)} />
            ))
            .post("/setup", ({ request, set, params, html }) => getPage(request, html, set,
                <UserSetupPanel id={Number(params.id)} />
            ))
            .post("/medals", ({ request, set, body, html }) => {
                const medals: ProfileMedal[] = (body as any)?.medals?.map((m: string) => JSON.parse(m) as ProfileMedal);
                return getPage(request, html, set,
                    <UserMedalsPanel user_medals={medals} />
                )
            })
        )
        .group("/lists", (_) => _
            .post("/scores/:category", ({ request, params, query, html }) => htmxOnly(request, html,
                <UserScoresList id={Number(params.id)}
                    mode={params.mode as Mode}
                    category={params.category as ScoreCategory}
                    offset={Number(query.offset)}
                    limit={Number(query.limit)}
                />
            ))
            .post("/beatmaps/:category", ({ request, params, query, html }) => htmxOnly(request, html,
                <UserBeatmapsList id={Number(params.id)}
                    category={params.category as BeatmapCategory}
                    offset={Number(query.offset)}
                    limit={Number(query.limit)}
                />
            ))
            .post("/most", ({ request, params, query, html }) => htmxOnly(request, html,
                <UserMostList id={Number(params.id)} offset={Number(query.offset)} limit={Number(query.limit)} />
            ))
        )
    )
