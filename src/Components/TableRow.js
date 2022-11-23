import React, { useState } from 'react';

const TableRow = ({booking}) => {
    // const [isOpen, setIsOpen] = useState(false);
    // const modalOpen = () => setIsOpen(true);
    // const closeModal = () => setIsOpen(false);
    // const modalHandler = (id) => {
        // deletingBooking(id)
    // }
    console.log(booking)
    return (
        <tr key={booking._id}>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask  w-12 h-12">
                            <img src={booking?.homeData?.image} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{booking?.homeData?.location}</div>
                        <div className="text-sm font-bold">{booking?.homeData?.title}</div>
                    </div>
                </div>
            </td>
            <td>
                
                <br />
                <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>
                ${booking?.totalPrice}
            </td>
            <td>Red</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
            <th>
                <button className='btn-sm btn-ghost btn'>cancel</button>
            </th>
        </tr>
    );
};

export default TableRow;