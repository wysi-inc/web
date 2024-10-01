import OnlineDot from "./u_panels/u_components/OnlineDot";
import SubdivisionFlag from "./u_panels/u_components/SubdivisionFlag";
import Flag from "./u_panels/u_components/Flag";
import Link from "../web/Link";
import Clan from "./u_panels/u_components/Clan";
import type { Category } from "@/src/types/osu";

function UserRankingCard(p: {
    index: number,
    page: number,
    row: any,
    category: Category,
}) {
    return (
        <tr class={`hover:bg-base-300 hover:rounded-lg ${!p.row.user.is_active ? 'opacity-75 bg-base-300' : ''} `}>
            <th class="text-end">#{p.index + 1 + 50 * (p.page - 1)}</th>
            <td>
                <div class="flex flex-row items-center gap-2">
                    <Flag name={p.row.user.country.name} code={p.row.user.country.code} />
                    <SubdivisionFlag user_id={p.row.user.id} />
                    <Clan user_id={p.row.user.id} />
                    <Link url={`/users/${p.row.user.id}`} css="p-1 hover:underline underline-1">
                        {p.row.user.username}
                    </Link>
                </div>
            </td>
            <td class="text-center">
                {p.category === "performance" ?
                    `${Number(p.row.pp?.toFixed()).toLocaleString()}pp` :
                    p.row.ranked_score.toLocaleString()
                }
            </td>
            <td class="text-center text-neutral-content">{p.row.hit_accuracy?.toFixed(2)}%</td>
            <td class="text-center text-neutral-content">{Number(((p.row.play_time || 0) / 60 / 60).toFixed()).toLocaleString()}h</td>
            <td class="text-center text-neutral-content">
                <div class="flex items-center justify-center">
                    <OnlineDot size={16} online={p.row.user.is_online} />
                </div>
            </td>
        </tr>
    );
}

export default UserRankingCard;
