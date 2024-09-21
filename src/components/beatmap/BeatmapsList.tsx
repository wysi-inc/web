import { getBeatmaps } from "@/src/db/beatmaps/get_beatmaps";
import BeatmapsetCard from "./BeatmapsetCard";
import type { BeatmapQuery } from "@/src/types/beatmaps";
import LoadMoreButton from "../web/LoadMoreButton";

async function BeatmapsList(p: {
    body?: BeatmapQuery,
    offset: string
}) {
    const res = await getBeatmaps(p.body, p.offset);
    if (res.sets.length === 0) return <></>;

    return (<>
        {res.sets.map((set) =>
            <BeatmapsetCard beatmapset={set} />
        )}
        {res.sets.length < 50 ? null :
            <LoadMoreButton url={`/beatmapsets/list/${res.offset}`} include="#search-form" />
        }
        <script>lazyLoader.update()</script>
    </>);
}

export default BeatmapsList;
