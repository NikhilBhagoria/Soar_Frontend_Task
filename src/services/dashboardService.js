// Mock API service for dashboard data
export const dashboardService = {
    async getCardDetails() {
        // Simulate API call
        return {
            balance: 5756,
            cardHolder: 'Eddy Cusuma',
            cardNumber: '3778 **** **** 1234',
            expiry: '12/22',
        };
    },

    async getTransactions() {
        // Simulate API call
        return [
            { name: 'Deposit from my Card', date: '28 January 2021', amount: -850, icon: '💳' },
            { name: 'Deposit Paypal', date: '25 January 2021', amount: 2500, icon: '🅿️' },
            { name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: '👤' },
        ];
    },

    async getWeeklyActivity() {
        // Simulate API call
        return {
            labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
            withdraw: [400, 300, 300, 400, 150, 350, 350],
            deposit: [200, 100, 250, 300, 200, 200, 300],
        };
    },

    async getExpenseStats() {
        // Simulate API call
        return {
            entertainment: 30,
            billExpense: 15,
            others: 35,
            investment: 20,
        };
    },

    async getBalanceHistory() {
        // Simulate API call
        return {
            labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
            data: [200, 300, 400, 600, 400, 300, 500],
        };
    },
}; 