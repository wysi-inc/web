import { getBeatmaps } from "@/src/db/beatmaps/get_beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import type { BeatmapQuery, Beatmapset } from "@/src/types/beatmaps";
import LoadMoreButton from "../web/LoadMoreButton";

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
            <LoadMoreButton url={`/beatmapsets/list/${res.cursor_string}`} include="#search-form" />
        }
    </>
    );
}

export default BeatmapsList;
