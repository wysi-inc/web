import type { Mode } from "@/src/types/osu";
import type { UserScores } from "@/src/types/users";
import UserScoresList from "./UserScoresList";

type Props = {
    id: number;
    mode: Mode;
    category: UserScores;
}

const UserScoresPanel = (props: Props) => {

    // disable hx-post if the category is the current one
    const ButtonTab = (p: { category: UserScores }) => {
        const current = p.category === props.category;
        return (
            <button role="tab" class={`capitalize tab ${current && 'tab-active'}`}
                hx-post={`/users/${props.id}/${props.mode}/scores/${p.category}`}
                hx-target="#scores-panel" hx-disable={current} hx-swap="outerHTML">
                {p.category}
            </button>
        );
    }

    return (
        <div class="rounded-lg bg-base-200 flex flex-col gap-4 p-4" id="scores-panel">
            <div role="tablist" class="tabs tabs-boxed bg-base-300">
                <ButtonTab category="pinned" />
                <ButtonTab category="best" />
                <ButtonTab category="firsts" />
                <ButtonTab category="recent" />
            </div>
            <div class="flex flex-col gap-4">
                <UserScoresList id={props.id} mode={props.mode} category={props.category} offset={0} limit={5} />
            </div>
        </div>

    )
}

export default UserScoresPanel;
