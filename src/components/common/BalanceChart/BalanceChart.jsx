import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
)

const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'Balance',
            data: [100, 400, 250, 450, 750, 250, 550],
            borderColor: 'rgb(37, 99, 235)',
            backgroundColor: 'rgba(37, 99, 235, 0.1)',
            tension: 0.4,
            pointRadius: 0,
        },
    ],
}

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
        datalabels: {
            display: false,
        }
    },
    scales: {
        x: {
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.05)',
            },
            border: {
                display: false,
            },
            ticks: {
                color: '#64748b',
            },
        },
        y: {
            grid: {
                display: true,
                color: 'rgba(0, 0, 0, 0.05)',
            },
            border: {
                display: false,
            },
            ticks: {
                color: '#64748b',
                stepSize: 200,
                callback: (value) => `${value}`,
            },
            min: 0,
            max: 800,
        },
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
}

export default function BalanceChart() {
    return (
        <div className="w-full h-full">
            <Line options={{
                ...options,
                maintainAspectRatio: false
            }} data={data} />
        </div>
    )
}