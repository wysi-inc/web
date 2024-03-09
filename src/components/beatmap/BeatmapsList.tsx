import type { BeatmapQuery, Beatmapset, BeatmapsetStatusQuery } from "@/src/types/beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import { getBeatmaps } from "@/src/get/beatmaps";
import type { Mode } from "@/src/types/osu";

type Props = {
    body?: BeatmapQuery,
    cursor?: string
}

const BeatmapsList = async (props: Props) => {

    let res;
    let mode;
    let section;

    if (props.body) {
        mode = props.body.mode as Mode;
        section = props.body.status as BeatmapsetStatusQuery;
        res = await getBeatmaps(props.body, props.cursor);
    }

    if (!res) {
        return <></>;
    }

    const sets: Beatmapset[] = res.beatmapsets as any[];

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
