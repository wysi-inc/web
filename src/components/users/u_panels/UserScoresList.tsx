import { v2 } from "osu-api-extended";
import type { Mode } from "@/src/types/osu";
import type { Score, ScoreCategory } from "@/src/types/users";
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

    return (<>
        {scores.map((score, i) =>
            <ScoreCard position={i + props.offset + 1} score={score} />
        )}
        {scores.length < props.limit ? null :
            <button class="btn btn-success btn-sm flex flex-row gap-2 mx-auto" hx-swap="outerHTML"
                hx-post={`/users/${props.id}/${props.mode}/scores/${props.category}/list?offset=${props.offset + props.limit}`}>
                <i class="fa-solid fa-angle-down" />
                <div>Load more</div>
                <i class="fa-solid fa-angle-down" />
            </button>
        }
    </>)
}

export default UserScoresList;
