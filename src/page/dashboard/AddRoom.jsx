import React, { useContext, useState } from 'react';
import AddRoomForm from '../../components/Forms/AddRoomForum';
import { imageUploads } from '../../api/utilites';
import toast from 'react-hot-toast';
import { AuthContext } from '../../providers/AuthProvider';
import { addRoom } from '../../api/addRoom';

const AddRoom = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const [uploadButtonText, setButtonText] = useState('Upload Image');
    const [dates, setDates] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    })
    // handle submit
    const handleSubmit = event => {
        event.preventDefault();
        setLoading(true)
        const form = event.target;
        const location = form.location.value;
        const category = form.category.value;
        const title = form.title.value;
        const from = dates.startDate
        const to = dates.endDate
        const image = form.image.files[0];
        const price = form.price.value;
        const totalGuest = form.total_guest.value;
        const bedrooms = form.bedrooms.value;
        const bathrooms = form.bathrooms.value;
        const description = form.description.value;
        imageUploads(image)
            .then(res => {
                const roomData = {
                    location,
                    category,
                    title,
                    from,
                    to,
                    image: res?.data?.display_url,
                    price,
                    totalGuest,
                    bedrooms,
                    bathrooms,
                    description,
                    host: {
                        name: user?.displayName,
                        image: user?.photoURL,
                        email: user?.email,
                    }
                }
                addRoom(roomData)
                    .then(res => {
                        if(res.acknowledged === true){
                            toast.success('Room Add successfully')
                            setLoading(false)
                            event.target.reset();
                        }
                        console.log(res);
                    })
                    .catch(err => {
                        console.log(err.message);
                        setLoading(false)
                        toast.error('something went wrong')
                    })
            })
            .catch(err => {
                console.log(err.message);
                setLoading(false)
                toast.error('something went wrong')
            })
    }
    // handel image change
    const handleImageChange = img => {
        setButtonText(img?.name);
    }
    const handleDates = ranges => {
        setDates(ranges.selection)
    }
    return (
        <AddRoomForm
            handleSubmit={handleSubmit}
            handleImageChange={handleImageChange}
            uploadButtonText={uploadButtonText}
            dates={dates}
            handleDates={handleDates}
            loading={loading}
        />
    );
};

export default AddRoom;