import type { Rank } from "@/src/models/User";
import type { RankHistory } from "@/src/types/users";

type MonthCount = {
    count: number;
    start_date: string;
}

type Props = {
    db_ranks: RankHistory
    play_counts: MonthCount[]
    replays_watched: MonthCount[]
}

const UserHistoryPanel = (props: Props) => {

    function tab(type: string, title: string, data: Rank[] | MonthCount[] | undefined) {
        if (!data) return <></>;
        return (<>
            <input role="tab" type="radio" name="history_tabs" class="tab text-nowrap"
                aria-label={title} checked={type === "global"} />
            <div role="tabpanel" class="tab-content pt-4">
                {data.length > 0 ?
                    <div class="h-64 w-full relative">
                        <canvas id={`chart-${type}`} class="absolute" data-vals={JSON.stringify(data)} />
                    </div> :
                    "No data found"
                }
            </div>
        </>
        );
    }

    return (<>
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            {tab('global', 'Global Rank', props.db_ranks?.global_ranks)}
            {tab('country', 'Country Rank', props.db_ranks?.country_ranks)}
            {tab('plays', 'Play Count', props.play_counts)}
            {tab('replays', 'Replays Watched', props.replays_watched)}
        </div>
        <script type="module" src="/public/js/history.js" />
    </>);

}

export default UserHistoryPanel;
