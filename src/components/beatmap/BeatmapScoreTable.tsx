import { api_scores_beatmap } from "@/src/api/score";
import type { Mod, Mode } from "@/src/types/osu";
import moment from "moment";
import BigScore from "../score/BigScore";
import Grade from "../score/Grade";
import ModIcon from "../score/ModIcon";
import Clan from "../user/u_panels/u_components/Clan";
import Flag from "../user/u_panels/u_components/Flag";
import SubdivisionFlag from "../user/u_panels/u_components/SubdivisionFlag";
import Link from "../web/Link";

async function BeatmapScoreTable(p: {
    b_id: number,
    mode: Mode,
    body?: any,
    logged_id?: number,
}) {

    const mods = Object.entries(p.body);
    const mod_names = mods.map(([name, value]) => value === 'on' ? name.split("-")[1] : null).filter(v => v !== null) as Mod[];

    const scores = await api_scores_beatmap(p.b_id, {
        mode: p.mode,
        mods: mod_names,
        type: "global",
    });

    if (!scores || !scores.scores) return <>No scores found</>;

    return (<>
        <BigScore score={scores.scores[0]} mode={p.mode} position={1} />
        {scores.userScore ?
            <BigScore score={scores.userScore} mode={p.mode} position={0} />
            : null
        }
        <table class="table table-xs table-zebra bg-base-300 rounded-lg">
            <thead>
                <tr>
                    <th></th>
                    <th>User</th>
                    <th class="hidden sm:table-cell">PP</th>
                    <th class="hidden md:table-cell">Acc</th>
                    {/*<th class="hidden md:table-cell">Hits</th>*/}
                    <th class="hidden md:table-cell">Combo</th>
                    <th class="hidden md:table-cell">Grade</th>
                    <th class="hidden md:table-cell">Mods</th>
                    <th class="hidden md:table-cell">Date</th>
                    <th class=""></th>
                </tr>
            </thead>
            <tbody>
                {scores.scores.map((score, i) =>
                    <tr class="hover:bg-base-300 hover:rounded-lg group">
                        <th class="table-cell text-start">#{i + 1}</th>
                        <td class="table-cell">
                            <div class="flex flex-row gap-2 items-center">
                                <Flag name={score.user.country.name} code={score.user.country.code} />
                                <SubdivisionFlag user_id={score.user.id} />
                                <Clan user_id={score.user.id} />
                                <Link url={`/users/${score.user.id}`}>{score.user.username}</Link>
                            </div>
                        </td>
                        <td class="hidden sm:table-cell">
                            {Number((score.pp?.toFixed()) || 0).toLocaleString()}pp</td>
                        <td class="hidden md:table-cell">
                            {(score.accuracy * 100).toFixed(2)}%
                        </td>
                        <td class="hidden md:table-cell">
                            {score.perfect ?
                                <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                    {score.max_combo.toLocaleString()}x
                                </span> :
                                <span>
                                    {score.max_combo.toLocaleString()}x
                                </span>
                            }
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex">
                                <Grade grade={score.rank} />
                            </div>
                        </td>
                        <td class="hidden md:table-cell">
                            <div class="flex flex-row flex-wrap gap-1">
                                {score.mods.map(mod =>
                                    <ModIcon mod={mod} />
                                )}
                            </div>
                        </td>
                        <td class="hidden md:table-cell">
                            <span class="tooltip tooltip-left" data-tip={`${moment(score.created_at).format("MMMM Do YYYY")} | ${moment(score.created_at).fromNow()}`}>
                                {moment(score.created_at).fromNow(true)}
                            </span>
                        </td>
                        <td class="relative">
                            <Link url={`/scores/${score.id}`} css="absolute right-2 top-1.5 hidden group-hover:block" tooltip="View Score Page">
                                <i class="fa-solid fa-eye" />
                            </Link>
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </>);
};

export default BeatmapScoreTable;
