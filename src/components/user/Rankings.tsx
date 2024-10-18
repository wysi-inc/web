import { api_ranking } from "@/src/api/ranking";
import type { Category, Mode } from "@/src/types/osu";
import type { UserCookie } from "@/src/types/users";
import Title from "../web/Title";
import UserRankingCard from "./UserRankingCard";
import Pagination from "./u_panels/u_components/Pagination";

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
    const res = await api_ranking(p.mode, p.category, obj, p.user);

    if (res.error) return <div>{res.data}</div>;
    if (!res.data.ranking) return <div>No users found</div>;

    return (<>
        <Title title="Rankings" />
        <Pagination mode={p.mode} category={p.category} page={p.page} country={p.country} />
        <div class="overflow-y-hidden overflow-x-scroll">
            <table class="table table-sm rounded-lg bg-base-100 p-4">
                <tr>
                    <th></th>
                    <th></th>
                    <th class="text-center">{p.category === "performance" ? "PP" : "Ranked Score"}</th>
                    <th class="text-center text-neutral-content">Accuracy</th>
                    <th class="text-center text-neutral-content">Play Time</th>
                    <th class="text-center text-neutral-content">Online</th>
                </tr>
                {res.data.ranking.map((row, i) =>
                    <UserRankingCard row={row} page={p.page} index={i} category={p.category} />
                )}
            </table>
        </div>
        <Pagination mode={p.mode} category={p.category} page={p.page} country={p.country} />
    </>);
}

export default Rankings;
