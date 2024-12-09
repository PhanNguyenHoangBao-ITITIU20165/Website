import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faCaretDown, faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartComponent from '../Body/sidebar.cart/CartComponent';
import React, { useState, useEffect } from 'react';
import { useAuth } from '../security/AuthContext';
import { useCart } from '../CartControl/CartProvider';
import { useCookies } from 'react-cookie';
import { Button } from 'antd';

export default function Header() {
    const authContext = useAuth();
    const cartContext = useCart();
    const [activeNavItem, setActiveNavItem] = useState(null);
    const [activePetItem, setActivePetItem] = useState(null);
    const location = useLocation();
    const AuthContext = useAuth();
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies();

    const handleNavItemClick = (item) => {
        setActiveNavItem(item);
    };

    function handleLogout() {
        removeCookie('username');
        removeCookie('password');
        authContext.logout();
        navigate('/login');
    }

    function handleCartClick() {
        cartContext.setIsCartOpen(true);
    }

    useEffect(() => {
        // Xác định nút kích hoạt dựa trên location
        const path = location.pathname.toLowerCase();
        switch (path) {
            case '/':
                setActiveNavItem('home');
                break;
            case '/products/all':
                setActiveNavItem('products');
                break;
            case '/about':
                setActiveNavItem('about');
                break;
            case '/service':
                setActiveNavItem('services');
                break;
            default:
                setActiveNavItem(null);
        }

        if (['/cat', '/dog', '/bird'].includes(path)) {
            setActivePetItem(path.slice(1)); // Lấy tên pet từ đường dẫn
        } else {
            setActivePetItem(null);
        }
    }, [location.pathname]);

    return (
        <header>
            <nav className="header_nav">
                <div className="nav_wrap_left">
                    <div className="nav_wrap_left_logo" onClick={() => navigate('/')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="45" viewBox="0 0 40 35" fill="none">
                            <path
                                d="M39.722 18.1473C39.3244 19.5988 38.5293 20.8568 37.4848 21.6883C36.6507 22.3533 35.7036 22.7011 34.772 22.7011C34.4213 22.7011 34.0783 22.6527 33.7392 22.5536C32.5076 22.1892 31.5097 21.1776 31.0031 19.7772C30.5393 18.5007 30.5081 16.9989 30.9057 15.547C31.3071 14.0955 32.1022 12.8376 33.1428 12.0061C34.2888 11.0928 35.6529 10.7771 36.8885 11.1407C38.1201 11.5051 39.1218 12.5168 39.6285 13.9171C40.0883 15.1937 40.1234 16.6954 39.722 18.1473ZM13.6625 14.4786C15.128 14.4786 16.5273 13.635 17.5016 12.163C18.3864 10.8284 18.8736 9.08037 18.8736 7.23995C18.8736 5.39791 18.3864 3.64984 17.5016 2.31525C16.5272 0.843698 15.128 0 13.6625 0C12.193 0 10.7939 0.843612 9.81945 2.31525C8.93863 3.64984 8.45141 5.39791 8.45141 7.23995C8.45141 9.08037 8.93863 10.8284 9.81945 12.163C10.7939 13.635 12.1931 14.4786 13.6625 14.4786ZM26.3376 14.4786C27.807 14.4786 29.2062 13.635 30.1806 12.163C31.0614 10.8284 31.5487 9.08037 31.5487 7.23995C31.5487 5.39791 31.0614 3.64984 30.1806 2.31525C29.2062 0.843698 27.8069 0 26.3376 0C24.872 0 23.4728 0.843612 22.4984 2.31525C21.6137 3.64984 21.1265 5.39791 21.1265 7.23995C21.1265 9.08037 21.6137 10.8284 22.4984 12.163C23.4728 13.635 24.872 14.4786 26.3376 14.4786ZM9.09448 15.5479C8.69307 14.0957 7.89797 12.8377 6.85723 12.0061C5.71135 11.0928 4.34721 10.7772 3.11162 11.1408C1.87611 11.5052 0.878275 12.5169 0.371557 13.9172C-0.0883569 15.1937 -0.123377 16.6955 0.27803 18.1474C0.675621 19.5989 1.47072 20.8569 2.51519 21.6884C3.34929 22.3534 4.29642 22.7012 5.22795 22.7012C5.57484 22.7012 5.92172 22.6528 6.25691 22.5537C7.49241 22.1893 8.49025 21.1776 8.99689 19.7773C9.46087 18.5008 9.49207 16.999 9.09448 15.5479ZM27.6471 19.0873C25.5112 16.7656 22.7984 15.4879 20 15.4879C17.2016 15.4879 14.4849 16.7656 12.3568 19.0873C10.3222 21.3014 8.90352 24.3736 8.3578 27.7395C8.01092 29.8867 8.64228 31.9532 10.0961 33.4087C11.6084 34.9234 13.5845 35.3834 15.5177 34.6723C16.9482 34.1443 18.4566 33.8767 20 33.8767C21.5435 33.8767 23.0519 34.1444 24.4823 34.6723C25.0787 34.8916 25.6789 35 26.2675 35C27.5887 35 28.8555 34.4567 29.9 33.4087C31.3577 31.9533 31.9891 29.8868 31.6422 27.7395C31.0966 24.3735 29.6778 21.3013 27.6471 19.0873Z"
                                fill="#FD7E14"
                            />
                        </svg>
                        <h2 className="nav_logo">PetPalz</h2>
                    </div>

                    {AuthContext.isAuthenticated && (
                        <ul className="nav_left_list">
                            <li className={`nav_left_item ${activeNavItem === 'home' ? 'active' : ''}`}>
                                <Link className="nav_left_link" to="/" onClick={() => setActiveNavItem('home')}>
                                    Home
                                </Link>
                            </li>
                            <li className={`nav_left_item ${activeNavItem === 'products' ? 'active' : ''}`}>
                                <Link
                                    className="nav_left_link"
                                    to="/Products/all"
                                    onClick={() => setActiveNavItem('products')}
                                >
                                    Products
                                </Link>
                            </li>
                            <li className={`nav_left_item ${activeNavItem === 'about' ? 'active' : ''}`}>
                                <Link className="nav_left_link" to="/About" onClick={() => setActiveNavItem('about')}>
                                    About us
                                </Link>
                            </li>
                            <li className={`nav_left_item ${activeNavItem === 'services' ? 'active' : ''}`}>
                                <Link
                                    className="nav_left_link"
                                    to="/Service"
                                    onClick={() => setActiveNavItem('services')}
                                >
                                    Services
                                </Link>
                            </li>

                            <li className={`nav_left_item nav_left_item-bridge ${activePetItem ? 'active' : ''}`}>
                                <p className="nav_left_link" onClick={() => setActiveNavItem('information')}>
                                    Information
                                    <FontAwesomeIcon icon={faCaretDown} className="faArrowDown" />
                                </p>
                                <ul className="nav__list-pet">
                                    <li
                                        className={`nav__item-pet ${activePetItem === 'cat' ? 'active' : ''}`}
                                        onClick={() => setActivePetItem('cat')}
                                    >
                                        <Link to="/cat" className="nav__item-pet-link">
                                            Cat
                                        </Link>
                                    </li>
                                    <li
                                        className={`nav__item-pet ${activePetItem === 'dog' ? 'active' : ''}`}
                                        onClick={() => setActivePetItem('dog')}
                                    >
                                        <Link to="/dog" className="nav__item-pet-link">
                                            Dog
                                        </Link>
                                    </li>
                                    <li
                                        className={`nav__item-pet ${activePetItem === 'bird' ? 'active' : ''}`}
                                        onClick={() => setActivePetItem('bird')}
                                    >
                                        <Link to="/bird" className="nav__item-pet-link">
                                            Bird
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    )}
                </div>

                <div className="nav_wrap_right">
                    <ul className="nav_right_list">
                        {authContext.isAuthenticated && (
                            <li className="nav_right_item">
                                <button className="btn-cart" onClick={handleCartClick}>
                                    <FontAwesomeIcon icon={faCartShopping} className="nav_logo_cart" />
                                    <span className="cnt-item">{cartContext.cart.length}</span>
                                </button>
                            </li>
                        )}
                        <li className="nav_right_item">
                            <div className="signUp_wrap">
                                {authContext.isAuthenticated ? (
                                    <>
                                        <Link to="/Account" className="avaUser">
                                            <FontAwesomeIcon icon={faUser} className="faArrowDown" />
                                        </Link>
                                        <FontAwesomeIcon
                                            icon={faArrowRightFromBracket}
                                            className="log-out-icon"
                                            onClick={handleLogout}
                                        />
                                    </>
                                ) : (
                                    <div className="authentication">
                                        <Link to="/login" className="login_btn">
                                            Sign in
                                        </Link>
                                        <Link to="/register" className="login_btn">
                                            Sign up
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {authContext.isAuthenticated && <CartComponent />}
        </header>
    );
}
