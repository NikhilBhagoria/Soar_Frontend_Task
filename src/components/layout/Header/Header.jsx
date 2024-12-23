import React from 'react'
import { useLocation } from 'react-router';
import { useSidebar } from '../../../context/SidebarContext';
import { useSettings } from '../../../context/SettingsContext';
const Header = () => {
    const { pathname } = useLocation();
    const title = pathname.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
    const { setIsOpen } = useSidebar();
    const { profileData } = useSettings();

    return (
        <div className='px-4 sm:px-6 py-4 bg-white border-b border-gray-200'>
            <div className='flex justify-between items-center mb-4 md:mb-0'>
                <div className='md:hidden flex items-center gap-2'>
                    <button className='p-2 md:hidden' onClick={() => setIsOpen(prev => !prev)}>
                        <img src="./icons/menu.svg" alt="Menu" className='w-6 h-6' />
                    </button>
                </div>
                <div>
                    <h1 className='text-lg sm:text-xl font-semibold text-gray-900'>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
                </div>
                <div className='flex items-center gap-2 sm:gap-4'>
                    <div className='relative hidden md:block'>
                        <input
                            type="text"
                            placeholder="Search for something"
                            className='pl-10 pr-4 py-4 w-[280px] bg-[#F5F7FA] rounded-full text-sm focus:outline-none'
                        />
                        <img src="./icons/search.svg" alt="search" className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
                    </div>

                    <div className=' items-center gap-2 sm:gap-[30px] mr-1 sm:mr-2 hidden md:flex'>
                        <button className='p-2 sm:p-3 bg-[#F4F4F4] rounded-full'>
                            <img src="./icons/headersetting.png" alt="settings" className='w-5 h-5 text-gray-600' />
                        </button>
                        <button className='p-2 sm:p-3 bg-[#F4F4F4] rounded-full'>
                            <img src="./icons/notification.png" alt="notification" className='w-5 h-5 text-gray-600' />
                        </button>
                    </div>

                    <div className='w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden cursor-pointer hover:opacity-80 transition-opacity duration-300 ease-in-out'>
                        <img
                            src={profileData.profileImage || "/profile/user-profile.svg"}
                            alt={profileData.name || "Profile"}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <div className='relative md:block'>
                    <input
                        type="text"
                        placeholder="Search for something"
                        className='pl-10 pr-4 py-2 w-full bg-[#F5F7FA] rounded-full text-sm focus:outline-none'
                    />
                    <img src="./icons/search.svg" alt="search" className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4' />
                </div>
            </div>
        </div>
    )
}

export default Header