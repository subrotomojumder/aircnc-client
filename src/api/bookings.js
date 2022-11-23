import { async } from "@firebase/util";

// create booking
export const saveBooking = async bookingData => {
    const url = `${process.env.REACT_APP_URL}/bookings`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingData)
    })
    const data = await res.json();
    console.log(data)
    return data;
}

// get booking
export const getAllBookingsByEmail = async email => {
    const url = `${process.env.REACT_APP_URL}/bookings?email=${email}`;
    const res = await fetch(url)
    const data = await res.json();
    return data;
}
// get all booking for admin
export const getAllBookings = async () => {
    const url = `${process.env.REACT_APP_URL}/bookings`;
    const res = await fetch(url)
    const data = await res.json();
    return data;
}

// create payment intent
export const getPaymentIntent = async(price) => {
    const res = await fetch(`${process.env.REACT_APP_URL}/create-payment-intent`,{
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.get('accessToken')}`
        },
        body: JSON.stringify({price})
    });
    const data = await res.json();
    return data;
}