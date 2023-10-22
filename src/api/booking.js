export const savedBooking = async bookingInfo =>{
    const response = await fetch(`http://localhost:5000/booking`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingInfo)
    })
    const data = response.json()
    return data;
}

// booking status

export const saveBookingStatus = async (roomId,status) => {
    const response = await fetch(`http://localhost:5000/bookingStatus/${roomId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(status)
    })
    const data = await response.json()
    return data
}