import { async } from "@firebase/util";

export const  hostRequest = async hostData => {
    const url = `${process.env.REACT_APP_URL}/users/${hostData?.email}`;
    const res = await fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(hostData)
    })
    const data = await res.json();
    return data;
}

// get user role
export const getUserRole = async email => {
    const url = `${process.env.REACT_APP_URL}/users/${email}`;
    const res = await fetch(url)
    const data = await res.json();
    return data?.role;
}
// get all use
export const getAllUsers = async()=> {
    const url = `${process.env.REACT_APP_URL}/users`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}
export const makeHost = async user => {
    delete user._id;
    const res =  await fetch(`${process.env.REACT_APP_URL}/users/${user?.email}`,{
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({...user, role: 'host'})
    });
    const data = await res.json();
    return data;
}