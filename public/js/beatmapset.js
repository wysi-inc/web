import "https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js";

ratings();
function ratings() {
    const ctx = document.getElementById("chart-ratings");
    const vals = JSON.parse(ctx.attributes['data-vals'].value);

    const data = {
        labels: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
            data: vals,
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(255, 205, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(75, 192, 192, 0.5)',
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 99, 132)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
                'rgb(75, 192, 192)',
            ],
        }]
    };
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                display: false,
            },
            x: {
                display: false,
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
        }
    }

    const config = {
        type: 'bar',
        data,
        options
    };

    new Chart(ctx, config);
}
