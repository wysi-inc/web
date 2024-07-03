import type { UserSubdivision } from "@/src/types/users";
import OnlineDot from "./u_panels/u_components/OnlineDot";
import SubdivisionFlag from "./u_panels/u_components/SubdivisionFlag";
import Flag from "./u_panels/u_components/Flag";
import Link from "../web/Link";

type Props = {
    index: number,
    page: number,
    subdivision?: UserSubdivision,
    row: any,
}

function UserRankingCard({ index, page, row, subdivision }: Props) {
    return (<>
        <tr class={`hover:bg-base-300 hover:rounded-lg ${!row.user.is_active ? 'opacity-75 bg-base-300' : ''}
                        `}>
            <th class="table-cell text-start">#{index + 1 + 50 * (page - 1)}</th>
            <td class="table-cell">
                <Link url={`/users/${row.user.id}`}>
                    <div class="flex flex-row gap-4">
                        <Flag name={row.user.country.name} code={row.user.country.code} />
                        {subdivision ?
                            <SubdivisionFlag name={subdivision.name} flag={subdivision.flag} />
                            : <></>}
                        <span class="flex flex-row items-center gap-2">
                            {row.user.username}
                        </span>
                    </div>
                </Link>
            </td>
            <td class="hidden sm:table-cell">{Number(row.pp?.toFixed()).toLocaleString()}pp</td>
            <td class="hidden sm:table-cell">{row.ranked_score.toLocaleString()}</td>
            <td class="hidden md:table-cell">{row.hit_accuracy?.toFixed(2)}%</td>
            <td class="hidden lg:table-cell">{Number(((row.play_time || 0) / 60 / 60).toFixed()).toLocaleString()}h</td>
            <td class="hidden lg:table-cell">{row.play_count.toLocaleString()}</td>
            <td class="table-cell">
                <div class="flex justify-center">
                    <OnlineDot size={24} online={row.user.is_online} />
                </div>
            </td>
        </tr>
    </>);
}

export default UserRankingCard;
