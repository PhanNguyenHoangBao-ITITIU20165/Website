import { useEffect } from 'react';
import BookingHistory from '../../HiddenWrapContainer/BookingHistory';
import CourseImage from '../../../assests/aboutuspage/courseImg.jpg';
import TeamImage from '../../../assests/aboutuspage/teamImg.png';
import CongBang from '../../../assests/aboutuspage/CongBang.png';
import GiaBao from '../../../assests/aboutuspage/GiaBao.png';
import TuChi from '../../../assests/aboutuspage/TuChi.png';
import HoangBao from '../../../assests/aboutuspage/HoangBao.png';
import NhatHoang from '../../../assests/aboutuspage/NhatHoang.png';
import MinhVu from '../../../assests/aboutuspage/MinhVu.png';
import ThanhThao from '../../../assests/aboutuspage/ThanhThao.png';
import KhanhDuy from '../../../assests/aboutuspage/KhanhDuy.png';
import DuyKhang from '../../../assests/aboutuspage/DuyKhang.png';
import TrongNghia from '../../../assests/aboutuspage/TrongNghia.png';

import cs from './About.module.css';
const About = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);

    const Members = [
        {
            id: 1,
            image: TrongNghia,
            name: 'Trọng Nghĩa',
            role: 'Project Manager',
            github: 'https://github.com/nguyentrongnghia1702',
        },
        {
            id: 2,
            image: KhanhDuy,
            name: 'Khánh Duy',
            role: 'Back-end Developer',
            github: 'https://github.com/kingstonduy',
        },
        {
            id: 3,
            image: CongBang,
            name: 'Công Bằng',
            role: 'Front-end Developer',
            github: 'https://github.com/congbangitiu',
        },
        {
            id: 4,
            image: HoangBao,
            name: 'Hoàng Bảo',
            role: 'Front-end Developer',
            github: 'https://github.com/PhanNguyenHoangBao-ITITIU20165',
        },
        {
            id: 5,
            image: TuChi,
            name: 'Tú Chi',
            role: 'Business Analyst',
            github: 'https://github.com/tuchihuynhxjulie',
        },
        {
            id: 6,
            image: MinhVu,
            name: 'Minh Vũ',
            role: 'Back-end Developer',
            github: 'https://github.com/PMinhVu',
        },

        {
            id: 7,
            image: GiaBao,
            name: 'Gia Bảo',
            role: 'Front-end Developer',
            github: 'https://github.com/giabao18',
        },
        {
            id: 8,
            image: NhatHoang,
            name: 'Nhật Hoàng',
            role: 'UI/UX Designer',
            github: 'https://github.com/HoangLeCoder',
        },
        {
            id: 9,
            image: ThanhThao,
            name: 'Thanh Thảo',
            role: 'Business Analyst',
            github: 'https://github.com/nanalynh',
        },
        {
            id: 10,
            image: DuyKhang,
            name: 'Duy Khang',
            role: 'UI/UX Designer',
            github: 'https://github.com/ITITIU20227',
        },
    ];

    return (
        <div className={cs['wrapper']}>
            <div className={cs['course-container']}>
                <div className={cs['image-container']}>
                    <img src={CourseImage} alt=""></img>
                </div>
                <div className={cs['content-container']}>
                    <h4>About Course</h4>
                    <p>
                        <strong>Software Engineering</strong> is an important and attractive subject in the field of
                        Information Technology. It helps us gain more practical knowledge about the software development
                        process, specifically project management methods through the division of time and human
                        resources. In addition, the course also focuses specifically on understanding system design,
                        software testing and maintenance. Those methods, if applied strictly and appropriately, will
                        contribute to creating products that meet user requirements and still ensure standards in the
                        software construction process.
                    </p>
                </div>
            </div>
            <div className={cs['team-container']}>
                <div className={cs['content-container']}>
                    <h4>About Teams</h4>
                    <p>
                        Our team brings together members from different majors of the Information Technology Department
                        of <strong>International University - VNUHCM</strong> such as Computer Science, Computer
                        Engineering, and Cyber Security. Under the guidance and support of project manager{' '}
                        <strong>Nguyen Trong Nghia</strong> as well as the efforts of all members, our team has
                        successfully built <strong>PetPalz</strong>, a website specializing in buying and selling pet
                        products. With a friendly interface and useful features, we hope <strong>PetPalz</strong> will
                        bring the most comfortable experience for users and the best products for pets.
                    </p>
                </div>
                <div className={cs['image-container']}>
                    <img src={TeamImage} alt=""></img>
                </div>
            </div>
            <div className={cs['members-container']}>
                <h4>Team members</h4>
                <p>Our team has the total of 10 members</p>
                <div className={cs['member-cards-container']}>
                    {Members.map((member) => (
                        <a href={member.github} key={member.id}>
                            <div className={cs['member-card']}>
                                <img src={member.image} alt=""></img>
                                <div className={cs['member-info']}>
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
