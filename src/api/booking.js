// get bookings

export const getBookings = async email =>{
    const response = await fetch(`http://localhost:5000/bookings?email=${email}`)
    const bookings = await response.json()
    return bookings;
}

// saved booking
export const savedBooking = async bookingInfo =>{
    const response = await fetch(`http://localhost:5000/booking`,{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(bookingInfo)
    })
    const data = await response.json()
    return data;
}

// booking status

export const saveBookingStatus = async (roomId,status) => {
    const response = await fetch(`http://localhost:5000/bookingStatus/${roomId}`, {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(status)
    })
    const data = await response.json()
    return data
}

// delete booking

export const deleteBooking = async id =>{
    const response = await fetch(`http://localhost:5000/booking/${id}`,{
        method: 'DELETE',
        headers:{
            'content-type': 'application/json'
        },
    })
    const data = await response.json()
    return data;
}