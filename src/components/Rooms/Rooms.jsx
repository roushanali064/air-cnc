import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader';

const Rooms = () => {
    const [rooms,setRooms] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        fetch('./rooms.json')
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setRooms(data)
        })
        .catch(err=>console.log(err))
    },[])
    if(loading){
        return <Loader/>
    }
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-12 gap-12">
                {rooms.map((room,index)=><Card 
                key={index} 
                room={room}/>
                )}
            </div>
        </Container>
    );
};

export default Rooms;