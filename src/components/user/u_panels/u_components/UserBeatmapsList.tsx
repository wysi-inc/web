import { v2 } from "osu-api-extended";
import type { BeatmapCategory } from "@/src/types/osu";
import type { Beatmapset } from "@/src/types/beatmaps";
import BeatmapsetCard from "@/src/components/beatmap/BeatmapsetCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { apicall } from "@/index";

type Props = {
    id: number;
    category: BeatmapCategory;
    offset: number;
    limit: number;
}

const UserBeatmapsList = async ({ id, category, offset, limit }: Props) => {

    const beatmaps: Beatmapset[] = await v2.user.beatmaps.category(id, category, {
        offset: offset,
        limit: limit
    }) as any;
    apicall();

    if (!beatmaps || beatmaps.length === 0) return <div>No {category} beatmaps</div>;

    return (<>
        {beatmaps.map((beatmap) =>
            <BeatmapsetCard beatmapset={beatmap} />
        )}
        {beatmaps.length >= limit ?
            <LoadMoreButton url={`/users/${id}/0/lists/beatmapsets/${category}?offset=${offset + limit}&limit=20`} />
            : <></>}
    </>)
}

export default UserBeatmapsList;
