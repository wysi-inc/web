import { getPage } from "../resources/pages"
import type { Mode } from "../types/osu"
import BeatmapScoreTable from "../components/beatmap/BeatmapScoreTable"
import Beatmaps from "../components/beatmap/Beatmaps"
import BeatmapsList from "../components/beatmap/BeatmapsList"
import BeatmapsetPage from "../components/beatmap/BeatmapsetPage"

export const beatmapsController = ({ request, set, html }: any): Response => {
    return getPage(request, html, set,
        <Beatmaps />
    )
}

export const beatmapsetController = ({ request, set, params, html }: any): Response => {
    return getPage(request, html, set,
        <BeatmapsetPage
            set_id={Number(params.set_id)}
            beatmap_id={Number(params.beatmap_id)}
        />
    )
}

export const beatmapsetScoresController = ({ html, params }: any): Response => {
    return html(
        <BeatmapScoreTable
            id={Number(params.beatmap_id)}
            mode={params.mode as Mode}
        />
    )
}

export const beatmapsetListController = ({ html, body, params }: any): Response => {
    return html(
        <BeatmapsList
            body={body}
            cursor={params?.cursor}
        />
    )
}
