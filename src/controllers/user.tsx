import { getPage } from "../resources/pages"
import type { BeatmapCategory, Mode, ScoreCategory } from "../types/osu"
import type { ProfileMedal } from "../types/medals"
import UserPage from "../components/user/UserPage"
import UserBeatmapsPanel from "../components/user/u_panels/UserBeatmapsPanel"
import UserScoresPanel from "../components/user/u_panels/UserScoresPanel"
import UserSummaryPanel from "../components/user/u_panels/UserSummaryPanel"
import UserMostPanel from "../components/user/u_panels/UserMostPanel"
import UserSkinsPanel from "../components/user/u_panels/UserSkinsPanel"
import UserSetupPanel from "../components/user/u_panels/UserSetupPanel"
import UserMedalsPanel from "../components/user/u_panels/UserMedalsPanel"
import UserScoresList from "../components/user/u_panels/u_components/UserScoresList"
import UserBeatmapsList from "../components/user/u_panels/u_components/UserBeatmapsList"
import UserMostList from "../components/user/u_panels/u_components/UserMostList"
import { verifyUser } from "../resources/functions"

export const userPageController = async ({ request, set, params, html, jwt, cookie: { auth } }: any): Promise<Response> => {
    const user = await verifyUser(jwt, auth);
    return getPage(request, html, set, user,
        <UserPage id={params.id} mode={params.mode} />
    )
}

export const userScoresPanelController = ({ params, html }: any): Response => {
    return html(
        <UserScoresPanel id={Number(params.id)} mode={params.mode as Mode} category={params.category as ScoreCategory} />
    )
}


export const userBeatmapsPanelController = ({ params, html }: any): Response => {
    return html(
        <UserBeatmapsPanel id={Number(params.id)} category={params.category as BeatmapCategory} />
    )
}

export const userSummaryPanelController = ({ params, html }: any): Response => {
    return html(
        <UserSummaryPanel id={Number(params.id)} mode={params.mode} />
    )
}

export const userMostPanelController = ({ params, html }: any): Response => {
    return html(
        <UserMostPanel id={Number(params.id)} />
    )
}

export const userSkinsPanelController = ({ params, html }: any): Response => {
    return html(
        <UserSkinsPanel id={Number(params.id)} />
    )
}

export const userSetupPanelController = ({ params, html }: any): Response => {
    return html(
        <UserSetupPanel id={Number(params.id)} />
    )
}

export const userMedalsPanelController = ({ body, html }: any): Response => {
    const medals: ProfileMedal[] = (body as any)?.medals?.map((m: string) => JSON.parse(m) as ProfileMedal);
    return html(
        <UserMedalsPanel user_medals={medals} />
    )
}

export const userScoresListController = ({ params, query, html }: any): Response => {
    return html(
        <UserScoresList id={Number(params.id)}
            mode={params.mode as Mode}
            category={params.category as ScoreCategory}
            offset={Number(query.offset)}
            limit={Number(query.limit)}
        />
    )
}

export const userBeatmapsListController = ({ params, query, html }: any): Response => {
    return html(
        <UserBeatmapsList id={Number(params.id)}
            category={params.category as BeatmapCategory}
            offset={Number(query.offset)}
            limit={Number(query.limit)}
        />
    )
}

export const userMostListController = ({ params, query, html }: any): Response => {
    return html(
        <UserMostList id={Number(params.id)} offset={Number(query.offset)} limit={Number(query.limit)} />
    )
}
