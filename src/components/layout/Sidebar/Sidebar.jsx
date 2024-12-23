import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'
import { useSidebar } from '../../../context/SidebarContext'

const sidebarMenu = [
    {
        title: 'Dashboard',
        icon: './icons/dashboardnew.svg',
        path: '/dashboard',
    },
    {
        title: 'Transactions',
        icon: './icons/transactions.svg',
        path: '/transactions',
    },
    {
        title: 'Accounts',
        icon: './icons/accounts.svg',
        path: '/accounts',
    },
    {
        title: 'Investments',
        icon: './icons/investments.svg',
        path: '/investments',
    },
    {
        title: 'Credit Cards',
        icon: './icons/credit-cards.svg',
        path: '/credit-cards',
    },
    {
        title: 'Loans',
        icon: './icons/loans.svg',
        path: '/loans',
    },
    {
        title: 'Services',
        icon: './icons/services.svg',
        path: '/services',
    },
    {
        title: 'My Privileges',
        icon: './icons/MyPrivileges.svg',
        path: '/my-privileges',
    },
    {
        title: 'Settings',
        icon: './icons/settingspng.png',
        path: '/settings',
    },
]

const Sidebar = () => {
    const { isOpen, setIsOpen } = useSidebar();

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.sidebar')) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <>
            {/* Dark overlay for mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div className={`sidebar fixed md:static w-[250px] h-screen bg-white border-r border-gray-200 
                transition-transform duration-300 ease-in-out z-50
                ${!isOpen ? '-translate-x-full md:translate-x-0' : 'translate-x-0'}`}>
                <div className='px-6 py-4'>
                    <div className='flex items-center gap-2'>
                        <img src="./icons/soar-task.svg" alt="logo" className="w-6 h-6 text-[#232323]" />
                        <span className='font-semibold text-[#232323]'>Soar Task</span>
                    </div>
                </div>
                <div className='py-4'>
                    {sidebarMenu.map((item, index) => (
                        <NavLink
                            key={index}
                            to={item.path}
                        >
                            {({ isActive }) => (
                                <div className={`flex items-center gap-3 px-6 py-3 transition-colors duration-300 ease-in-out relative
                                    ${isActive
                                        ? 'text-[#232323] font-medium before:content-[""] before:absolute before:left-0 before:top-0 before:w-1 before:h-full before:bg-[#232323] before:rounded-tr-lg before:rounded-br-lg'
                                        : 'text-[#B1B1B1] hover:bg-[#F4F4F4]'
                                    }`}
                                >
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className={`w-5 h-5 ${isActive ? 'brightness-0' : 'brightness-[#B1B1B1]'}`}
                                    />
                                    <span>{item.title}</span>
                                </div>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Sidebar