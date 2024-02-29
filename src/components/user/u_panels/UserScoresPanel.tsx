import type { Mode } from "@/src/types/osu";
import type { ScoreCategory } from "@/src/types/osu";
import UserScoresList from "./u_components/UserScoresList";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
}

const UserScoresPanel = (props: Props) => {

    const Tab = (p: { category: ScoreCategory, title: string, col: string }) => {
        const current = p.category === props.category;
        return (<>
            <input type="radio" name="score-tabs" role="tab" class={`tab text-nowrap ${p.col}`} aria-label={p.title} checked={current}
                hx-trigger="click once"
                hx-post={`/users/${props.id}/${props.mode}/scores/${p.category}/list?offset=0&limit=5`}
                hx-target={`#scores-list-${p.category}`} hx-disable={current} />
            <div role="tabpanel" class="tab-content pt-4">
                <div id={`scores-list-${p.category}`} class="grid grid-cols-1 gap-4 col-span-full">
                    {current &&
                        <UserScoresList id={props.id} mode={props.mode} category={props.category} offset={0} limit={5} />
                    }
                </div>
            </div>
        </>
        );
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            <Tab category="pinned" title="Pinned Scores" col="col-start-1 col-end-1" />
            <Tab category="best" title="Best Performance" col="col-start-2 col-end-2" />
            <Tab category="firsts" title="First Place Ranks" col="col-start-3 col-end-3" />
            <Tab category="recent" title="Recent Plays" col="col-start-4 col-end-4" />
        </div>
    )
}

export default UserScoresPanel;
