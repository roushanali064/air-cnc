import React, { useContext, useState } from 'react';
import Calender from './Calender.jsx'
import Button from '../Button/Button.jsx';
import { AuthContext } from '../../providers/AuthProvider.jsx';
import BookingModal from '../Modal/BookingModal.jsx';
import { formatDistance } from 'date-fns'
import { data } from 'autoprefixer';
import { saveBookingStatus, savedBooking } from '../../api/booking.js';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const RoomReservation = ({roomData}) => {
    const {user} = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    // totalPrice calculation
    const totalPrice = parseFloat(formatDistance(new Date(roomData?.to), new Date(roomData?.from)).split(' ')[0])*roomData?.price;
    const [value, setValue] = useState(
        {
            startDate: new Date(roomData?.from),
            endDate: new Date(roomData?.to),
            key: 'selection',
        })
    // booking info state
    const [bookingInfo, setBookingInfo] = useState({
        roomId: roomData?._id,
        title: roomData?.title,
        guest: {name: user?.displayName, email: user?.email, image: user?.photoURL},
        host: roomData?.host?.email,
        location: roomData?.location,
        price: totalPrice,
        from: value.startDate,
        to: value.endDate,
    })
    
    // modalHandler
    const modalHandler = () =>{
        console.log(bookingInfo,roomData._id);
        savedBooking(bookingInfo)
        .then(res=>{
            if(res?.insertedId){
                saveBookingStatus(roomData?._id,{bookingStatus:true})
                .then(res=>{
                    toast.success('booking successfully')
                    navigate('/')
                })
                .catch(err=>{
                    console.log(err.message);
                    toast.error(err.message)
                })
            }
        })
        .catch(err=>{
            console.log(err.message);
            toast.error(err.message)
        })
    }
    // handle modal close
    const closeModal = ()=>{
        setIsOpen(false)
    }
    // handleDate
    const handleDate = ranges =>{
        setValue({...value})
    }
    return (
        <div className='bg-white border-[1px] rounded-xl border-neutral-200 overflow-hidden'>
            <div className="flex flex-row gap-1 p-4 items-center">
                <div className="font-semibold text-2xl">$ {roomData?.price}</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <div className="flex justify-center">
            <Calender
                value={value}
                handleDate={handleDate}
            />
            </div>
            <hr />
            <div className='p-4'>
                <Button
                onClick={()=>{
                    setIsOpen(true)
                }} 
                disabled={roomData.host.email === user.email || roomData?.bookingStatus === true} label={roomData?.bookingStatus === true ? 'Not available' : 'Reserve'} />
            </div>
            <hr />
            <div className='p-4 flex flex-row justify-between items-center text-lg font-semibold'>
                <div>Total</div>
                <div>$ {totalPrice}</div>
            </div>
            <BookingModal
                modalHandler={modalHandler}
                isOpen={isOpen}
                closeModal={closeModal}
                bookingInfo={bookingInfo}
            />
        </div>
    );
};

export default RoomReservation;