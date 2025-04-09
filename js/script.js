document.addEventListener("DOMContentLoaded", function () {
    let barChart; // Declare the chart variable

    document.getElementById('chart-tab').addEventListener('shown.bs.tab', function () {
        console.log("Chart tab activated");

        if (!barChart) {
            const canvas = document.getElementById('myChart');
            if (!canvas) {
                console.error("Canvas element with id 'barChart' not found.");
                return;
            }

            console.log("Canvas element found. Initializing chart...");
            const ctx = canvas.getContext('2d');

            // Initialize the Chart.js bar chart
            barChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                    datasets: [{
                        label: 'Income',
                        data: [5000, 4000, 3000, 7000, 6000, 8000],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }, {
                        label: 'Expenses',
                        data: [2000, 3000, 2500, 4000, 3500, 4500],
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        borderColor: 'rgba(255, 99, 132, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top',
                        },
                        title: {
                            display: true,
                            text: 'Monthly Income vs Expenses'
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });

            console.log("Chart initialized successfully.");
        }
    });
});