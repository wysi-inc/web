import type { Mode } from "@/src/types/osu";
import type { ScoreCategory } from "@/src/types/osu";
import UserScoresList from "./u_components/UserScoresList";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
}

type TabProps = {
    cat: ScoreCategory,
    title: string,
    col: string
}

const UserScoresPanel = ({ id, mode, category }: Props) => {

    const Tab = ({ cat, title, col }: TabProps) => {
        const current = cat === category;
        return (<>
            <input role="tab" type="radio" name="score-tabs" class={`tab text-nowrap ${col}`}
                hx-trigger="click once" aria-label={title} checked={current}
                hx-post={`/users/${id}/${mode}/lists/scores/${cat}?offset=0&limit=5`}
                hx-target={`#scores-list-${cat}`} hx-disable={current}
                hx-indicator={`#scores-loading-${cat}`}
            />
            <div role="tabpanel" class="tab-content pt-4 col-span-full">
                <div id={`scores-list-${cat}`} class="grid grid-cols-1 gap-4 col-span-full">
                    {current ?
                        <UserScoresList id={id} mode={mode} category={category} offset={0} limit={5} />
                        :
                        <span class="loading loading-spinner htmx-indicator" id={`scores-loading-${cat}`} />
                    }
                </div>
            </div>
        </>);
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            <Tab cat="pinned" title="Pinned Scores" col="col-start-1 col-end-1" />
            <Tab cat="best" title="Best Performance" col="col-start-2 col-end-2" />
            <Tab cat="firsts" title="First Place Ranks" col="col-start-3 col-end-3" />
            <Tab cat="recent" title="Recent Plays" col="col-start-4 col-end-4" />
        </div>
    )
}

export default UserScoresPanel;
