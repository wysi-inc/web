import { v2 } from "osu-api-extended";
import type { response as v2UserList } from "osu-api-extended/dist/types/v2_site_ranking_details";
import type { Category, Mode } from "../../types/osu";
import OnlineDot from "./OnlineDot";
import Pagination from "./Pagination";

type Props = {
    mode: string;
    category: string;
    page: number;
}

const Rankings = async (props: Props) => {

    const users: v2UserList = await v2.site.ranking.details(
        props.mode as Mode, props.category as Category, {
            cursor: { page: props.page },
            filter: "all",
        } as any
    );

    return (
        <div class="flex flex-col gap-4">
            <Pagination mode={props.mode} category={props.category} page={props.page} />
            <table class="table p-4 bg-base-300 rounded-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>User</th>
                        <th>PP</th>
                        <th>Accuracy</th>
                        <th>Play Time</th>
                        <th>Play Count</th>
                        <th>Ranked Score</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {users.ranking.map((row, i) =>
                        <tr class="hover:bg-base-100 hover:rounded-lg cursor-pointer">
                            <th class="table-cell text-start">#{i + 1 + 50 * (props.page - 1)}</th>
                            <td class="table-cell">
                                <div class="flex flex-row gap-4">
                                    <img src={`https://flagcdn.com/h40/${row.user.country.code.toLowerCase()}.jpg`}
                                        style="width: 32px; height: 24px;" class="rounded-sm" />
                                    <a href={`/users/1/osu`} class="flex flex-row items-center gap-2">
                                        {row.user.username}
                                    </a>
                                </div>
                            </td>
                            <td class="hidden lg:table-cell">{Number(row.pp?.toFixed()).toLocaleString()}pp</td>
                            <td class="hidden lg:table-cell">{row.hit_accuracy?.toFixed(2)}%</td>
                            <td class="hidden lg:table-cell">{Number(((row.play_time || 0) / 60 / 60).toFixed()).toLocaleString()}h</td>
                            <td class="hidden lg:table-cell">{row.play_count.toLocaleString()}</td>
                            <td class="hidden md:table-cell">{row.ranked_score.toLocaleString()}</td>
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
