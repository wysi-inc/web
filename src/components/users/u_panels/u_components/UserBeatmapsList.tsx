import { v2 } from "osu-api-extended";
import type { BeatmapCategory } from "@/src/types/osu";
import BeatmapsetCard from "@/src/components/beatmaps/BeatmapsetCard";
import type { Beatmapset } from "@/src/types/beatmaps";

type Props = {
    id: number;
    category: BeatmapCategory;
    offset: number;
    limit: number;
}

const UserBeatmapsList = async (props: Props) => {

    const res = await v2.user.beatmaps.category(props.id, props.category, {
        offset: props.offset,
        limit: props.limit
    }) as any;

    if (res.length === 0) return <div>No beatmaps found</div>;

    const beatmaps: Beatmapset[] = res;

    return (<>
        {beatmaps.map((beatmap) =>
            <BeatmapsetCard beatmapset={beatmap} />
        )}
        {beatmaps.length < props.limit ? null :
            <>
                <button class="btn btn-success btn-sm flex flex-row gap-2 col-span-full"
                    hx-post={`/users/${props.id}/0/beatmaps/${props.category}/list?offset=${props.offset + props.limit}`}
                    hx-swap="outerHTML">
                    <div>Load more</div>
                    <span class="htmx-indicator loading loading-spinner loading-md" />
                </button>
            </>}
    </>)
}

export default UserBeatmapsList;
