import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HostMenu = () => {
    return (
        <div>
            <NavLink
                to='manage-home'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${isActive ? 'bg-gray-300' : 'bg-gray-100'}`
                }
            >
                <FingerPrintIcon className='w-5 h-5'/>
                <span className='mx-4 font-medium'>Manage Home</span>
            </NavLink>
            <NavLink
                to='add-home'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 mt-5 translation-colors duration-300 transform hover:bg-gray-500 ${isActive ? 'bg-gray-300' : 'bg-gray-100'}`
                }
            >
                <UserPlusIcon className='w-5 h-5'/>
                <span className='mx-4 font-medium'>Add home</span>
            </NavLink>
        </div>
    );
};

export default HostMenu;