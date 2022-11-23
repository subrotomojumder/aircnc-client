export const addHome = async homeData => {
    const url = `${process.env.REACT_APP_URL}/homes`;
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(homeData)
    })
    const data = await res.json();
    return data;
}

export const getSearchResult = async (location, from, to) =>{
    const url = `${process.env.REACT_APP_URL}/search-result?location=${location}&from=${from}&to=${to}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}