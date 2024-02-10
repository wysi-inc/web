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
                hx-get={`/users/${props.id}/${props.mode}/scores/${p.category}/list?offset=0&limit=5`}
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
        <div class="shadow-lg rounded-lg bg-base-100 p-4 flex-flex-col gap-4" id="scores-panel">
            <div class="flex flex-row items-center gap-2">
                <i class="fa-solid fa-flag-checkered" />
                <div>
                    Scores
                </div>
            </div>
            <div role="tablist" class="tabs tabs-bordered grow">
                <ButtonTab category="pinned" title="Pinned Scores" />
                <ButtonTab category="best" title="Best Performance" />
                <ButtonTab category="firsts" title="First Place Ranks" />
                <ButtonTab category="recent" title="Recent Plays" />
            </div>
        </div>

    )
}

export default UserScoresPanel;
