import type { BeatmapQuery } from "@/src/types/beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import { getBeatmaps } from "@/src/get/beatmaps";

type Props = {
    query: BeatmapQuery,
}

const BeatmapsList = async (props: Props) => {

    const sets = await getBeatmaps(props.query);

    return (<>
        {sets.map(set =>
            <BeatmapsetCard beatmapset={set} />
        )}
        {sets.length < 50 ? null :
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
