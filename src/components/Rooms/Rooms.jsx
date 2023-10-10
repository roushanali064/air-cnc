import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Container from '../Shared/Container';
import Card from './Card';
import Loader from '../Shared/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../Heading/Heading';

const Rooms = () => {
    const [params, setParams] = useSearchParams();
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);
    const category = params.get('category')
    useEffect(() => {
        setLoading(true);
        fetch('./rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filtered = data.filter(room => room.category === category)
                    setRooms(filtered)
                    setLoading(false)
                } else {

                    setLoading(false)
                    setRooms(data)
                }
            })
            .catch(err => console.log(err))
    }, [category])
    if (loading) {
        return <Loader />
    }
    return (
        <Container>
            {
                rooms.length > 0 ?
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 pt-12 gap-12">
                        {rooms.map((room, index) => <Card
                            key={index}
                            room={room} />
                        )}
                    </div>
                    :
                    <div className='pt-12'>
                        <Heading
                            title={'No Rooms Available In This Category'}
                            subtitle={'Please Select Other Category'}
                            center={true}
                        />
                    </div>
            }
        </Container>
    );
};

export default Rooms;