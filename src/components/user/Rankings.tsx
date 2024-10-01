import type { Category, Mode } from "@/src/types/osu";
import Pagination from "./u_panels/u_components/Pagination";
import UserRankingCard from "./UserRankingCard";
import Title from "../web/Title";
import type { UserCookie } from "@/src/types/users";
import { api_ranking } from "@/src/api/ranking";

async function Rankings(p: {
    mode: Mode,
    category: Category,
    page: number,
    country?: string,
    user?: UserCookie | null,
}) {

    let obj: any = {
        "cursor[page]": p.page,
        filter: "all",
    };
    if (p.country && p.category !== "score") {
        obj.country = p.country.toUpperCase();
    }
    const users = await api_ranking(p.mode, p.category, obj, p.user);

    if (!users) return <div>No users fount</div>;
    if (!users.ranking) return <div>No users found</div>;

    return (<>
        <Title title="Rankings" />
        <Pagination mode={p.mode} category={p.category} page={p.page} country={p.country} />
        <div class="overflow-x-scroll overflow-y-hidden">
            <table class="table table-sm p-4 bg-base-100 rounded-lg">
                <tr>
                    <th></th>
                    <th></th>
                    <th class="text-center">{p.category === "performance" ? "PP" : "Ranked Score"}</th>
                    <th class="text-center text-neutral-content">Accuracy</th>
                    <th class="text-center text-neutral-content">Play Time</th>
                    <th class="text-center text-neutral-content">Online</th>
                </tr>
                {users.ranking.map((row, i) =>
                    <UserRankingCard row={row} page={p.page} index={i} category={p.category} />
                )}
            </table>
        </div>
        <Pagination mode={p.mode} category={p.category} page={p.page} country={p.country} />
    </>);
}

export default Rankings;
