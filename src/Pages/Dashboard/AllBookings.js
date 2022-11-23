import React, { useContext, useEffect, useState } from 'react';
import { getAllBookings } from '../../api/bookings';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';

const AllBookings = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        setLoading(true);
        getAllBookings().then(data => {
            setBookings(data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
            setLoading(false)
        })
    }, [user])
    
    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Location</th>
                        <th>Price</th>
                        <th>from</th>
                        <th>to</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        loading ? <Spinner />
                            : <tr>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">Brice Swyre</div>
                                            <div className="text-sm opacity-50">China</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Carroll Group
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                </td>
                                <td>
                                    Carroll Group
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Tax Accountant</span>
                                </td>
                                <td>Red</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllBookings;