import { Elysia } from 'elysia'
import { html } from "@elysiajs/html";
import {
    userBeatmapsListController,
    userBeatmapsPanelController,
    userMedalsPanelController,
    userMostListController,
    userMostPanelController,
    userPageController,
    userScoresListController,
    userScoresPanelController,
    userSetupPanelController,
    userSkinsPanelController,
    userSummaryPanelController,
} from '../controllers/user';

export const userRoutes = new Elysia({ prefix: '/users/:id' })
    .use(html())
    .get("/", userPageController)
    .group("/:mode", (_) => _
        .get("/", userPageController)
        .group("/panels", (_) => _
            .post("/scores/:category", userScoresPanelController)
            .post("/beatmaps/:category", userBeatmapsPanelController)
            .post("/summary", userSummaryPanelController)
            .post("/most", userMostPanelController)
            .post("/skins", userSkinsPanelController)
            .post("/setup", userSetupPanelController)
            .post("/medals", userMedalsPanelController)
        )
        .group("/lists", (_) => _
            .post("/scores/:category", userScoresListController)
            .post("/beatmaps/:category", userBeatmapsListController)
            .post("/most", userMostListController)
        )
    )
