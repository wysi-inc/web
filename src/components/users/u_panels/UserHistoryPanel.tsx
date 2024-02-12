import type { Rank } from "@/src/models/User";
import { colors } from "@/src/resources/colors";
import type { RankHistory } from "@/src/types/users";
import moment from "moment";

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

    return (
        <div class="rounded-lg bg-base-100 p-4 flex flex-col gap-2 justify-center shadow-lg">
            <div class="flex flex-row items-center gap-2">
                <i class="fa-solid fa-chart-line" />
                <div>
                    History
                </div>
            </div>
            <div role="tablist" class="tabs tabs-bordered grow">
                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Global Rank" checked />
                <div role="tabpanel" class="tab-content pt-4">
                    {props.db_ranks.global_rank_history.length > 0 ?
                        <div class="h-64">
                            <canvas id="chart-global" />
                        </div> :
                        "No data found"
                    }
                </div>

                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Country Rank" />
                <div role="tabpanel" class="tab-content pt-4">
                    {props.db_ranks.country_rank_history.length > 0 ?
                        <div class="h-64">
                            <canvas id="chart-country" />
                        </div> :
                        "No data found"
                    }
                </div>

                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Play Count" />
                <div role="tabpanel" class="tab-content pt-4">
                    {props.play_counts.length > 0 ?
                        <div class="h-64">
                            <canvas id="chart-plays" />
                        </div> :
                        "No plays found"
                    }
                </div>

                <input type="radio" name="history_tabs" role="tab" class="tab text-nowrap" aria-label="Replays Watched" />
                <div role="tabpanel" class="tab-content pt-4">
                    {props.replays_watched.length > 0 ?
                        <div class="h-64">
                            <canvas id="chart-replays" />
                        </div> :
                        "No replays watched"
                    }
                </div>
            </div>
            <script type="module">
                {props.db_ranks.global_rank_history.length > 0 &&
                    get_rank_chart('global', props.db_ranks.global_rank_history)
                }
                {props.db_ranks.country_rank_history.length > 0 &&
                    get_rank_chart('country', props.db_ranks.country_rank_history)
                }
                {props.play_counts.length > 0 &&
                    get_counts_chart('plays', props.play_counts)
                }
                {props.replays_watched.length > 0 &&
                    get_counts_chart('replays', props.replays_watched)
                }
            </script>

        </div>
    );

    function get_rank_chart(id: string, ranks: Rank[]) {
        return `
                const ${id} = document.getElementById('chart-${id}');
                new Chart(${id}, {
                    type: 'line',
                data: {
                    labels: [${ranks.map((r) => `'${moment(r.date).format('MMM DD YY')}'`).join(',')}],
                datasets: [{
                    data: [${ranks.map((r) => r.rank).join(',')}],
                fill: false,
                borderColor: '${colors.ui.accent}',
                tension: 0.1
                }]
            },
                options: {
                    scales: {
                    y: {
                    reverse: true,
                    }
                },
                plugins: {
                    legend: {
                    display: false
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                mode: 'index',
                },
            }
        }
                );
        `};


    function get_counts_chart(id: string, ranks: MonthCount[]) {
        return `
                const ${id} = document.getElementById('chart-${id}');
                new Chart(${id}, {
                    type: 'line',
                data: {
                    labels: [${ranks.map((r) => `'${moment(r.start_date).format('MMM DD YY')}'`).join(',')}],
                datasets: [{
                    data: [${ranks.map((r) => r.count).join(',')}],
                fill: false,
                borderColor: '${colors.ui.accent}',
                tension: 0.1
                }]
            },
                options: {
                    scales: {
                    y: {
                    reverse: false,
                    }
                },
                plugins: {
                    legend: {
                    display: false
                    },
                },
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    intersect: false,
                mode: 'index',
                },
            }
        });
        `};

}

export default UserHistoryPanel;
