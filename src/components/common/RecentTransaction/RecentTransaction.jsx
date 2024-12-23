import React from 'react'
const RecentTransaction = ({ transactions }) => {
    return (
        <div className="space-y-4 bg-white p-6 rounded-3xl">
            {transactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between pb-4">
                    <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full`} style={{ backgroundColor: transaction.color }} >
                            <img src={transaction.icon} alt={transaction.name} className="w-full h-full object-none" />
                        </div>
                        <div>
                            <p className="font-medium">{transaction.name}</p>
                            <p className="text-sm text-gray-500">{transaction.date}</p>
                        </div>
                    </div>
                    <p className={`font-medium ${transaction.type === "deposit" ? "text-[#41D4A8]" : "text-[#FF4B4A]"}`}>
                        {transaction.type === "deposit" ? "+" : "-"}${Math.abs(transaction.amount).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default RecentTransaction