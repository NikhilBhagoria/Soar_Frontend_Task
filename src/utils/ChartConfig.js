import { EXPENSE_CATEGORIES } from '../constants/chartData';

export const createChartConfig = () => {
    const categories = Object.values(EXPENSE_CATEGORIES);

    return {
        data: {
            labels: categories.map(cat => cat.label),
            datasets: [{
                data: categories.map(cat => cat.value),
                backgroundColor: categories.map(cat => cat.color),
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                },
                datalabels: {
                    color: '#fff',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    formatter: (value, ctx) => {
                        const label = ctx.chart.data.labels[ctx.dataIndex];
                        return [`${value}%`, label];
                    },
                    textAlign: 'center',
                    display: true
                }
            }
        }
    };
};