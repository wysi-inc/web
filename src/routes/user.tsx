import { Elysia, error, t } from "elysia";
import BeatmapCollectionList from "../components/beatmap/BeatmapCollectionList";
import UserPage from "../components/user/UserPage";
import UserBeatmapsPanel from "../components/user/u_panels/UserBeatmapsPanel";
import UserCollectionsPanel from "../components/user/u_panels/UserCollectionsPanel";
import UserMostPanel from "../components/user/u_panels/UserMostPanel";
import UserScoresPanel from "../components/user/u_panels/UserScoresPanel";
import UserSetupPanel from "../components/user/u_panels/UserSetupPanel";
import UserSkinsPanel, { SkinCard } from "../components/user/u_panels/UserSkinsPanel";
import UserSocial from "../components/user/u_panels/UserSocial";
import UserSummaryPanel from "../components/user/u_panels/UserSummaryPanel";
import UserYearPanel from "../components/user/u_panels/UserYearPanel";
import CollectionsForm from "../components/user/u_panels/u_components/CollectionsForm";
import UserBeatmapsList from "../components/user/u_panels/u_components/UserBeatmapsList";
import UserMostList from "../components/user/u_panels/u_components/UserMostList";
import UserScoresList from "../components/user/u_panels/u_components/UserScoresList";
import Alert from "../components/web/Alert";
import {
    addSkin,
    deleteCollections,
    deleteSkin,
    deleteSocial,
    getCollectionFile,
    saveCollection,
    saveSetup,
    saveSocial,
    sortSkins,
    sortSocials,
    updateDan,
} from "../db/users/update_user";
import HtmxPage from "../libs/routes";
import { fixURL } from "../libs/web_utils";
import type { BeatmapCategory, Mode, ScoreCategory } from "../types/osu";
import { plugins } from "./plugins";
import { api_user_details } from "../api/user";

