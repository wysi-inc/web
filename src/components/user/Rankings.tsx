import type { Category, Mode } from "@/src/types/osu";
import Pagination from "./u_panels/u_components/Pagination";
import UserRankingCard from "./UserRankingCard";
import { getRankings } from "@/src/db/users/get_user";
import { getSubdivisions } from "@/src/libs/web_utils";

type Props = {
    mode: Mode;
    category: Category;
    page: number;
}

async function Rankings({ mode, category, page }: Props) {

    const users = await getRankings(mode, category, page);

    if ((users as any).error) return <div>Rankings not found</div>;
    if (!users) return <div>Loading...</div>;
    if (!users.ranking) return <div>No users found</div>;

    const subdivisions = await getSubdivisions(users.ranking.map(u => u.user.id));

    return (<>
        <Pagination mode={mode} category={category} page={page} />
        <table class="table p-4 bg-base-100 rounded-lg">
            <tr>
                <th></th>
                <th>User</th>
                <th class="hidden sm:table-cell">PP</th>
                <th class="hidden sm:table-cell">Ranked Score</th>
                <th class="hidden md:table-cell">Accuracy</th>
                <th class="hidden lg:table-cell">Play Time</th>
                <th class="hidden lg:table-cell">Play Count</th>
                <th>Status</th>
            </tr>
            {users.ranking.map((row, i) =>
                <UserRankingCard row={row} page={page} index={i} subdivision={subdivisions.get(row.user.id)} />
            )}
        </table>
        <Pagination mode={mode} category={category} page={page} />
    </>);
}

export default Rankings;
