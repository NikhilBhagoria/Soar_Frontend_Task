import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'

const MainLayout = () => {
    return (
        <div className='flex'>
            <Sidebar />
            <div className='w-full'>
                <Header />
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainLayout