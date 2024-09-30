import { Elysia, error, t } from 'elysia'
import { addSkin, deleteCollections, deleteSkin, deleteSocial, getCollectionFile, saveCollection, saveSetup, saveSocial, sortSkins, sortSocials, updateDan } from '../db/users/update_user';
import type { BeatmapCategory, Mode, ScoreCategory } from '../types/osu';
import HtmxPage from '../libs/routes';
import UserPage from '../components/user/UserPage';
import UserScoresPanel from '../components/user/u_panels/UserScoresPanel';
import UserBeatmapsPanel from '../components/user/u_panels/UserBeatmapsPanel';
import UserSummaryPanel from '../components/user/u_panels/UserSummaryPanel';
import UserMostPanel from '../components/user/u_panels/UserMostPanel';
import UserSkinsPanel, { SkinCard } from '../components/user/u_panels/UserSkinsPanel';
import UserScoresList from '../components/user/u_panels/u_components/UserScoresList';
import UserBeatmapsList from '../components/user/u_panels/u_components/UserBeatmapsList';
import UserMostList from '../components/user/u_panels/u_components/UserMostList';
import UserSetupPanel from '../components/user/u_panels/UserSetupPanel';
import UserCollectionsPanel from '../components/user/u_panels/UserCollectionsPanel';
import BeatmapCollectionList from '../components/beatmap/BeatmapCollectionList';
import CollectionsForm from '../components/user/u_panels/u_components/CollectionsForm';
import UserYearPanel from '../components/user/u_panels/UserYearPanel';
import UserSocial from '../components/user/u_panels/UserSocial';
import { plugins } from './plugins';
import { verifyUser } from '../libs/auth';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    .use(plugins)
    .get("/", async ({ lang, t, request, cookie, params, jwt }) => {
        const user = await verifyUser(jwt, cookie);
        return <>
            <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
                <UserPage t={t} user_id={params.id} logged={user} />
            </HtmxPage>
        </>
    })
    .group("/:mode", (_) => _
        .get("/", async ({ lang, t, request, cookie, params, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            return (
                <HtmxPage lang={lang} t={t} headers={request.headers} user={user}>
                    <UserPage t={t} logged={user} user_id={params.id} mode={params.mode as Mode} />
                </HtmxPage>
            );
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
            .post("/collections", async ({ cookie, params, jwt }) => {
                const user = await verifyUser(jwt, cookie);
                return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user?.id} />
            })
            .post("/most", ({ params }) => (
                <UserMostPanel user_id={Number(params.id)} />
            ))
            .post("/year", async ({ params, jwt, cookie }) => {
                const user = await verifyUser(jwt, cookie);
                return <UserYearPanel user_id={Number(params.id)} mode={params.mode as Mode} logged_id={user?.id} />
            })
            .post("/setup", async ({ t, params, jwt, cookie }) => {
                const user = await verifyUser(jwt, cookie);
                return <UserSetupPanel t={t} logged_id={user?.id} page_id={Number(params.id)} />
            })
            .post("/skins", async ({ params, jwt, cookie }) => {
                const user = await verifyUser(jwt, cookie);
                return <UserSkinsPanel user_id={Number(params.id)} logged_id={user?.id} />
            })
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
    .put("/dan", async ({ params, cookie, body, jwt }) => {
        const user = await verifyUser(jwt, cookie);
        if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
        const res = await updateDan(user.id, body.dan);
        if (res.error) return error(res.code, res.msg);
        return ":D done";
    }, {
        body: t.Object({
            dan: t.String()
        })
    })
    .group("/setup", _ => _
        .put("/submit", async ({ t, params, cookie, body, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const setup = await saveSetup(user.id, body);
            if (!setup) return "Failed to save setup, reload the page and try again.";
            return <UserSetupPanel t={t} setup={setup} logged_id={user.id} page_id={user.id} />
        })
    )
    .group("/collections", _ => _
        .post("/parse", async ({ params, cookie, body, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            return <CollectionsForm file={body.collection} user_id={user.id} />;
        }, {
            body: t.Object({
                collection: t.Any()
            })
        })
        .put("/submit", async ({ params, cookie, body, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const collections = await saveCollection(body as any, user.id);
            return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} collections={collections as any} />
        })
        .delete("/delete", async ({ params, cookie, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            await deleteCollections(user.id);
            return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} />
        })
        .get("/download", async ({ params }) => {
            const file = await getCollectionFile(Number(params.id));
            return file;
        })
    )
    .group("/socials", _ => _
        .put("/submit", async ({ params, cookie, body, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const res = await saveSocial(user.id, body.username, body.platform);
            if (res.error) return error(res.code, res.msg);
            return <UserSocial user_id={user.id} social={{ username: body.username, platform: body.platform }} editable={true} />;
        }, {
            body: t.Object({
                username: t.String(),
                platform: t.String()
            })
        })
        .delete("/delete/:platform", async ({ params, cookie, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const res = await deleteSocial(user.id, params.platform);
            if (res.error) return error(res.code, res.msg);
            return <></>;
        })
        .post("/sort", async ({ jwt, cookie, body, params }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const res = await sortSocials(Number(params.id), body.platforms);
            if (res.error) return error(res.code, res.msg);
            return res.msg;
        }, {
            body: t.Object({
                platforms: t.Array(t.String())
            })
        })
    )
    .group("/skins", _ => _
        .put("/submit", async ({ params, cookie, body, jwt }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const res = await addSkin(Number(params.id), body.skin_id);
            if (res.error) return error(res.code, res.msg);
            return <SkinCard user_id={user.id} skin_id={body.skin_id} index={res?.id || 0} editable />
        }, {
            body: t.Object({
                skin_id: t.String()
            })
        })
        .delete("/delete/:skin_id", async ({ params, cookie, jwt, query }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const res = await deleteSkin(Number(params.id), `${params.skin_id}${query.v ? `?v=${query.v}` : ""}`);
            if (res.error) return error(res.code, res.msg);
            return res.msg;
        }, {
            query: t.Optional(t.Object({
                v: t.Optional(t.String())
            }))
        })
        .post("/sort", async ({ jwt, cookie, body, params }) => {
            const user = await verifyUser(jwt, cookie);
            if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
            const res = await sortSkins(Number(params.id), body.skins);
            if (res.error) return error(res.code, res.msg);
            return res.msg;
        }, {
            body: t.Object({
                skins: t.Array(t.String())
            })
        })
    )
