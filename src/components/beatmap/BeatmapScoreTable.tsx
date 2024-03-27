import type { Mod, Mode } from "@/src/types/osu";
import { v2 } from "osu-api-extended";
import HxA from "../web/HxA";
import { colors } from "@/src/resources/colors";
import type { response } from "osu-api-extended/dist/types/v2_scores_beatmap";
import moment from "moment";
import Grade from "../score/Grade";
import ModIcon from "../score/ModIcon";
import Flag from "../user/u_panels/u_components/Flag";

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

    return (
        <table class="table table-sm p-4 bg-base-100 rounded-lg">
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
                                    <Flag name={score.user.country.name} code={score.user.country.code} />
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
                            <div class="grid grid-cols-4 gap-4 px-2 bg-base-300 rounded-full">
                                <span class={`text-base-content ${score.statistics.great ? "" : "text-opacity-50"}`} style={{ color: score.statistics.great ? colors.judgements.x300 : "" }}>{score.statistics.great || 0}</span>
                                <span class={`text-base-content ${score.statistics.ok ? "" : "text-opacity-50"}`} style={{ color: score.statistics.ok ? colors.judgements.x100 : "" }}>{score.statistics.ok || 0}</span>
                                <span class={`text-base-content ${score.statistics.meh ? "" : "text-opacity-50"}`} style={{ color: score.statistics.meh ? colors.judgements.x50 : "" }}>{score.statistics.meh || 0}</span>
                                <span class={`text-base-content ${score.statistics.miss ? "" : "text-opacity-50"}`} style={{ color: score.statistics.miss ? colors.judgements.xMiss : "" }}>{score.statistics.miss || 0}</span>
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
                        <td class="hidden md:table-cell" >
                            <Grade grade={score.rank} />
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex flex-row gap-1">
                                {score.mods.map((mod) =>
                                    <ModIcon mod={(mod as any).acronym} />
                                )}
                            </div>
                        </td>
                        <td class="text-start hidden md:table-cell tooltip" data-tip={moment(score.created_at).format("MMMM Do YYYY")}>
                            {moment(score.ended_at).fromNow()}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default BeatmapScoreTable;
