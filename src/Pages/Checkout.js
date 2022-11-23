import React, { useContext, useState } from 'react';
import { Tab } from '@headlessui/react'
import ReviewHouse from '../Components/ReviewHouse';
import WhosComing from '../Components/WhosComing';
import Payment from '../Components/Payment';
import CheckoutCart from '../Components/CheckoutCart';
import { AuthContext } from '../contexts/AuthProvider';
import { saveBooking } from '../api/bookings';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';


const Checkout = () => {
    const { user } = useContext(AuthContext);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const { state: checkoutData } = useLocation();

    // const homeData = checkoutData?.homeData;
    const [bookingData, setBookingData] = useState({
        homeData: {
            id: checkoutData?.homeData._id,
            image: checkoutData?.homeData?.image,
            title: checkoutData?.homeData?.title,
            location: checkoutData?.homeData?.location,
            from: checkoutData?.homeData?.from,
            to: checkoutData?.homeData?.To
        },
        hostEmail: checkoutData?.homeData?.host?.email,
        comment: '',
        totalPrice: parseFloat(checkoutData?.totalPrice),
        guestEmail: user?.email,
    });
    const handleBooking = () => {
        saveBooking(bookingData)
            .then(res => {
                console.log(res)
                toast.success('booking successful')
            })
            .catch(err => toast.error(err.message))
    }
    return (
        <div className='md:flex justify-around'>
            <div className=''>
                <Tab.Group
                    onChange={setSelectedIndex}
                    defaultIndex={0}
                >
                    <div className="flex items-center py-4 overflow-y-auto whitespace-nowrap">
                        <Tab.List>
                            <Tab>
                                <div className='flex'>
                                    <span className=" text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" e="evenodd" />
                                        </svg>
                                    </span>
                                    <button className="text-blue-600 dark:text-blue-400 font-bold">1. Review house rules</button>
                                </div>
                            </Tab>
                            <Tab>
                                <div className='flex'>
                                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" e="evenodd" />
                                        </svg>
                                    </span>
                                    <button className="text-blue-600 dark:text-blue-400 font-bold">2. Who's coming?</button>
                                </div>
                            </Tab>
                            <Tab>
                                <div className='flex'>
                                    <span className="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" e="evenodd" />
                                        </svg>
                                    </span>

                                    <button className="text-blue-600 dark:text-blue-400 font-bold">1. Confirm pay</button>
                                </div>
                            </Tab>
                        </Tab.List>
                    </div>
                    <Tab.Panels>
                        <Tab.Panel>
                            <ReviewHouse
                                homeData={{ ...checkoutData?.homeData, totalNights: checkoutData?.totalNights }}
                                setSelectedIndex={setSelectedIndex}
                            ></ReviewHouse>
                        </Tab.Panel>
                        <Tab.Panel>
                            {/* booking component */}
                            <WhosComing
                                setSelectedIndex={setSelectedIndex}
                                bookingData={bookingData}
                                setBookingData={setBookingData}
                                host={checkoutData?.homeData?.host}
                            ></WhosComing>
                        </Tab.Panel>
                        <Tab.Panel>
                            {/* payment component */}
                            <Payment
                                handleBooking={handleBooking}
                            ></Payment>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
            <CheckoutCart homeData={checkoutData?.homeData}></CheckoutCart>
        </div>
    );
};

export default Checkout;
