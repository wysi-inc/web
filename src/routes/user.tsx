import { Elysia, t } from 'elysia'
import type { BeatmapCategory, Mode, ScoreCategory } from '../types/osu';
import type { ProfileMedal } from '../types/medals';
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
import { saveCollection, saveSetup } from '../db/users/update_user';
import fs from "fs";
//@ts-ignore
import OsuDBParser from "osu-db-parser";
import type { v1Beatmap } from '../types/beatmaps';
import { v1 } from 'osu-api-extended';
import type { CollectionDB } from '../models/CollectionDB';
import UserCollectionsPanel from '../components/user/u_panels/UserCollectionsPanel';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    //@ts-ignore
    .get("/", async ({ request, cookie, params, jwt }) => {
        const user = await verifyUser(jwt, cookie.auth.value);
        return <>
            <HtmxPage headers={request.headers} user={user}>
                <UserPage id={params.id} logged_id={user?.id} />
            </HtmxPage>
        </>
    })
    //@ts-ignore
    .post("/setup", async ({ params, set, cookie: { auth }, body, jwt }) => {
        const user = await verifyUser(jwt, auth.value);
        if (!user) {
            set.status = 401;
            return "Unauthorized";
        }

        if (Number(params.id) != user.id) return;

        const setup = await saveSetup(user.id, body);
        if (!setup) return "Failed to save setup, reload the page and try again.";
        return <UserSetupPanel setup={setup} logged_id={user.id} page_id={user.id} />
    })
    //@ts-ignore
    .post("/collections", async ({ params, set, cookie: { auth }, body, jwt }) => {

        const user = await verifyUser(jwt, auth.value);
        if (!user) {
            set.status = 401;
            return "Unauthorized";
        }

        if (Number(params.id) != user.id) return;

        let collectionBuffer = Buffer.from(await body.collection.arrayBuffer());
        const collectionDB = new OsuDBParser(null, collectionBuffer); // Yeah, that's okay

        let osuCollectionData = collectionDB.getCollectionData(); // This is collection.db data you can make with this all that you want.
        const osuCollectionDB: CollectionDB = {
            user_id: user.id,
            collections: osuCollectionData.collection.map((c: any) => ({
                name: c.name,
                beatmapsMd5: c.beatmapsMd5
            }))
        };

        console.log(osuCollectionDB);
        saveCollection(osuCollectionDB);
    }, {
        body: t.Object({
            collection: t.Any()
        })
    })
    .group("/:mode", (_) => _
        //@ts-ignore
        .get("/", async ({ request, cookie: { auth }, params, jwt }) => {
            const user = await verifyUser(jwt, auth.value);
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
            //@ts-ignore
            .post("/collections", async ({ cookie: { auth }, params, jwt }) => {
                const user = await verifyUser(jwt, auth.value);
                return <UserCollectionsPanel user_id={Number(params.id)} logged_id={user?.id} />
            })
            .post("/most", ({ params }) => (
                <UserMostPanel id={Number(params.id)} />
            ))
            .post("/skins", ({ params }) => (
                <UserSkinsPanel id={Number(params.id)} />
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
