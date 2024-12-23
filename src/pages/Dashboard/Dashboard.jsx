import React, { useState } from 'react';
import { Card } from '../../components/common/CreditCard';
import RecentTransaction from '../../components/common/RecentTransaction/RecentTransaction';
import BarChart from '../../components/common/BarChart/BarChart';
import ExpenseChart from '../../components/common/ExpenseChart/ExpenseChart';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import BalanceChart from '../../components/common/BalanceChart/BalanceChart';


const Dashboard = () => {
    const recentTransactions = [
        { id: 1, name: 'Deposit from my Card', date: '28 January 2021', amount: 850, icon: '/icons/business_finance.svg', type: 'withdraw', color: '#FFF5D9' },
        { id: 2, name: 'Deposit Paypal', date: '25 January 2021', amount: 2500, icon: '/icons/paypal_payment.svg', type: 'deposit', color: '#E7EDFF' },
        { id: 3, name: 'Jemi Wilson', date: '21 January 2021', amount: 5400, icon: '/icons/dollar.svg', type: 'deposit', color: '#DCFAF8' },
    ];

    const quickTransferUsers = [
        { id: 1, name: 'Livia Bator', role: 'CEO', img: '/profile/profile-1.png' },
        { id: 2, name: 'Randy Press', role: 'Director', img: '/profile/profile-2.png' },
        { id: 3, name: 'Workman', role: 'Designer', img: '/profile/profile-3.png' },
    ];

    const [selectedUser, setSelectedUser] = useState(1);
    const selectedUserHandler = (id) => {
        setSelectedUser(id);
    }

    return (
        <div className="p-8 md:p-10 space-y-6 bg-[#F5F7FA]">
            {/* TEsting Credit Card */}
            <div> {/* className="min-h-screen" */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column */}
                        <div className="lg:col-span-2">
                            {/* Cards Section */}
                            <div>
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-semibold text-gray-900">My Cards</h2>
                                    <button className="text-blue-600 hover:text-blue-700">See All</button>
                                </div>
                                <div className="flex overflow-x-auto gap-6 pb-4 sm:grid sm:grid-cols-2 sm:overflow-x-visible">
                                    <div className="w-full min-w-[320px] sm:min-w-0">
                                        <Card
                                            balance="5,756"
                                            cardHolder="Eddy Cusuma"
                                            validThru="12/22"
                                            cardNumber="3778 **** **** 1234"
                                            variant="dark"
                                        />
                                    </div>
                                    <div className="w-full min-w-[320px] sm:min-w-0">
                                        <Card
                                            balance="5,756"
                                            cardHolder="Eddy Cusuma"
                                            validThru="12/22"
                                            cardNumber="3778 **** **** 1234"
                                            variant="light"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column Recent Transactions */}
                        <div className="lg:col-span-1">
                            <div className="mb-6">
                                <h2 className="text-2xl font-semibold text-gray-900">Recent Transaction</h2>
                            </div>
                            <RecentTransaction transactions={recentTransactions} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="w-full md:w-2/3">
                    <div>
                        <h2 className="font-semibold text-2xl mb-4">Weekly Activity</h2>
                    </div>
                    <div>
                        <BarChart />
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div>
                        <h2 className="font-semibold text-2xl mb-4">Expense Statistics</h2>
                    </div>
                    <div className=" w-full  bg-white rounded-3xl p-8 pb-0 max-w-md">
                        <ExpenseChart />
                    </div>
                </div>
            </div>


            {/* Quick Transfer & Balance History */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className='mt-8 md:mt-0'>
                    <h2 className="font-semibold text-2xl mb-6">Quick Transfer</h2>
                    <div className="flex flex-col gap-8 rounded-3xl shadow p-4 md:p-8 bg-white">
                        <div className="flex items-center md:gap-16 gap-4 mb-0 md:mb-8 overflow-x-auto sm:overflow-x-visible sm:gap-6 sm:w-full sm:min-w-0 sm:justify-center sm:items-center">
                            {quickTransferUsers.map((user) => (
                                <div key={user.id} className="text-center" onClick={() => selectedUserHandler(user.id)}>
                                    <img
                                        src={user.img}
                                        alt={user.name}
                                        className="w-10 h-10 md:w-[88px] md:h-[88px] rounded-full mx-auto mb-3 object-cover"
                                    />
                                    <p className={`text-[#1A1D1F] text-sm md:text-base whitespace-nowrap mb-1 ${selectedUser === user.id ? 'font-bold' : ''}`}>{user.name}</p>
                                    <p className={`text-[#718EBF] text-xs md:text-sm whitespace-nowrap ${selectedUser === user.id ? 'font-bold' : ''}`}>{user.role}</p>
                                </div>
                            ))}
                            <button className="w-10 h-10 md:w-[88px] md:h-[88px] rounded-full bg-[#ffffff] shadow-md whitespace-nowrap flex items-center justify-center">
                                <ArrowRightIcon className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                            </button>
                        </div>

                        {/* Transfer Amount Section */}
                        <div className="flex justify-between items-center gap-4">
                            <label className="block text-[#8896AB] text-xs whitespace-nowrap md:text-lg ">Write Amount</label>
                            <div className="flex items-center">
                                <div className="relative flex-1">
                                    <input
                                        type="text"
                                        defaultValue="525.50"
                                        className="w-full bg-[#F4F4F4] rounded-l-full py-2 md:py-4 px-4 md:px-6 text-[#1A1D1F] text-sm md:text-xl font-medium focus:outline-none"
                                    />
                                </div>
                                <button className="bg-[#1A1D1F] text-white px-4 md:px-8 py-2 md:py-4 rounded-full -ml-12 relative z-10 flex items-center gap-3 font-semibold text-sm md:text-lg">
                                    Send
                                    <img src="/icons/arrow.svg" alt="arrow right" className="w-4 h-4 md:w-6 md:h-6" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <div>
                        <h2 className="font-semibold text-2xl mb-6">Balance History</h2>
                        <div className='rounded-3xl shadow p-8 bg-white h-[352px]'>
                            <BalanceChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;