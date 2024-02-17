import type { Mode } from "@/src/types/osu";
import type { ScoreCategory } from "@/src/types/osu";
import UserScoresList from "./u_components/UserScoresList";

type Props = {
    id: number;
    mode: Mode;
    category: ScoreCategory;
}

const UserScoresPanel = (props: Props) => {

    const ButtonTab = (p: { category: ScoreCategory, title: string }) => {
        const current = p.category === props.category;
        return (<>
            <input type="radio" name="score-tabs" role="tab" class="tab text-nowrap" aria-label={p.title} checked={current}
                hx-trigger="click once"
                hx-post={`/users/${props.id}/${props.mode}/scores/${p.category}/list?offset=0&limit=5`}
                hx-target={`#scores-list-${p.category}`} hx-disable={current} />

            <div role="tabpanel" class="tab-content pt-4">
                <div id={`scores-list-${p.category}`} class="grid grid-cols-1 gap-4">
                    {current &&
                        <UserScoresList id={props.id} mode={props.mode} category={props.category} offset={0} limit={5} />
                    }
                </div>
            </div>
        </>
        );
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grow">
            <ButtonTab category="pinned" title="Pinned Scores" />
            <ButtonTab category="best" title="Best Performance" />
            <ButtonTab category="firsts" title="First Place Ranks" />
            <ButtonTab category="recent" title="Recent Plays" />
        </div>
    )
}

export default UserScoresPanel;
