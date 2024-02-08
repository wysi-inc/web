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
            <div id="load-more-button" class="flex flex-col items-center gap-2">
                <button class="btn btn-success btn-sm flex flex-row gap-2" hx-target="#load-more-button" hx-swap="outerHTML"
                    hx-post={`/users/${props.id}/${props.mode}/scores/${props.category}/list?offset=${props.offset + props.limit}`}
                    hx-indicator="#scores-loading" >
                    <i class="fa-solid fa-angle-down" />
                    <div>Load more</div>
                    <i class="fa-solid fa-angle-down" />
                </button>
                <span id="scores-loading" class="htmx-indicator loading loading-spinner loading-md" />
            </div>
        }
    </>)
}

export default UserScoresList;
