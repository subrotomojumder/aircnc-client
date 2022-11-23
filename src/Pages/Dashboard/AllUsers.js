import React, { useContext, useEffect, useState } from 'react';
import { getAllBookingsByEmail } from '../../api/bookings';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';
import { getAllUsers, makeHost } from '../../api/user';
import SmallSpinner from '../../Components/Spinner/SmallSpinner';

const AllUsers = () => {
    const [loading, setLoading] = useState(false);
    const [allUsers, setaAlUsers] = useState([]);
    useEffect(() => {
        getUsers()
    }, []);
    const handleRequest = user => {
        makeHost(user).then(data => {
            // console.log(data)
            getUsers();
        })
        .catch(e => console.log(e.message))
    }
    const getUsers = () => {
        setLoading(true);
        getAllUsers().then(data => {
            setaAlUsers(data)
            setLoading(false);
        })
    };
    
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>email</th>
                        <th>role</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allUsers.map(user => <tr key={user._id}>

                            <td>
                                {user.email}
                                <br />
                                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                            </td>
                            <td>{user.role}</td>
                            <th>
                                {user?.role && user.role === 'requested' && (
                                    <button onClick={()=> handleRequest(user)} className='btn-sm btn-warning rounded-t-full rounded-b-full '>
                                        <span>
                                            {loading ? <SmallSpinner /> : 'Approve Request'}
                                        </span>
                                    </button>
                                )}
                            </th>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;