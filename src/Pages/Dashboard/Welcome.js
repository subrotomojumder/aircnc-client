import React, { useContext, useEffect, useState } from 'react';
import { getUserRole } from '../../api/user';
import { AuthContext } from '../../contexts/AuthProvider';

const Welcome = () => {
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getUserRole(user?.email)
            .then(data => {
                setRole(data);
                setLoading(false);
            })
            .catch(e => {
                console.log(e.message)
                setLoading(false)
            });
    }, [user])
    return (
        <div className='h-screen text-gray-700 flex flex-col justify-center items-center pb-1'>
            {
                !loading && (
                    <div className='h-screen text-gray-700 flex flex-col justify-center pb-1'>
                        <p className='text-6xl mb-8'>Welcome</p>
                        <p className='text-3xl font-medium'>{role === 'admin' ? 'Admin' : role === 'host' ? 'Host' : 'Users'} Dashboard</p>
                    </div>
                )
            }
        </div>
    );
};

export default Welcome;