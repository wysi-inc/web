import { Elysia, t } from 'elysia'
import type { BeatmapCategory, Mode, Route, ScoreCategory } from '../types/osu';
import UserPage from '../components/user/UserPage';
import UserScoresPanel from '../components/user/u_panels/UserScoresPanel';
import UserBeatmapsPanel from '../components/user/u_panels/UserBeatmapsPanel';
import UserSummaryPanel from '../components/user/u_panels/UserSummaryPanel';
import UserMostPanel from '../components/user/u_panels/UserMostPanel';
import UserSkinsPanel from '../components/user/u_panels/UserSkinsPanel';
import UserMedalsPanel from '../components/user/u_panels/UserMedalsPanel';
import UserScoresList from '../components/user/u_panels/u_components/UserScoresList';
import UserBeatmapsList from '../components/user/u_panels/u_components/UserBeatmapsList';
import UserMostList from '../components/user/u_panels/u_components/UserMostList';
import UserSetupPanel from '../components/user/u_panels/UserSetupPanel';
import HtmxPage from '../libs/routes';
import { verifyUser } from '../libs/auth';
import { deleteCollection, saveCollection, saveSetup } from '../db/users/update_user';
import UserCollectionsPanel from '../components/user/u_panels/UserCollectionsPanel';
import BeatmapCollectionList from '../components/beatmap/BeatmapCollectionList';
import CollectionsForm from '../components/user/u_panels/u_components/CollectionsForm';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    .get("/", async ({ request, cookie, params, jwt }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        return <>
            <HtmxPage headers={request.headers} user={user}>
                <UserPage id={params.id} logged_id={user?.id} />
            </HtmxPage>
        </>
    })
    .post("/setup", async ({ params, set, cookie, body, jwt }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user) {
            set.status = 401;
            return "Unauthorized";
        }

        if (Number(params.id) != user.id) return;

        const setup = await saveSetup(user.id, body);
        if (!setup) return "Failed to save setup, reload the page and try again.";
        return <UserSetupPanel setup={setup} logged_id={user.id} page_id={user.id} />
    })
    .group("/collections", _ => _
        .post("/parse", async ({ params, set, cookie, body, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user) {
                set.status = 401;
                return "Unauthorized";
            }

            if (Number(params.id) != user.id) return;

            return <CollectionsForm file={body.collection} user_id={user.id} />;
        }, {
            body: t.Object({
                collection: t.Any()
            })
        })
        .post("/submit", async ({ params, set, cookie, body, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user) {
                set.status = 401;
                return "Unauthorized";
            }

            if (Number(params.id) != user.id) return;
            const collection = await saveCollection(body as any, user.id);
            return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} collection={collection} />
        })
        .post("/delete", async ({ params, set, cookie, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user) {
                set.status = 401;
                return "Unauthorized";
            }

            if (Number(params.id) != user.id) return;
            await deleteCollection(user.id);
            return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} />
        })
    )
    .group("/:mode", (_) => _
        .get("/", async ({ request, cookie, params, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            return <>
                <HtmxPage headers={request.headers} user={user}>
                    <UserPage
                        logged_id={user?.id}
                        id={params.id}
                        mode={params.mode as Mode} />
                </HtmxPage>
            </>
        })
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
            .post("/collections", async ({ cookie, params, jwt }: Route) => {
                const user = await verifyUser(jwt, cookie.auth.value);
                return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user?.id} />
            })
            .post("/most", ({ params }) => (
                <UserMostPanel id={Number(params.id)} />
            ))
            .post("/setup", async ({ params, cookie, jwt }: Route) => {
                const user = await verifyUser(jwt, cookie.auth.value);
                return <UserSetupPanel logged_id={user?.id} page_id={Number(params.id)} />
            })
            .post("/skins", ({ params }) => (
                <UserSkinsPanel id={Number(params.id)} />
            ))
            .post("/medals", async ({ params }) => (
                <UserMedalsPanel user_id={Number(params.id)} />
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
            .post("/collections/:name", ({ params, query }) => {
                return (
                    <BeatmapCollectionList
                        user_id={Number(params.id)}
                        collection_name={params.name}
                        offset={Number(query.offset)} />
                );
            })
        )
    )
