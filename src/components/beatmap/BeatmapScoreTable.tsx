import { api_scores_beatmap } from "@/src/api/score";
import type { Mod, Mode } from "@/src/types/osu";
import type { UserCookie } from "@/src/types/users";
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
    user?: UserCookie | null
    type?: "global" | "country" | "friend"
}) {

    const mods = Object.entries(p.body);
    const mod_names = mods.map(([name, value]) => value === 'on' ? name.split("-")[1] : null).filter(v => v !== null) as Mod[];

    const scores = await api_scores_beatmap(p.b_id, {
        mode: p.mode,
        mods: mod_names,
        type: p.type || "global",
    }, p.user);

    if (!scores || !scores.scores || scores.scores.length <= 0) {
        return <>No scores found :(</>;
    }

    return (<>
        <BigScore score={scores.scores[0]} mode={p.mode} position={1} />
        {scores.userScore ?
            <BigScore score={scores.userScore.score} mode={p.mode} position={scores.userScore.position} />
            : null
        }
        <div class="overflow-x-scroll overflow-y-hidden">
            <table class="table table-xs table-zebra bg-base-300 rounded-lg">
                <thead>
                    <tr>
                        <th></th>
                        <th>User</th>
                        <th>Score</th>
                        <th>PP</th>
                        <th>Acc</th>
                        <th>Combo</th>
                        <th>Grade</th>
                        <th>Mods</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {scores.scores.map((score, i) =>
                        <tr class="hover:bg-base-300 hover:rounded-lg group">
                            <th>#{i + 1}</th>
                            <td>
                                <div class="flex flex-row gap-2 items-center">
                                    <Flag name={score.user.country.name} code={score.user.country.code} />
                                    <SubdivisionFlag user_id={score.user.id} />
                                    <Clan user_id={score.user.id} />
                                    <Link url={`/users/${score.user.id}`}>{score.user.username}</Link>
                                </div>
                            </td>
                            <td>{score.score.toLocaleString()}</td>
                            <td>{Number((score.pp?.toFixed()) || 0).toLocaleString()}pp</td>
                            <td>{(score.accuracy * 100).toFixed(2)}%</td>
                            <td>
                                {score.perfect ?
                                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-sky-500">
                                        {score.max_combo.toLocaleString()}x
                                    </span> :
                                    <span>
                                        {score.max_combo.toLocaleString()}x
                                    </span>
                                }
                            </td>
                            <td><Grade grade={score.rank} /></td>
                            <td>
                                <div class="flex flex-row gap-1">
                                    {score.mods.map(mod =>
                                        <ModIcon mod={mod} />
                                    )}
                                </div>
                            </td>
                            <td>
                                <span class="tooltip-left" data-tip={`${moment(score.created_at).format("MMMM Do YYYY")} | ${moment(score.created_at).fromNow()}`}>
                                    {moment(score.created_at).fromNow(true)}
                                </span>
                            </td>
                            <td>
                                <Link url={`/scores/${score.id}`} css="right-2 top-1.5 invisible group-hover:visible">
                                    <i class="fa-solid fa-eye" />
                                </Link>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    </>);
};

export default BeatmapScoreTable;
