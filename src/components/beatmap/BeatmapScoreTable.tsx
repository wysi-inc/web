import type { Mod, Mode } from "@/src/types/osu";
import { v2 } from "osu-api-extended";
import HxA from "../web/HxA";
import { colors } from "@/src/resources/colors";
import type { response } from "osu-api-extended/dist/types/v2_scores_beatmap";
import moment from "moment";

type Props = {
    id: number;
    mode: Mode;
    mods?: Mod[];
}

type ActualStatistics = response & {
    statistics: {
        great?: number;
        ok?: number;
        meh?: number;
        miss?: number;
    };
    ended_at: string;
    mods: { acronym: string }[];
    is_perfect_combo: boolean;
}

const BeatmapScoreTable = async (props: Props) => {

    const scores: ActualStatistics[] = await v2.scores.beatmap(props.id, {
        mode: props.mode,
        mods: props.mods,
        type: "global",
    }) as any;

    console.log(scores);

    return (
        <table class="table table-xs p-4 bg-base-100 rounded-lg">
            <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th class="hidden sm:table-cell">PP</th>
                    <th class="hidden md:table-cell">Acc</th>
                    <th class="hidden md:table-cell">Hits</th>
                    <th class="hidden md:table-cell">Combo</th>
                    <th class="hidden md:table-cell">Grade</th>
                    <th class="hidden md:table-cell">Mods</th>
                    <th class="hidden md:table-cell">Date</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score, i) =>
                    <tr class="hover:bg-base-300 hover:rounded-lg">
                        <th class="table-cell text-start">#{i + 1}</th>
                        <td class="table-cell">
                            <HxA url={`/users/${score.user.id}`}>
                                <div class="flex flex-row gap-4 items-center">
                                    <img src={`https://flagcdn.com/h40/${score.user.country.code.toLowerCase()}.jpg`}
                                        class="rounded-sm h-4 w-6" />
                                    <span class="flex flex-row items-center gap-2">
                                        {score.user.username}
                                    </span>
                                </div>
                            </HxA>
                        </td>
                        <td class="hidden sm:table-cell">
                            {Number(score.pp?.toFixed()).toLocaleString()}pp</td>
                        <td class="hidden md:table-cell">
                            {(score.accuracy * 100).toFixed(2)}%
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="grid grid-cols-4 gap-1">
                                <span class="text-gray-400" style={{ color: score.statistics.great ? colors.judgements.x300 : "" }}>{score.statistics.great || 0}</span>
                                <span class="text-gray-400" style={{ color: score.statistics.ok ? colors.judgements.x100 : "" }}>{score.statistics.ok || 0}</span>
                                <span class="text-gray-400" style={{ color: score.statistics.meh ? colors.judgements.x50 : "" }}>{score.statistics.meh || 0}</span>
                                <span class="text-gray-400" style={{ color: score.statistics.miss ? colors.judgements.xMiss : "" }}>{score.statistics.miss || 0}</span>
                            </div>
                        </td>
                        <td class="hidden md:table-cell">
                            {score.is_perfect_combo ?
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {score.max_combo}x
                                </span> :
                                <span>{score.max_combo}x</span>
                            }
                        </td>
                        <td class="hidden md:table-cell" style={{
                            color: (colors.grades as any)[score.rank.toLowerCase()]
                        }}>
                            {score.rank}
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex flex-row gap-1">
                                {score.mods.map(mod =>
                                    <span class="tooltip" data-tip={(mod as any).acronym}>
                                        <img src={`/public/img/mods/${(mod as any).acronym?.toLowerCase()}.png`}
                                            class="w-6" />
                                    </span>
                                )}
                            </div>
                        </td>
                        <td class="hidden md:table-cell tooltip" data-tip={moment(score.created_at).format("MMMM Do YYYY")}>
                            {moment(score.ended_at).fromNow()}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default BeatmapScoreTable;
