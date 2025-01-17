var charts = [];
hist();
function hist() {
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
            day: "numeric",
        });
    }

    function date_to_month(date) {
        const d = new Date(date);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        });
    }

    function render_chart(id, type) {
        const ctx = document.getElementById("chart-" + id);
        if (!ctx) return;
        const vals = JSON.parse(ctx.attributes["data-vals"].value);

        const data_labels = type === "rank" ? vals.map((r) => date_to_day(r.date)) : vals.map((r) => date_to_month(r.start_date));

        const data_values = type === "rank" ? vals.map((r) => r.rank) : vals.map((r) => r.count);

        const reverse = type === "rank";

        const data = {
            labels: data_labels,
            datasets: [
                {
                    data: data_values,
                    fill: false,
                    borderColor: "#ffb86b",
                    tension: 0.1,
                },
            ],
        };
        const options = {
            scales: {
                y: {
                    reverse,
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                zoom: {
                    pan: {
                        enabled: true,
                        mode: "x",
                    },
                    zoom: {
                        wheel: {
                            enabled: true,
                            modifierKey: "alt",
                        },
                        pinch: {
                            enabled: true,
                        },
                        mode: "x",
                    },
                },
                crosshair: {
                    line: {
                        color: "#ffb86b",
                        width: 1,
                    },
                    sync: {
                        enabled: false,
                    },
                },
            },
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                intersect: false,
                mode: "index",
            },
        };
        const config = {
            type: "line",
            data,
            options,
        };

        charts.push(new Chart(ctx, config));
    }
}
