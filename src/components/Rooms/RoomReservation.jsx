import React from 'react';
import Calender from './Calender.jsx'
import Button from '../Button/Button.jsx';

const RoomReservation = () => {
    return (
        <div className='bg-white border-[1px] rounded-xl border-neutral-200 overflow-hidden'>
            <div className="flex flex-row gap-1 p-4 items-center">
                <div className="font-semibold text-2xl">$ 200</div>
                <div className="font-light text-neutral-600">night</div>
            </div>
            <hr />
            <Calender/>
            <hr />
            <div className='p-4'>
                <Button label={'Reserve'} />
            </div>
            <hr />
            <div className='p-4 flex flex-row justify-between items-center text-lg font-semibold'>
                <div>Total</div>
                <div>$ 400</div>
            </div>
        </div>
    );
};

export default RoomReservation;