const user_routes_data = new Elysia().use(plugins).group("/:id", (_) =>
    _.onBeforeHandle(async ({ request, set, user }) => {
        let url = request.url;
        let url_split = request.url.split("/");
        let redirect = false;
        if (url_split[3] !== "users") {
            url = fixURL(3, "users", url);
            redirect = true;
        }
        id_if: if (!Number(url_split[4])) {
            const res = await api_user_details(url_split[4], undefined, user);
            if (res.error) break id_if;
            url = fixURL(4, res.data.id, url);
            redirect = true;
        }
        if (redirect) {
            console.log("redirecting to: ", url);
            set.redirect = url;
            set.status = 302;
            return url;
        }
    })
        .get("/", async ({ lang, request, set, params, user }) => (
            <HtmxPage lang={lang} req={request} set={set} user={user}>
                <UserPage lang={lang} user_id={params.id} logged={user} />
            </HtmxPage>
        ))
        .group("/:mode", (_) =>
            _.get("/", ({ lang, request, set, params, user }) => (
                <HtmxPage lang={lang} req={request} set={set} user={user}>
                    <UserPage lang={lang} logged={user} user_id={params.id} mode={params.mode as Mode} />
                </HtmxPage>
            ))
                .group("/panels", (_) =>
                    _.post("/scores/:category", ({ params, user }) => (
                        <UserScoresPanel user_id={Number(params.id)} mode={params.mode as Mode} category={params.category as ScoreCategory} user={user} />
                    ))
                        .post("/beatmapsets/:category", ({ params, user }) => (
                            <UserBeatmapsPanel id={Number(params.id)} category={params.category as BeatmapCategory} user={user} />
                        ))
                        .post("/summary", ({ params, user }) => <UserSummaryPanel user_id={Number(params.id)} mode={params.mode as Mode} user={user} />)
                        .post("/collections", ({ params, user }) => <UserCollectionsPanel user_id={Number(params.id)} logged_id={user?.id} />)
                        .post("/most", ({ params, user }) => <UserMostPanel user_id={Number(params.id)} user={user} />)
                        .post("/year", ({ params, user }) => (
                            <UserYearPanel user_id={Number(params.id)} mode={params.mode as Mode} logged_id={user?.id} user={user} />
                        ))
                        .post("/setup", ({ lang, params, user }) => <UserSetupPanel lang={lang} logged_id={user?.id} page_id={Number(params.id)} />)
                        .post("/skins", ({ params, user }) => <UserSkinsPanel user_id={Number(params.id)} logged_id={user?.id} />)
                )
                .group("/lists", (_) =>
                    _.post("/scores/:category", ({ params, query, user }) => (
                        <UserScoresList
                            id={Number(params.id)}
                            mode={params.mode as Mode}
                            category={params.category as ScoreCategory}
                            offset={Number(query.offset)}
                            limit={Number(query.limit)}
                            user={user}
                        />
                    ))
                        .post("/beatmapsets/:category", ({ params, query, user }) => (
                            <UserBeatmapsList
                                id={Number(params.id)}
                                category={params.category as BeatmapCategory}
                                offset={Number(query.offset)}
                                limit={Number(query.limit)}
                                user={user}
                            />
                        ))
                        .post("/most", ({ params, query, user }) => (
                            <UserMostList id={Number(params.id)} offset={Number(query.offset)} limit={Number(query.limit)} user={user} />
                        ))
                        .post("/collections/:name", ({ params, query }) => (
                            <BeatmapCollectionList user_id={Number(params.id)} collection_name={params.name} offset={Number(query.offset)} />
                        ))
                )
        )
        .put(
            "/dan",
            async ({ params, body, user }) => {
                if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                const res = await updateDan(user.id, body.dan);
                if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                return ":D done";
            },
            {
                body: t.Object({
                    dan: t.String(),
                }),
            }
        )
        .group("/setup", (_) =>
            _.put("/submit", async ({ lang, params, body, user }) => {
                if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                const res = await saveSetup(user.id, body);
                if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                return <UserSetupPanel lang={lang} setup={res.data} logged_id={user.id} page_id={user.id} />;
            }).delete("/delete/:section", async ({ lang, params, body, user }) => {
                if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
                const res = await saveSetup(user.id, body);
                if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                return <UserSetupPanel lang={lang} setup={res.data} logged_id={user.id} page_id={user.id} />;
            })
        )
        .group("/collections", (_) =>
            _.post(
                "/parse",
                async ({ params, body, user }) => {
                    if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                    return <CollectionsForm file={body.collection} user_id={user.id} />;
                },
                {
                    body: t.Object({
                        collection: t.Any(),
                    }),
                }
            )
                .put("/submit", async ({ params, body, user }) => {
                    if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                    const collections = await saveCollection(body as any, user.id);
                    return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} collections={collections as any} />;
                })
                .delete("/delete", async ({ params, user }) => {
                    if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                    await deleteCollections(user.id);
                    return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user.id} />;
                })
                .get("/download", async ({ params }) => {
                    return await getCollectionFile(Number(params.id));
                })
        )
        .group("/socials", (_) =>
            _.put(
                "/submit",
                async ({ params, body, user }) => {
                    if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                    const res = await saveSocial(user.id, body.username, body.platform);
                    if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                    return <UserSocial user_id={user.id} social={{ username: body.username, platform: body.platform }} editable={true} />;
                },
                {
                    body: t.Object({
                        username: t.String(),
                        platform: t.String(),
                    }),
                }
            )
                .delete("/delete/:platform", async ({ params, user }) => {
                    if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                    const res = await deleteSocial(user.id, params.platform);
                    if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                })
                .post(
                    "/sort",
                    async ({ params, body, user }) => {
                        if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                        const res = await sortSocials(Number(params.id), body.platforms);
                        if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                        return res.data;
                    },
                    {
                        body: t.Object({
                            platforms: t.Array(t.String()),
                        }),
                    }
                )
        )
        .group("/skins", (_) =>
            _.put(
                "/submit",
                async ({ params, body, user }) => {
                    if (!user || Number(params.id) !== user.id) return error(401, "Unauthorized");
                    const res = await addSkin(Number(params.id), body.skin_id);
                    if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                    return <SkinCard user_id={user.id} skin_id={body.skin_id} index={res.data} editable />;
                },
                {
                    body: t.Object({
                        skin_id: t.String(),
                    }),
                }
            )
                .delete(
                    "/delete/:skin_id",
                    async ({ params, query, user }) => {
                        if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                        const res = await deleteSkin(Number(params.id), `${params.skin_id}${query.v ? `?v=${query.v}` : ""}`);
                        if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                        return res.data;
                    },
                    {
                        query: t.Optional(
                            t.Object({
                                v: t.Optional(t.String()),
                            })
                        ),
                    }
                )
                .post(
                    "/sort",
                    async ({ params, body, user }) => {
                        if (!user || Number(params.id) !== user.id) return error(401, <Alert type="error" msg="Unauthorized" />);
                        const res = await sortSkins(Number(params.id), body.skins);
                        if (res.error) return error(res.code, <Alert type="error" msg={res.data} />);
                        return res.data;
                    },
                    {
                        body: t.Object({
                            skins: t.Array(t.String()),
                        }),
                    }
                )
        )
);

export const user_routes = new Elysia()
    .use(new Elysia({ prefix: "/u" }).use(user_routes_data))
    .use(new Elysia({ prefix: "/user" }).use(user_routes_data))
    .use(new Elysia({ prefix: "/users" }).use(user_routes_data));
