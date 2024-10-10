import type { Rank } from "@/src/models/User";
import type { DBRankHistory } from "@/src/types/users";

type MonthCount = {
    count: number;
    start_date: string;
}

type Props = {
    db_ranks?: DBRankHistory | null,
    play_counts: MonthCount[],
    replays_watched: MonthCount[],
}

function UserHistoryPanel(props: Props) {

    function tab(type: string, title: string, data: Rank[] | MonthCount[] | undefined) {
        if (!data) return <></>;
        if (data.length === 0) return <></>;
        return (<>
            <input role="tab" type="radio" id={`${type}_tab`} aria-controls={`${type}_tabpannel`} name="history_tabs" class="tab text-nowrap"
                aria-label={title} checked={type === "global"} aria-selected={type === "global"} />
            <div role="tabpanel" class="tab-content pt-4" id={`${type}_tabpannel`} aria-labelledby={`${type}_tab`}>
                {data.length > 0 ?
                    <div class="h-64 w-full relative cursor-move" id={`chart-${type}`} data-vals={JSON.stringify(data)} />
                    : "No data found"
                }
            </div>
        </>);
    }

    return (<>
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            {tab('global', 'Global', props.db_ranks?.global_ranks)}
            {tab('country', 'Country', props.db_ranks?.country_ranks)}
            {tab('plays', 'Plays', props.play_counts)}
            {tab('replays', 'Replays', props.replays_watched)}
        </div>
        <script type="module" src={`/public/js/history.js?v=${Date.now()}`} />
    </>);

}

export default UserHistoryPanel;
