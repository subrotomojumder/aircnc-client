import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { getImageUrl } from '../../api/imageUpload';
import { getUserRole, hostRequest } from '../../api/user';
import BecomeHostForm from '../../Components/Form/BecomeHostForm';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeHost = () => {
    const {user} = useContext(AuthContext);
    const [role, setRole] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=> {
        getUserRole(user?.email).then(data => {
            setRole(data)
            setLoading(false)
        })
    }, [user])
    const handleSubmit = event => {
        event.preventDefault();
        const location = event.target.location.value;
        const image = event.target.image.files[0];
        getImageUrl(image).then(data => {
            const hostData = {
                location : location,
                documentIMG: data,
                role: 'requested',
                email: user?.email,
            }
            hostRequest(hostData).then(data => {
                console.log(data);
            }).catch(e => console.log(e.message))
        }).catch(e => toast.error(e.message))

    }
    return (
        <div>
            {
                role ? 
                <div className='h-screen flex justify-center items-center'>
                   <p className='text-4xl'> Request sent , wait for admin approval !</p>
                </div>
                : <BecomeHostForm handleSubmit={handleSubmit}></BecomeHostForm>
            }
        </div>
    );
};

export default BecomeHost;