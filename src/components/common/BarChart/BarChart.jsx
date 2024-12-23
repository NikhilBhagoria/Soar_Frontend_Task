import React from "react";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
        datasets: [
            {
                label: "Deposit",
                data: [200, 100, 300, 400, 150, 300, 250],
                backgroundColor: "#396AFF",
                borderRadius: 100,
                barThickness: 8,
                borderSkipped: false,
                borderWidth: 0,
            },
            {
                label: "Withdraw",
                data: [400, 300, 500, 300, 100, 350, 300],
                backgroundColor: "#232323",
                borderRadius: 100,
                barThickness: 8,
                borderSkipped: false,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                align: "end",
                labels: {
                    boxWidth: 12,
                    boxHeight: 12,
                    usePointStyle: true,
                },
            },
            datalabels: {
                display: false,
            }
        },

        scales: {
            x: {
                grid: {
                    display: false, // Removes grid lines on x-axis
                },
                border: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 12,
                    },
                },
                categoryPercentage: 1.0,
                barPercentage: 0.1,
            },
            y: {
                beginAtZero: true,
                grid: {
                    color: "#F3F3F5",
                    lineWidth: 2,
                },
                border: {
                    display: false,
                },
                ticks: {
                    font: {
                        size: 14,
                    },
                    stepSize: 100,
                },
            },
        },
        maintainAspectRatio: false,
    };

    return (
        <div className="w-full h-[350px] bg-white rounded-3xl p-8">
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;
