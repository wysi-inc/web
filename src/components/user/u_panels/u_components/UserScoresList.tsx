import { v2 } from "osu-api-extended";
import type { Mode, ScoreCategory } from "@/src/types/osu";
import type { Score } from "@/src/types/users";
import ScoreCard from "@/src/components/score/ScoreCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";

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

    return <>
        {scores.map((score, i) =>
            <ScoreCard position={i + offset + 1} score={score} />
        )}
        {scores.length >= limit ?
            <LoadMoreButton url={`/users/${id}/${mode}/lists/scores/${category}?offset=${offset + limit}&limit=20`} />
            : <></>}
    </>
}

export default UserScoresList;
