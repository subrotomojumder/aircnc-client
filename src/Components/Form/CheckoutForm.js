import React, { useEffect, useState } from 'react';
import { getPaymentIntent } from '../../api/bookings';

const CheckoutForm = ({price}) => {
    const [clientSecret, setClientSecret] = useState('');
    useEffect( ()=> {
        getPaymentIntent(price).then(data =>{
            console.log(data);
            setClientSecret(data)
        })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default CheckoutForm;-