import type { Mode } from "@/src/types/osu";

type Props = {
    user_id: number,
    mode: Mode
}

function SubdivisionRanking(p: Props) {
    return (
        <h2 class="subdivision_ranking hidden text-xl" data-user-id={p.user_id} data-user-mode={p.mode} />
    );
}

export default SubdivisionRanking;
