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
    return (<>
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            <Tab type="global" title="Global" data={props.db_ranks?.global_ranks} />
            <Tab type="country" title="Country" data={props.db_ranks?.country_ranks} />
            <Tab type="plays" title="Plays" data={props.play_counts} />
            <Tab type="replays" title="Replays" data={props.replays_watched} />
        </div>
    </>);
}

function Tab(p: { type: string, title: string, data: Rank[] | MonthCount[] | undefined }) {
    if (!p.data || p.data.length === 0) return <></>;
    return (<>
        <input role="tab" type="radio" id={`${p.type}_tab`} aria-controls={`${p.type}_tabpannel`} name="history_tabs" class="tab text-nowrap"
            aria-label={p.title} checked={p.type === "global"} aria-selected={p.type === "global"} />
        <div role="tabpanel" class="tab-content pt-4 select-none" id={`${p.type}_tabpannel`} aria-labelledby={`${p.type}_tab`}>
            {p.data.length > 0 ?
                <div class="relative h-64 w-full cursor-move">
                    <canvas id={`chart-${p.type}`} data-vals={JSON.stringify(p.data)} />
                </div>
                : "No data found"
            }
        </div>
    </>);
}

export default UserHistoryPanel;
