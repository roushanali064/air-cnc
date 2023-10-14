export const allRooms = async ()=>{
    const response = await fetch('http://localhost:5000/rooms')
    const data = await response.json()
    return data
}