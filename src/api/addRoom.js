// add room
export const addRoom = async room =>{
    const response = await fetch(`http://localhost:5000/room`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(room)
    })
    const data = response.json()
    return data;
}