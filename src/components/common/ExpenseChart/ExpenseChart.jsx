import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { createChartConfig } from '../../../utils/ChartConfig';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function ExpenseChart() {
    const { data, options } = createChartConfig();

    return (
        <div className="w-full h-[350px]">
            <div className="w-full h-full mx-auto">
                <Pie data={data} options={options} />
            </div>
        </div>
    );
}