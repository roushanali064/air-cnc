export const getRoom = async (id)=>{
    const response = await fetch(`http://localhost:5000/room/${id}`)
    const data = await response.json()
    return data
}