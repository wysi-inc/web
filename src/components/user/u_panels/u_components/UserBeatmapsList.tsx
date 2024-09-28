import type { BeatmapCategory } from "@/src/types/osu";
import BeatmapsetCard from "@/src/components/beatmap/BeatmapsetCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { api_user_beatmaps } from "@/src/api/user";

async function UserBeatmapsList(p: {
    id: number;
    category: BeatmapCategory;
    offset: number;
    limit: number;
}) {

    const beatmaps = await api_user_beatmaps(p.id, p.category,
        { offset: p.offset, limit: p.limit }
    );

    if (!beatmaps) return <div>No {p.category} beatmaps</div>;

    return (<>
        {beatmaps.map((beatmap) =>
            <BeatmapsetCard b_set={beatmap} />
        )}
        {beatmaps.length >= p.limit ?
            <LoadMoreButton url={`/users/${p.id}/0/lists/beatmapsets/${p.category}?offset=${p.offset + p.limit}&limit=20`} />
            : <></>}
    </>)
}

export default UserBeatmapsList;
