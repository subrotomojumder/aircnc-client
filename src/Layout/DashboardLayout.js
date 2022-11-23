import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { getUserRole } from '../api/user';
import Sidebar from '../Components/Dashboard/Sidebar';
import Spinner from '../Components/Spinner/Spinner';
import { AuthContext } from '../contexts/AuthProvider';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getUserRole(user?.email).then(data => {
            setRole(data)
            setLoading(false)
        }).catch(er=> {
            setLoading(false)
        })
    }, [user])
    return (
        <div className='lg:flex relative min-h-screen'>
            {loading ? <Spinner></Spinner>
                : <>
                    <Sidebar role={role}></Sidebar>
                    <div className='bg-orange-50 flex-1'>
                        <div className='p-5'>
                            <Outlet />
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default DashboardLayout;