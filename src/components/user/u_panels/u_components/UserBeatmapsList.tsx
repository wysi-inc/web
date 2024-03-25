import { v2 } from "osu-api-extended";
import type { BeatmapCategory } from "@/src/types/osu";
import type { Beatmapset } from "@/src/types/beatmaps";
import BeatmapsetCard from "@/src/components/beatmap/BeatmapsetCard";

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

    if (!beatmaps || beatmaps.length === 0) return <div>No {category} beatmaps</div>;

    return (<>
        {beatmaps.map((beatmap) =>
            <BeatmapsetCard beatmapset={beatmap} />
        )}
        {beatmaps.length < limit ? null :
            <>
                <button class="btn btn-success btn-sm flex flex-row gap-2 col-span-full"
                    hx-post={`/users/${id}/0/lists/beatmaps/${category}?offset=${offset + limit}&limit=20`}
                    hx-swap="outerHTML">
                    <div>Load more</div>
                    <span class="htmx-indicator loading loading-spinner loading-md" />
                </button>
            </>}
    </>)
}

export default UserBeatmapsList;
