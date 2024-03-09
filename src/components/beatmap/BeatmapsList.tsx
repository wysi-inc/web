import type { BeatmapQuery, Beatmapset, BeatmapsetStatusQuery } from "@/src/types/beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import { getBeatmaps, getBeatmapsCursor } from "@/src/get/beatmaps";
import type { Mode } from "@/src/types/osu";

type Props = {
    body?: BeatmapQuery,
    query?: {
        cursor?: string,
        mode?: string,
        section?: string
    }
}

const BeatmapsList = async (props: Props) => {

    let res;
    let mode;
    let section;

    if (props.body) {
        mode = props.body.mode as Mode;
        section = props.body.status as BeatmapsetStatusQuery;
        res = await getBeatmaps(props.body);
    } else if (props.query) {
        mode = props.query?.mode as Mode;
        section = props.query?.section as BeatmapsetStatusQuery;
        res = await getBeatmapsCursor(mode, section, props.query.cursor || "");
    } else {
        return <></>;
    }

    if (!res) {
        return <></>;
    }

    console.log(res.beatmapsets.length, res.beatmapsets[0].title);

    const sets: Beatmapset[] = res.beatmapsets as any[];

    return (<>
        {sets.map((set) =>
            <BeatmapsetCard beatmapset={set} />
        )}
        {sets.length < 50 ? null :
            <button class="col-span-full btn btn-success btn-sm flex flex-row gap-2"
                hx-get={`/beatmaps/list?mode=${mode}&section=${section}&cursor=${res.cursor_string}`}
                hx-swap="outerHTML">
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
            </button>
        }
    </>
    );
}

export default BeatmapsList;
