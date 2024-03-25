import { v2 } from "osu-api-extended";
import type { Mode, ScoreCategory } from "@/src/types/osu";
import type { Score } from "@/src/types/users";
import ScoreCard from "@/src/components/score/ScoreCard";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
    offset: number;
    limit: number;
}

const UserScoresList = async ({ id, mode, category, offset, limit }: Props) => {

    const scores: Score[] = await v2.scores.user.category(id, category, {
        mode: mode,
        offset: String(offset),
        limit: String(limit)
    });

    if (!scores || scores.length === 0) return <div>No {category} scores found</div>;

    return (<>
        {scores.map((score, i) =>
            <ScoreCard position={i + offset + 1} score={score} />
        )}
        {scores.length < limit ? null : <>
            <button class="btn btn-success btn-sm flex flex-row gap-2"
                hx-post={`/users/${id}/${mode}/lists/scores/${category}?offset=${offset + limit}&limit=20`}
                hx-swap="outerHTML">
                <div>Load more</div>
                <span class="htmx-indicator loading loading-spinner loading-md" />
            </button>
        </>}
    </>)
}

export default UserScoresList;
