import type { Mode } from "@/src/types/osu";
import type { ScoreCategory } from "@/src/types/osu";
import UserScoresList from "./u_components/UserScoresList";
import type { UserCookie } from "@/src/types/users";
import DoubleSlider from "../../beatmap/DoubleSlider";

type Props = {
    user_id: number;
    mode: Mode;
    category: ScoreCategory;
    user?: UserCookie | null
}

type TabProps = {
    cat: ScoreCategory,
    title: string,
    col: string
}

const UserScoresPanel = (p: Props) => {

    const Tab = ({ cat, title, col }: TabProps) => {
        const current = cat === p.category;
        return (<>
            <input role="tab" type="radio" name="score-tabs" class={`tab text-nowrap ${col}`}
                hx-trigger="click once" aria-label={title} checked={current}
                hx-post={`/users/${p.user_id}/${p.mode}/lists/scores/${cat}?offset=0&limit=5`}
                hx-target={`#scores-list-${cat}`} hx-disable={current}
                hx-indicator={`#scores-loading-${cat}`}
            />
            <div role="tabpanel" class="tab-content pt-4 col-span-full">
                <div id={`scores-list-${cat}`} class="grid grid-cols-1 gap-4 col-span-full">
                    {current ?
                        <UserScoresList id={p.user_id} mode={p.mode} category={p.category} offset={0} limit={5} user={p.user} />
                        :
                        <span class="loading loading-spinner htmx-indicator" id={`scores-loading-${cat}`} />
                    }
                </div>
            </div>
        </>);
    }

    return (<>
        {
            // <form class="grid md:grid-cols-2 gap-4 mb-2">
            //     <label class="flex flex-row gap-2 items-center">
            //         <span>Filter:</span>
            //         <select class="select select-bordered select-sm grow">
            //             <option selected>None</option>
            //             <option value="pp">PP</option>
            //             <option value="combo">Combo</option>
            //             <option value="date">Date</option>
            //             <option value="bpm">BPM</option>
            //             <option value="len">Length</option>
            //             <option value="score">Score</option>
            //             <option value="acc">Accuracy</option>
            //             <option value="miss">Miss Count</option>
            //             <option value="sr">SR</option>
            //             <option value="ar">AR</option>
            //             <option value="od">OD</option>
            //             <option value="hp">HP</option>
            //         </select>
            //     </label>
            //     <div class="flex flex-row justify-between items-center gap-2">
            //         <span>min</span>
            //         <DoubleSlider min={0} max={100} code="scores_filter" step={0} />
            //         <span>max</span>
            //     </div>
            // </form>
        }
        <div id="user_scores_panel" role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            <Tab cat="pinned" title="Pinned" col="col-start-1 col-end-1" />
            <Tab cat="best" title="Best" col="col-start-2 col-end-2" />
            <Tab cat="firsts" title="First" col="col-start-3 col-end-3" />
            <Tab cat="recent" title="Recent" col="col-start-4 col-end-4" />
        </div>
    </>
    )
}

export default UserScoresPanel;
