import { v2 } from "osu-api-extended";
import type { Mode, ScoreCategory } from "@/src/types/osu";
import type { Score } from "@/src/types/users";
import ScoreCard from "@/src/components/scores/ScoreCard";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
    offset: number;
    limit: number;
}

const UserScoresList = async (props: Props) => {

    const scores: Score[] = await v2.scores.user.category(props.id, props.category, {
        mode: props.mode,
        offset: String(props.offset),
        limit: String(props.limit)
    });

    if (scores.length === 0) return <div>No scores found</div>;

    return (<>
        {scores.map((score, i) =>
            <ScoreCard position={i + props.offset + 1} score={score} />
        )}
        {scores.length < props.limit ? null : <>
            <button class="btn btn-success btn-sm flex flex-row gap-2"
                hx-post={`/users/${props.id}/${props.mode}/scores/${props.category}/list?offset=${props.offset + props.limit}&limit=20`}
                hx-swap="outerHTML">
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
            </button>
        </>}
    </>)
}

export default UserScoresList;
