import { api_user_beatmaps } from "@/src/api/user";
import BeatmapsetCard from "@/src/components/beatmap/BeatmapsetCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { RESULT_LIMIT } from "@/src/libs/constants";
import type { BeatmapCategory } from "@/src/types/osu";
import type { UserCookie } from "@/src/types/users";

async function UserBeatmapsList(p: {
    id: number,
    category: BeatmapCategory,
    offset: number,
    limit: number,
    user?: UserCookie | null
}) {

    const res = await api_user_beatmaps(p.id, p.category, {
        offset: p.offset,
        limit: p.limit
    }, p.user);

    if (res.error) return <div>No {p.category} beatmaps</div>;

    const beatmaps = res.data;

    return (<>
        {beatmaps.map((beatmap) =>
            <BeatmapsetCard b_set={beatmap} />
        )}
        {beatmaps.length >= p.limit ?
            <LoadMoreButton
                after="getChokes()"
                url={`/users/${p.id}/0/lists/beatmapsets/${p.category}?offset=${p.offset + p.limit}&limit=${RESULT_LIMIT.USER.BEATMAPS}`} />
            : null}
    </>)
}

export default UserBeatmapsList;
