export const getAllHome =async() => {
    const url = `${process.env.REACT_APP_URL}/homes`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
}