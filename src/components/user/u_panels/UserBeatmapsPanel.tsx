import type { BeatmapCategory } from "@/src/types/osu";
import UserBeatmapsList from "./u_components/UserBeatmapsList";

type Props = {
    id: number;
    category: BeatmapCategory;
}

type TabProps = {
    type: BeatmapCategory,
    title: string,
    col: string
}

const UserBeatmapsPanel = ({ id, category }: Props) => {

    const Tab = ({ type, title, col }: TabProps) => {
        const current = type === category;
        return <>
            <input type="radio" name="beatmaps-tabs" role="tab"
                class={`tab text-nowrap ${col}`}
                aria-label={title} checked={current} aria-selected={current}
                hx-trigger="click once"
                hx-post={`/users/${id}/0/lists/beatmaps/${type}?offset=0&limit=6`}
                hx-target={`#beatmaps-list-${type}`} hx-disable={current}
                hx-indicator={`#beatmaps-loading-${type}`} id={`${type}_tab`} aria-controls={`${type}_tabpannel`}
            />
            <div role="tabpanel" class="tab-content pt-4 col-span-full" aria-labelledby={`${type}_tab`} id={`${type}_tabpannel`}>
                <div id={`beatmaps-list-${type}`} class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {!current &&
                        <span class="loading loading-spinner htmx-indicator" id={`beatmaps-loading-${type}`} />
                    }
                    {current &&
                        <UserBeatmapsList id={id} category={category} offset={0} limit={6} />
                    }
                </div>
            </div>
        </>;
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-5">
            <Tab type="favourite" title="Favourite" col="col-start-1 col-end-1" />
            <Tab type="ranked" title="Ranked" col="col-start-2 col-end-2" />
            <Tab type="loved" title="Loved" col="col-start-3 col-end-3" />
            <Tab type="pending" title="Pending" col="col-start-4 col-end-4" />
            <Tab type="graveyard" title="Graveyard" col="col-start-5 col-end-5" />
        </div>
    );
}

export default UserBeatmapsPanel;
