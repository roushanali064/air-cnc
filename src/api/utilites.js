// image uploads
export const imageUploads = async img => {
    const fromData = new FormData()
    fromData.append('image',img);
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbb}`
    const response = await fetch(url,{
        method: 'POST',
        body: fromData,
    })
    const data = await response.json();
    console.log(data)
    return data
}