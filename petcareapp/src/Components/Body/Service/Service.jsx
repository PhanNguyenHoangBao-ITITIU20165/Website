import cs from './service.module.css';

import { Link } from 'react-router-dom';
import DogCat from '../../../assests/servicepage/DogCat.png';
import PetHealthcare from '../../../assests/servicepage/PetHealthcare.jpg';
import Grooming from '../../../assests/servicepage/Grooming.png';
import Training from '../../../assests/servicepage/Training.png';
import Cleaning from '../../../assests/servicepage/Cleaning.png';
import Healthcare from '../../../assests/servicepage/Healthcare.png';
import Adoption from '../../../assests/servicepage/Adoption.png';
import Advice from '../../../assests/servicepage/Advice.png';
import OurService from '../../../assests/servicepage/OurService.png';
import BookingForm from '../../HiddenWrapContainer/BookingForm';
import { useEffect, useState } from 'react';
import { useAuth } from '../../security/AuthContext';
import { useNavigate } from 'react-router-dom';
export default function Service() {
    const navigate = useNavigate();

    const background2 = cs['body_service_item_background'] + ' ' + 'background2';
    const background3 = cs['body_service_item_background'] + ' ' + 'background3';
    const background4 = cs['body_service_item_background'] + ' ' + 'background4';
    const [open, isOpen] = useState(false);
    const AuthContext = useAuth();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    function handleOpenBookingTrue(e) {
        if (AuthContext.isAuthenticated) {
            isOpen(true);
        } else {
            navigate('/login');
        }
    }

    function handleOpenBookingFalse() {
        isOpen(false);
    }

    const Services = [
        {
            id: 1,
            name: 'Pet Grooming',
            newPrice: 10,
            oldPrice: 14,
            image: Grooming,
        },
        {
            id: 2,
            name: 'Pet Training',
            newPrice: 20,
            oldPrice: 25,
            image: Training,
        },
        {
            id: 3,
            name: 'Pet Healthcare',
            newPrice: 30,
            oldPrice: 32,
            image: Healthcare,
        },
        {
            id: 4,
            name: 'Pet Clean Up',
            newPrice: 15,
            oldPrice: 18,
            image: Cleaning,
        },
        {
            id: 5,
            name: 'Pet Adoption',
            newPrice: 20,
            oldPrice: 22,
            image: Adoption,
        },
        {
            id: 6,
            name: 'Veterinary Care',
            newPrice: 30,
            oldPrice: 33,
            image: Advice,
        },
    ];

    return (
        <div className={cs['wrapper']}>
            <div className={cs['white-rectangle']}></div>
            <div className={cs['introduction']}>
                <div className={cs['questions']}>
                    <h4>Want us to take care of your pets?</h4>
                    <p>Why not take a look at our services?</p>
                </div>
                <img src={DogCat} alt=""></img>
            </div>

            <img src={OurService} alt="" className={cs['our-service']}></img>

            <div className={cs['service-list']}>
                {Services.map((service) => (
                    <div className={cs['service']} key={service.id}>
                        <div className={cs['img-container']}>
                            <img src={service.image} alt="" />
                        </div>
                        <h4>{service.name}</h4>
                        <div className={cs['price']}>
                            <p>${service.newPrice}</p>
                            <p>${service.oldPrice}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={handleOpenBookingTrue} className={cs['book-service-btn']}>
                Book the service
            </button>

            {open && <BookingForm handleOpenBookingFalse={handleOpenBookingFalse} />}
        </div>
    );
}