import React, { useContext, useEffect, useState } from 'react';
import { getAllBookingsByEmail } from '../../api/bookings';
import { AuthContext } from '../../contexts/AuthProvider';
import Spinner from '../../Components/Spinner/Spinner';
import TableRow from '../../Components/TableRow';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [bookings, setBookings] = useState([]);
    useEffect(() => {
        setLoading(true);
        getAllBookingsByEmail(user?.email).then(data => {
            setBookings(data);
            setLoading(false);
        })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }, [user])
    console.log(bookings)
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
                            : 
                            bookings.map(booking => <TableRow booking={booking} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyBooking;