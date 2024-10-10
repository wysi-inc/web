import "https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js";
// import "https://cdn.jsdelivr.net/npm/hammerjs@2.0.8/hammer.min.js";
// import "https://cdn.jsdelivr.net/npm/chartjs-plugin-zoom@2.0.1/dist/chartjs-plugin-zoom.min.js";
// import "https://cdn.jsdelivr.net/npm/chartjs-plugin-crosshair@2.0.0/dist/chartjs-plugin-crosshair.min.js";

window.addEventListener("load", history);
htmxAfterFunctions.push(history);

function history() {

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
        const div = document.getElementById(`chart-${id}`);
        if (!div) return;
        if (div.innerHTML !== "") return;
        const vals = JSON.parse(div.attributes["data-vals"].value);

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

        const ctx = document.createElement("canvas");
        div.innerHTML = "";
        div.append(ctx);
        new Chart(ctx, config);
    }

}
