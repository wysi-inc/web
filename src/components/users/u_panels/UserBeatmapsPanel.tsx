import type { BeatmapCategory } from "@/src/types/osu";
import UserBeatmapsList from "./u_components/UserBeatmapsList";

type Props = {
    id: number;
    category: BeatmapCategory;
}

const UserBeatmapsPanel = (props: Props) => {

    const ButtonTab = (p: { category: BeatmapCategory, title: string }) => {
        const current = p.category === props.category;
        return (<>
            <input type="radio" name="beatmaps-tabs" role="tab" class="tab text-nowrap" aria-label={p.title} checked={current}
                hx-trigger="click once"
                hx-post={`/users/${props.id}/0/beatmaps/${p.category}/list?offset=0&limit=6`}
                hx-target={`#beatmaps-list-${p.category}`} hx-disable={current} />

            <div role="tabpanel" class="tab-content pt-4">
                <div id={`beatmaps-list-${p.category}`} class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {current &&
                        <UserBeatmapsList id={props.id} category={p.category} offset={0} limit={6} />
                    }
                </div>
            </div>
        </>);
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grow">
            <ButtonTab category="favourite" title="Favourite" />
            <ButtonTab category="ranked" title="Ranked" />
            <ButtonTab category="loved" title="Loved" />
            <ButtonTab category="pending" title="Pending" />
            <ButtonTab category="graveyard" title="Graveyard" />
        </div>
    )
}

export default UserBeatmapsPanel;
