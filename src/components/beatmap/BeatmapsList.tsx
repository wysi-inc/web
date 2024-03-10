import { getBeatmaps } from "@/src/get/beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import type { BeatmapQuery, Beatmapset } from "@/src/types/beatmaps";

type Props = {
    body?: BeatmapQuery,
    cursor?: string
}

const BeatmapsList = async (props: Props) => {

    const res = await getBeatmaps(props.body, props.cursor);

    if (!res) {
        return <></>;
    }

    const sets: Beatmapset[] = res.beatmapsets as any[];

    if (!sets) {
        return <></>;
    }

    return (<>
        {sets.map((set) =>
            <BeatmapsetCard beatmapset={set} />
        )}
        {sets.length < 50 ? null :
            <button hx-post={`/beatmaps/list/${res.cursor_string}`} hx-trigger="click"
                hx-swap="outerHTML" hx-include="#search-form"
                class="col-span-full btn btn-success btn-sm flex flex-row gap-2">
                Load more
            </button>
        }
    </>
    );
}

export default BeatmapsList;
