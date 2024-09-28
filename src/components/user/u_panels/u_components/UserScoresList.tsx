import type { Mode, ScoreCategory } from "@/src/types/osu";
import ScoreCard from "@/src/components/score/ScoreCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { api_scores_user_category } from "@/src/api/score";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
    offset: number;
    limit: number;
}

const UserScoresList = async (p: Props) => {

    const scores = await api_scores_user_category(
        p.id, p.category,
        {
            mode: p.mode,
            offset: p.offset,
            limit: p.limit
        }
    );

    if (!scores) return <></>;
    if (scores.length === 0 && p.offset === 0) return <div>This user hasn't set any scores yet</div>;

    return <>
        {scores.map((score, i) =>
            <ScoreCard position={i + p.offset + 1} score={score} />
        )}
        {scores.length >= p.limit ?
            <LoadMoreButton url={`/users/${p.id}/${p.mode}/lists/scores/${p.category}?offset=${p.offset + p.limit}&limit=20`} />
            : <></>}
    </>
}

export default UserScoresList;
