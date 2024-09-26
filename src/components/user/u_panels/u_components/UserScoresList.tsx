import { v2 } from "osu-api-extended";
import type { Mode, ScoreCategory } from "@/src/types/osu";
import type { Score } from "@/src/types/users";
import ScoreCard from "@/src/components/score/ScoreCard";
import LoadMoreButton from "@/src/components/web/LoadMoreButton";
import { apicall } from "@/src/tasks/logs";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
    offset: number;
    limit: number;
}

const UserScoresList = async (p: Props) => {

    const scores: Score[] = await v2.scores.user.category(p.id, p.category, {
        mode: p.mode,
        offset: String(p.offset),
        limit: String(p.limit)
    });
    apicall();

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
