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

    const Tab = (p: { type: string, title: string, col: string, check: boolean }) => {
        return (<>
            <input type="radio" name="history_tabs" role="tab" class={`tab text-nowrap ${p.col}`}
                aria-label={p.title} checked={p.check} />
            <div role="tabpanel" class="tab-content pt-4">
                {props.db_ranks.global_rank_history.length > 0 ?
                    <div class="h-64 w-full relative">
                        <canvas id={`chart-${p.type}`} class="absolute" />
                    </div> :
                    "No data found"
                }
            </div>
        </>
        );
    }

    return (
        <div role="tablist" class="tabs tabs-bordered grid grid-cols-4">
            <Tab type="global" title="Global Rank" col="col-start-1 col-end-1" check={true} />
            <Tab type="country" title="Country Rank" col="col-start-2 col-end-2" check={false} />
            <Tab type="plays" title="Play Count" col="col-start-3 col-end-3" check={false} />
            <Tab type="replays" title="Replays Watched" col="col-start-4 col-end-4" check={false} />
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
