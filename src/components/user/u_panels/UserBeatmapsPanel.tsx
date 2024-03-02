import type { BeatmapCategory } from "@/src/types/osu";
import UserBeatmapsList from "./u_components/UserBeatmapsList";

type Props = {
    id: number;
    category: BeatmapCategory;
}

const UserBeatmapsPanel = (props: Props) => {

    const Tab = (p: { category: BeatmapCategory, title: string, col: string }) => {
        const current = p.category === props.category;
        return (<>
            <input type="radio" name="beatmaps-tabs" role="tab" class={`tab text-nowrap ${p.col}`} aria-label={p.title} checked={current}
                hx-trigger="click once"
                hx-post={`/users/${props.id}/0/beatmaps/lists/${p.category}?offset=0&limit=6`}
                hx-target={`#beatmaps-list-${p.category}`} hx-disable={current} />

            <div role="tabpanel" class="tab-content pt-4 col-span-full">
                <div id={`beatmaps-list-${p.category}`} class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {current &&
                        <UserBeatmapsList id={props.id} category={p.category} offset={0} limit={6} />
                    }
                </div>
            </div>
        </>);
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-5">
            <Tab category="favourite" title="Favourite" col="col-start-1 col-end-1" />
            <Tab category="ranked" title="Ranked" col="col-start-2 col-end-2" />
            <Tab category="loved" title="Loved" col="col-start-3 col-end-3" />
            <Tab category="pending" title="Pending" col="col-start-4 col-end-4" />
            <Tab category="graveyard" title="Graveyard" col="col-start-5 col-end-5" />
        </div>
    )
}

export default UserBeatmapsPanel;
