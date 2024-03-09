import type { Mod, Mode } from "@/src/types/osu";
import { v2 } from "osu-api-extended";
import HxA from "../web/HxA";
import { colors } from "@/src/resources/colors";

type Props = {
    id: number;
    mode: Mode;
    mods?: Mod[];
}

const BeatmapScoreTable = async (props: Props) => {

    const scores = await v2.scores.beatmap(props.id, {
        mode: props.mode,
        mods: props.mods,
        type: "global",
    })

    return (
        <table class="table p-4 bg-base-100 rounded-lg">
            <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th class="hidden sm:table-cell">PP</th>
                    <th class="hidden md:table-cell">Accuracy</th>
                    <th class="hidden md:table-cell">Max Combo</th>
                    <th class="hidden md:table-cell">Grade</th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score, i) =>
                    <tr class="hover:bg-base-300 hover:rounded-lg">
                        <th class="table-cell text-start">#{i + 1}</th>
                        <td class="table-cell">
                            <HxA url={`/users/${score.user.id}`}>
                                <div class="flex flex-row gap-4">
                                    <img src={`https://flagcdn.com/h40/${score.user.country.code.toLowerCase()}.jpg`}
                                        style="width: 32px; height: 24px;" class="rounded-sm" />
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
                            {score.max_combo}x
                        </td>
                        <td class="hidden md:table-cell" style={{
                            color: (colors.grades as any)[score.rank.toLowerCase()]
                        }}>
                            {score.rank}
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default BeatmapScoreTable;
