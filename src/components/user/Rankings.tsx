import { getRankings } from "@/src/get/user";
import type { Category, Mode } from "@/src/types/osu";
import Pagination from "./u_panels/u_components/Pagination";
import OnlineDot from "./u_panels/u_components/OnlineDot";
import HxA from "../web/HxA";

type Props = {
    mode: Mode;
    category: Category;
    page: number;
}

const Rankings = async (props: Props) => {

    const users = await getRankings(props.mode, props.category, props.page);

    if ((users as any).error) return <div>Rankings not found</div>;
    if (!users) return <div>Loading...</div>;
    if (!users.ranking) return <div>No users found</div>;

    return (
        <div class="flex flex-col gap-4">
            <Pagination mode={props.mode} category={props.category} page={props.page} />
            <table class="table p-4 bg-base-100 rounded-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>User</th>
                        <th class="hidden sm:table-cell">PP</th>
                        <th class="hidden sm:table-cell">Ranked Score</th>
                        <th class="hidden md:table-cell">Accuracy</th>
                        <th class="hidden md:table-cell">Play Time</th>
                        <th class="hidden md:table-cell">Play Count</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.ranking.map((row, i) =>
                        <tr class="hover:bg-base-300 hover:rounded-lg">
                            <th class="table-cell text-start">#{i + 1 + 50 * (props.page - 1)}</th>
                            <td class="table-cell">
                                <HxA url={`/users/${row.user.id}`}>
                                    <div class="flex flex-row gap-4">
                                        <img src={`https://flagcdn.com/h40/${row.user.country.code.toLowerCase()}.jpg`}
                                            style="width: 32px; height: 24px;" class="rounded-sm" />
                                        <span class="flex flex-row items-center gap-2">
                                            {row.user.username}
                                        </span>
                                    </div>
                                </HxA>
                            </td>
                            <td class="hidden sm:table-cell">{Number(row.pp?.toFixed()).toLocaleString()}pp</td>
                            <td class="hidden sm:table-cell">{row.ranked_score.toLocaleString()}</td>
                            <td class="hidden md:table-cell">{row.hit_accuracy?.toFixed(2)}%</td>
                            <td class="hidden md:table-cell">{Number(((row.play_time || 0) / 60 / 60).toFixed()).toLocaleString()}h</td>
                            <td class="hidden md:table-cell">{row.play_count.toLocaleString()}</td>
                            <td class="table-cell">
                                <div class="flex justify-center">
                                    <OnlineDot size={24} online={row.user.is_online} />
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Pagination mode={props.mode} category={props.category} page={props.page} />
        </div>
    );
}

export default Rankings;
