export const getImageUrl = async image => {
    const formData = new FormData();
    formData.append('image',image);
    const url = `https://api.imgbb.com/1/upload?key=e086c0f279a85206f6b58aac9c498a26`;
    const res = await fetch(url, {
        method: 'POST',
        body:formData
    })
    const data = await res.json();
    return data.data.display_url;
}