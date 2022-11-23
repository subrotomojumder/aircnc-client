import { Bars3Icon } from '@heroicons/react/24/solid';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import AdminMenu from './AdminMenu';
import HostMenu from './HostMenu';
import UserMenu from './UserMenu';

const Sidebar = ({role}) => {
    const { user } = useContext(AuthContext);
    const [isActive, setIsActive] = useState(false);
    return (
        <>
            <div className=' text-gray-800 flex justify-between md:hidden'>
                <div className='block cursor-pointer p-4 font-bold'>
                    <Link to='/'>AirCnC</Link>
                </div>
                <button
                    onClick={() => setIsActive(!isActive)}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-700'
                >
                    <Bars3Icon className='h-5 w-5'></Bars3Icon>
                </button>
            </div>
            <div className={`${isActive && 'hidden'} md:flex flex-col w-64 h-screen py-8 bg-white border-r dark:bg-gray-900 dark:border-gray-700`}>
                <h2 className="text-3xl font-semibold text-center text-green-500 dark:text-white"><Link to='/'>AirCnC</Link></h2>

                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img className="object-cover w-24 h-24 mx-2 rounded-full" src={user?.photoURL} alt="avatar" />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200 hover:underline">{user?.displayName}</h4>
                    <p className="mx-2 mt-1 text-sm font-medium text-gray-600 dark:text-gray-400 hover:underline">{user?.email}</p>
                </div>

                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                       {role === 'admin' ?<AdminMenu></AdminMenu>: role === 'host' ? <HostMenu></HostMenu> :<UserMenu></UserMenu>}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Sidebar;