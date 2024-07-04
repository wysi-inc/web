import type { Mode } from "@/src/types/osu";
import type { ScoreCategory } from "@/src/types/osu";
import UserScoresList from "./u_components/UserScoresList";

type Props = {
    user_id: number;
    mode: Mode;
    category: ScoreCategory;
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
                        <UserScoresList id={p.user_id} mode={p.mode} category={p.category} offset={0} limit={5} />
                        :
                        <span class="loading loading-spinner htmx-indicator" id={`scores-loading-${cat}`} />
                    }
                </div>
            </div>
        </>);
    }

    return (<>
        <div id="user_scores_panel" role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            <Tab cat="pinned" title="Pinned" col="col-start-1 col-end-1" />
            <Tab cat="best" title="Best" col="col-start-2 col-end-2" />
            <Tab cat="firsts" title="First" col="col-start-3 col-end-3" />
            <Tab cat="recent" title="Recent" col="col-start-4 col-end-4" />
        </div>
        <script type="module" src="/public/js/choke.js" />
    </>
    )
}

export default UserScoresPanel;
