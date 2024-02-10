import type { RankHistory } from "@/src/types/users";

type MonthRank = {
    count: number;
    start_date: string;
}

type Props = {
    db_ranks: RankHistory
    play_counts: MonthRank[]
    replays_watched: MonthRank[]
}

const UserHistoryPanel = (props: Props) => {
    return (
        <div class="rounded-lg bg-base-100 p-4 flex flex-col gap-2 justify-center">
            <div class="flex flex-row items-center gap-2">
                <i class="fa-solid fa-chart-line" />
                <div>
                    History
                </div>
            </div>
            <div role="tablist" class="tabs tabs-bordered grow">
                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Global Rank" checked />
                <div role="tabpanel" class="tab-content p-4">Tab content 1</div>

                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Country Rank" />
                <div role="tabpanel" class="tab-content p-4">Tab content 2</div>

                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Play Count" />
                <div role="tabpanel" class="tab-content p-4">Tab content 3</div>

                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Replays Watched" />
                <div role="tabpanel" class="tab-content p-4">Tab content 3</div>
            </div>
        </div>
    );
}

export default UserHistoryPanel;
