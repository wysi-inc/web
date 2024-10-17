import { getBeatmaps } from "@/src/db/beatmaps/get_beatmaps";
import type { BeatmapQuery } from "@/src/types/beatmaps";
import LoadMoreButton from "../web/LoadMoreButton";
import BeatmapsetCard from "./BeatmapsetCard";

async function BeatmapsList(p: {
    body?: BeatmapQuery,
    offset: string
}) {
    const res = await getBeatmaps(p.body, p.offset);
    if (res.error) return <></>;

    const sets = res.data;

    if (sets.length === 0) return <></>;

    return (<>
        {sets.map((set) =>
            <BeatmapsetCard b_set={set} />
        )}
        {sets.length < 50 ? null :
            <LoadMoreButton url={`/beatmapsets/list/${sets.length + (Number(p.offset) || 0)}`} include="#search-form" />
        }
    </>);
}

export default BeatmapsList;
