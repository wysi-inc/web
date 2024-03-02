import type { BeatmapQuery } from "@/src/types/beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import { getBeatmaps } from "@/src/get/beatmaps";

type Props = {
    query: BeatmapQuery,
}

const BeatmapsList = async (props: Props) => {

    const beatmaps = await getBeatmaps(props.query);

    return (<>
        {beatmaps.map(beatmapset =>
            <BeatmapsetCard beatmapset={beatmapset} />
        )}
        {beatmaps.length < 50 ? null :
            <button class="col-span-full btn btn-success btn-sm flex flex-row gap-2"
                hx-post={""}
                hx-swap="outerHTML">
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
            </button>
        }
    </>
    );
}

export default BeatmapsList;
