import type { Category, Mode } from "@/src/types/osu";
import Pagination from "./u_panels/u_components/Pagination";
import UserRankingCard from "./UserRankingCard";
import { getRankings } from "@/src/db/users/get_user";
import Title from "../web/Title";
import { apicall } from "@/index";

async function Rankings(p: {
    mode: Mode;
    category: Category;
    page: number;
    country?: string
}) {

    const users = await getRankings(p.mode, p.category, p.page, p.country);
    apicall();

    if ((users as any).error) return <div>Rankings not found</div>;
    if (!users) return <div>Loading...</div>;
    if (!users.ranking) return <div>No users found</div>;

    return (<>
        <Title title="Rankings" />
        <Pagination mode={p.mode} category={p.category} page={p.page} />
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
                <UserRankingCard row={row} page={p.page} index={i} />
            )}
        </table>
        <Pagination mode={p.mode} category={p.category} page={p.page} />
        <script>lazyLoader.update(); getUserStuff();</script>
    </>);
}

export default Rankings;
