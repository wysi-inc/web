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
                    <div class="h-64 w-full relative cursor-move">
                        <canvas id={`chart-${type}`} class="absolute select-none" data-vals={JSON.stringify(data)} />
                    </div>
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
        <script type="module">{`
// import "https://cdn.jsdelivr.net/npm/hammerjs@2.0.8/hammer.min.js";
// import "https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js";
// import "https://cdn.jsdelivr.net/npm/chartjs-plugin-crosshair@2.0.0/dist/chartjs-plugin-crosshair.min.js";

history();
function history() {
    
    for (let chart of charts) {
        chart.clear();
        chart.destroy();
    }

    charts = [];

    render_chart("global", "rank");
    render_chart("country", "rank");
    render_chart("plays", "count");
    render_chart("replays", "count");

    function date_to_day(date) {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric"
        });
    }

    function date_to_month(date) {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short"
        });
    }

    function render_chart(id, type) {
        const ctx = document.getElementById("chart-"+id);
            if (!ctx) return;
            const vals = JSON.parse(ctx.attributes["data-vals"].value);

            const data_labels = type === "rank" ?
            vals.map(r => date_to_day(r.date)) :
            vals.map(r => date_to_month(r.start_date));

            const data_values = type === "rank" ?
            vals.map(r => r.rank) :
            vals.map(r => r.count);

            const reverse = type === "rank";

            const data = {
                labels: data_labels,
            datasets: [{
                data: data_values,
            fill: false,
            borderColor: "#ffb86b",
            tension: 0.1
            }]
        };
        const options = {
            scales: {
                y: {
                    reverse
                }
            },
            plugins: {
                legend: {
                display: false
                },
                // zoom: {
                //     pan: {
                //         enabled: true,
                //         mode: "x",
                //     },
                //     zoom: {
                //         wheel: {
                //             enabled: true,
                //             modifierKey: "alt"
                //         },
                //         pinch: {
                //             enabled: true
                //         },
                //         mode: "x",
                //     }
                // },
                // crosshair: {
                //     line: {
                //         color: "#ffb86b",
                //         width: 1
                //     },
                //     sync: {
                //         enabled: false,
                //     },
                // },
            },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
            mode: "index",
            }
        }
        const config = {
            type: "line",
            data,
            options
        };

        charts.push(new Chart(ctx, config));
    }
}`}</script>
    </>);

}

export default UserHistoryPanel;
