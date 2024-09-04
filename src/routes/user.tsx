import { Elysia, t } from 'elysia'
import { verifyUser } from '../libs/auth';
import { deleteCollections, deleteSocial, saveCollection, saveSetup, saveSocial, updateDan } from '../db/users/update_user';
import type { BeatmapCategory, Mode, Route, ScoreCategory } from '../types/osu';
import HtmxPage from '../libs/routes';
import UserPage from '../components/user/UserPage';
import UserScoresPanel from '../components/user/u_panels/UserScoresPanel';
import UserBeatmapsPanel from '../components/user/u_panels/UserBeatmapsPanel';
import UserSummaryPanel from '../components/user/u_panels/UserSummaryPanel';
import UserMostPanel from '../components/user/u_panels/UserMostPanel';
import UserSkinsPanel from '../components/user/u_panels/UserSkinsPanel';
import UserScoresList from '../components/user/u_panels/u_components/UserScoresList';
import UserBeatmapsList from '../components/user/u_panels/u_components/UserBeatmapsList';
import UserMostList from '../components/user/u_panels/u_components/UserMostList';
import UserSetupPanel from '../components/user/u_panels/UserSetupPanel';
import UserCollectionsPanel from '../components/user/u_panels/UserCollectionsPanel';
import BeatmapCollectionList from '../components/beatmap/BeatmapCollectionList';
import CollectionsForm from '../components/user/u_panels/u_components/CollectionsForm';
import UserYearPanel from '../components/user/u_panels/UserYearPanel';
import UserSocial from '../components/user/u_panels/UserSocial';
import type { Social } from '../models/User';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    .get("/", async ({ lang, t, request, cookie, params, jwt }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        return <>
            <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
                <UserPage t={t} user_id={params.id} logged_id={user?.id} />
            </HtmxPage>
        </>
    })
    .group("/:mode", (_) => _
        .get("/", async ({ lang, t, request, cookie, params, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            return <>
                <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
                    <UserPage t={t}
                        logged_id={user?.id}
                        user_id={params.id}
                        mode={params.mode as Mode} />
                </HtmxPage>
            </>
        })
        .group("/panels", (_) => _
            .post("/scores/:category", ({ params }) => (
                <UserScoresPanel
                    user_id={Number(params.id)}
                    mode={params.mode as Mode}
                    category={params.category as ScoreCategory}
                />)
            )
            .post("/beatmapsets/:category", ({ params }) => (
                <UserBeatmapsPanel
                    id={Number(params.id)}
                    category={params.category as BeatmapCategory}
                />
            ))
            .post("/summary", ({ params }) => (
                <UserSummaryPanel
                    user_id={Number(params.id)}
                    mode={params.mode as Mode}
                />
            ))
            .post("/collections", async ({ cookie, params, jwt }: Route) => {
                const user = await verifyUser(jwt, cookie.auth.value);
                return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user?.id} />
            })
            .post("/most", ({ params }) => (
                <UserMostPanel user_id={Number(params.id)} />
            ))
            .post("/year", async ({ params, jwt, cookie }: Route) => {
                const user = await verifyUser(jwt, cookie.auth.value);
                return <UserYearPanel user_id={Number(params.id)} mode={params.mode as Mode} logged_id={user?.id} />
            })
            .post("/setup", async ({ t, params, cookie, jwt }: Route) => {
                const user = await verifyUser(jwt, cookie.auth.value);
                return <UserSetupPanel t={t} logged_id={user?.id} page_id={Number(params.id)} />
            })
            .post("/skins", ({ params }) => (
                <UserSkinsPanel user_id={Number(params.id)} />
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
            .post("/beatmapsets/:category", ({ params, query }) => (
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
            .post("/collections/:name", ({ params, query }) => (
                <BeatmapCollectionList
                    user_id={Number(params.id)}
                    collection_name={params.name}
                    offset={Number(query.offset)} />
            ))
        )
    )
    .put("/dan", async ({ params, set, cookie, body, jwt }: Route) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        if (!user || Number(params.id) !== user.id) {
            set.status = 401;
            return "Unauthorized";
        }
        if (!body?.dan) {
            set.status = 400;
            return "???";
        }
        const done = await updateDan(user.id, body.dan);
        if (!done) {
            set.status = 500;
            return "Something went wrong";
        }
        return ":D done";
    })
    .group("/setup", _ => _
        .put("/submit", async ({ t, params, set, cookie, body, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || Number(params.id) !== user.id) {
                set.status = 401;
                return "Unauthorized";
            }
            const setup = await saveSetup(user.id, body);
            if (!setup) return "Failed to save setup, reload the page and try again.";
            return <UserSetupPanel t={t} setup={setup} logged_id={user.id} page_id={user.id} />
        })
    )
    .group("/collections", _ => _
        .post("/parse", async ({ params, set, cookie, body, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || Number(params.id) !== user.id) {
                set.status = 401;
                return "Unauthorized";
            }
            return <CollectionsForm file={body.collection} user_id={user.id} />;
        }, {
            body: t.Object({
                collection: t.Any()
            })
        })
        .put("/submit", async ({ params, set, cookie, body, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || Number(params.id) !== user.id) {
                set.status = 401;
                return "Unauthorized";
            }
            const collections = await saveCollection(body as any, user.id);
            return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} collections={collections as any} />
        })
        .delete("/delete", async ({ params, set, cookie, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || Number(params.id) !== user.id) {
                set.status = 401;
                return "Unauthorized";
            }
            await deleteCollections(user.id);
            return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} />
        })
    )
    .group("/socials", _ => _
        .put("/submit", async ({ params, set, cookie, body, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || Number(params.id) !== user.id) {
                set.status = 401;
                return "Unauthorized";
            }
            const saved = await saveSocial(user.id, body.username, body.social);
            if (!saved) {
                set.status = 500;
                return "Social could not be saved";
            }
            return <UserSocial user_id={user.id} username={body.username} social={body.social} editable={true} />;
        }, {
            body: t.Object({
                username: t.String(),
                social: t.String()
            })
        })
        .delete("/delete/:social", async ({ params, set, cookie, jwt }: Route) => {
            const user = await verifyUser(jwt, cookie.auth.value);
            if (!user || Number(params.id) !== user.id) {
                set.status = 401;
                return "Unauthorized";
            }
            const deleted = await deleteSocial(user.id, params.social as Social);
            if (!deleted) {
                set.status = 500;
                return "Social could not delete";
            }
            return <></>;
        })
    )
