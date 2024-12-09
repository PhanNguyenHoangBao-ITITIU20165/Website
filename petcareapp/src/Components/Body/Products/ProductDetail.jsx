import cs from './productDetail.module.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../security/AuthContext';
import { getProductDetail } from '../../apiClient/ProductApi';
import { getUserByUsername } from '../../apiClient/UserApi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { useCart } from '../../CartControl/CartProvider';
import productImg from '../../../../src/assests/homepage/product.png';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function ProductDetail() {
    const [quantityValue, setQuantityValue] = useState(1);
    const [product, setProduct] = useState({});
    const authContext = useAuth();
    const { id } = useParams();
    const maxStars = [1, 1, 1, 1, 1];
    const navigate = useNavigate();

    const CartContext = useCart();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        retrieveDataProduct();
    }, []);

    function retrieveDataProduct() {
        getProductDetail(id)
            .then((response) => Successfully(response))
            .catch((error) => console.log(error));
    }

    function Successfully(response) {
        setProduct(response.data);
    }

    function handlePlusAddToCart() {
        setQuantityValue(Math.min(product.productQuantity, quantityValue + 1));
    }

    function handleMinusAddToCart() {
        setQuantityValue(Math.max(1, quantityValue - 1));
    }

    const linkStyle = {
        backgroundImage: `url(${product.productImageUrl})`,
    };

    function handleAddToCart() {
        CartContext.addFromProductToCartInProductDetail(id, quantityValue);
    }

    return (
        <div className={cs['body']}>
            <div className="grid">
                <div className={cs['path']}>
                    <svg
                        className={cs['path_home']}
                        onClick={() => navigate('/Products/all')}
                        xmlns="http://www.w3.org/2000/svg"
                        width="45"
                        height="45"
                        viewBox="0 0 48 48"
                        fill="none"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M25.4142 4.58606C25.0391 4.21112 24.5305 4.00049 24.0002 4.00049C23.4698 4.00049 22.9612 4.21112 22.5862 4.58606L8.58616 18.5861L4.58616 22.5861C4.39514 22.7706 4.24278 22.9912 4.13796 23.2353C4.03314 23.4793 3.97797 23.7417 3.97566 24.0073C3.97335 24.2728 4.02396 24.5362 4.12452 24.782C4.22508 25.0278 4.37359 25.2511 4.56137 25.4388C4.74916 25.6266 4.97246 25.7751 5.21825 25.8757C5.46405 25.9763 5.72741 26.0269 5.99296 26.0246C6.25852 26.0223 6.52096 25.9671 6.76497 25.8623C7.00898 25.7574 7.22967 25.6051 7.41416 25.4141L8.00016 24.8281V38.0001C8.00016 39.5914 8.6323 41.1175 9.75752 42.2427C10.8827 43.3679 12.4089 44.0001 14.0002 44.0001H34.0002C35.5915 44.0001 37.1176 43.3679 38.2428 42.2427C39.368 41.1175 40.0002 39.5914 40.0002 38.0001V24.8281L40.5862 25.4141C40.9634 25.7784 41.4686 25.98 41.993 25.9754C42.5174 25.9708 43.019 25.7605 43.3898 25.3897C43.7606 25.0189 43.971 24.5173 43.9755 23.9929C43.9801 23.4685 43.7785 22.9633 43.4142 22.5861L25.4142 4.58606Z"
                            fill="#CED4DA"
                        />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path
                            d="M20 34L30 24L20 14"
                            stroke="#CED4DA"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                    <Typography  variant='h3' textAlign='center' style={{ textTransform: 'capitalize'}} >
                        {/* {product.productName?.length > 20
                            ? `${product.productName.slice(0, 50)} ...`
                            : product.productName} */}
                        {product.productCategory}
                    </Typography>
                </div>
                <div className={cs['body_product']}>
                    <div className={cs['row']}>
                        <div className="column2">
                            <div className={cs['img_justify']}>
                                <div className={cs['product_img_wrap']}>
                                    <img src={product.productImageUrl} alt="" className={cs['product_img']}></img>
                                </div>
                            </div>
                            <div className={cs['other-images']}>
                                <div className={cs['another-image']}>
                                    <img src={product.productImageUrl} alt=""></img>
                                </div>
                                <div className={cs['another-image']}>
                                    <img src={product.productImageUrl} alt=""></img>
                                </div>
                                <div className={cs['another-image']}>
                                    <img src={product.productImageUrl} alt=""></img>
                                </div>
                                <div className={cs['another-image']}>
                                    <img src={product.productImageUrl} alt=""></img>
                                </div>
                            </div>
                        </div>

                        <div className="column2">
                            <div className={cs['top_wrap']}>
                                <h2 className={cs['product_name']}>{product.productName}</h2>

                                <span className={cs['product_price']}>${product.productPrice}</span>
                                <h3>Details</h3>
                                <p className={cs['product_description']}>{product.productDescription}</p>
                            </div>
                            <div className={cs['rating']}>
                                <div className={cs['stars']}>
                                    {maxStars.map(() => (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="35"
                                            height="55"
                                            viewBox="0 0 20 32"
                                            fill="none"
                                        >
                                            <path
                                                d="M4.51332 25.304C4.03082 25.5515 3.48332 25.1178 3.58082 24.564L4.61832 18.6515L0.214567 14.4565C-0.196683 14.064 0.0170668 13.3465 0.568317 13.269L6.69082 12.399L9.42082 6.99026C9.66707 6.50276 10.3333 6.50276 10.5796 6.99026L13.3096 12.399L19.4321 13.269C19.9833 13.3465 20.1971 14.064 19.7846 14.4565L15.3821 18.6515L16.4196 24.564C16.5171 25.1178 15.9696 25.5515 15.4871 25.304L9.99832 22.484L4.51207 25.304H4.51332Z"
                                                fill="#FFDA6A"
                                            />
                                        </svg>
                                    ))}
                                </div>
                                <div className={cs['reviews']}>(100 Reviews)</div>
                            </div>
                            <div className={cs['bot_wrap']}>
                                <span>Quantity:</span>
                                <div className={cs['input_wrap']}>
                                    <button className={cs['btn-cal']} onClick={handleMinusAddToCart}>
                                        <FontAwesomeIcon icon={faMinus} />
                                    </button>
                                    <input type="text" id={cs['input-quantity']} value={quantityValue} />
                                    <button className={cs['btn-cal']} onClick={handlePlusAddToCart}>
                                        <FontAwesomeIcon icon={faPlus} />
                                    </button>
                                </div>
                                <span className={cs['currentQuantity']}>({product.productQuantity} left)</span>
                            </div>
                            <div className={cs['buy-add-btn']}>
                                <button className={cs['buy-product']}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="29"
                                        height="29"
                                        viewBox="0 0 29 29"
                                        fill="none"
                                    >
                                        <path
                                            d="M0.674316 3.08481C0.674316 2.85638 0.76506 2.6373 0.926585 2.47578C1.08811 2.31425 1.30718 2.22351 1.53561 2.22351H4.11951C4.31163 2.22356 4.49822 2.28785 4.6496 2.40615C4.80099 2.52445 4.90847 2.68996 4.95496 2.87637L5.65262 5.6687H25.6519C25.7784 5.66882 25.9033 5.69678 26.0177 5.75061C26.1322 5.80444 26.2334 5.88281 26.3141 5.98015C26.3948 6.0775 26.4531 6.19142 26.4849 6.31384C26.5166 6.43626 26.521 6.56417 26.4977 6.68848L23.9138 20.4692C23.8769 20.6666 23.7722 20.8449 23.6177 20.9732C23.4633 21.1015 23.2689 21.1719 23.0681 21.1721H7.5647C7.3639 21.1719 7.16947 21.1015 7.01503 20.9732C6.8606 20.8449 6.75585 20.6666 6.7189 20.4692L4.13673 6.71432L3.44769 3.94611H1.53561C1.30718 3.94611 1.08811 3.85536 0.926585 3.69384C0.76506 3.53231 0.674316 3.31324 0.674316 3.08481ZM9.28729 21.1721C8.37357 21.1721 7.49727 21.535 6.85117 22.1811C6.20508 22.8272 5.8421 23.7035 5.8421 24.6172C5.8421 25.531 6.20508 26.4073 6.85117 27.0534C7.49727 27.6995 8.37357 28.0624 9.28729 28.0624C10.201 28.0624 11.0773 27.6995 11.7234 27.0534C12.3695 26.4073 12.7325 25.531 12.7325 24.6172C12.7325 23.7035 12.3695 22.8272 11.7234 22.1811C11.0773 21.535 10.201 21.1721 9.28729 21.1721ZM21.3455 21.1721C20.4317 21.1721 19.5554 21.535 18.9093 22.1811C18.2632 22.8272 17.9003 23.7035 17.9003 24.6172C17.9003 25.531 18.2632 26.4073 18.9093 27.0534C19.5554 27.6995 20.4317 28.0624 21.3455 28.0624C22.2592 28.0624 23.1355 27.6995 23.7816 27.0534C24.4277 26.4073 24.7906 25.531 24.7906 24.6172C24.7906 23.7035 24.4277 22.8272 23.7816 22.1811C23.1355 21.535 22.2592 21.1721 21.3455 21.1721ZM9.28729 22.8946C9.74415 22.8946 10.1823 23.0761 10.5053 23.3992C10.8284 23.7222 11.0099 24.1604 11.0099 24.6172C11.0099 25.0741 10.8284 25.5123 10.5053 25.8353C10.1823 26.1584 9.74415 26.3398 9.28729 26.3398C8.83043 26.3398 8.39228 26.1584 8.06923 25.8353C7.74618 25.5123 7.5647 25.0741 7.5647 24.6172C7.5647 24.1604 7.74618 23.7222 8.06923 23.3992C8.39228 23.0761 8.83043 22.8946 9.28729 22.8946ZM21.3455 22.8946C21.8023 22.8946 22.2405 23.0761 22.5635 23.3992C22.8866 23.7222 23.0681 24.1604 23.0681 24.6172C23.0681 25.0741 22.8866 25.5123 22.5635 25.8353C22.2405 26.1584 21.8023 26.3398 21.3455 26.3398C20.8886 26.3398 20.4504 26.1584 20.1274 25.8353C19.8043 25.5123 19.6229 25.0741 19.6229 24.6172C19.6229 24.1604 19.8043 23.7222 20.1274 23.3992C20.4504 23.0761 20.8886 22.8946 21.3455 22.8946Z"
                                            fill="#FD7E14"
                                        />
                                    </svg>
                                    Buy now
                                </button>
                                <button onClick={handleAddToCart} className={cs['add-to-cart']}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 29 28"
                                        fill="none"
                                    >
                                        <path
                                            d="M0.609619 2.73022C0.609619 2.50179 0.700363 2.28272 0.861887 2.1212C1.02341 1.95967 1.24249 1.86893 1.47092 1.86893H4.05481C4.24693 1.86898 4.43352 1.93327 4.58491 2.05156C4.73629 2.16986 4.84377 2.33538 4.89027 2.52179L5.58792 5.31412H25.5872C25.7137 5.31423 25.8386 5.3422 25.953 5.39603C26.0675 5.44986 26.1687 5.52823 26.2494 5.62557C26.3301 5.72291 26.3884 5.83684 26.4202 5.95926C26.4519 6.08168 26.4563 6.20959 26.433 6.33389L23.8491 20.1147C23.8122 20.312 23.7075 20.4903 23.553 20.6186C23.3986 20.7469 23.2042 20.8173 23.0034 20.8175H7.5C7.2992 20.8173 7.10478 20.7469 6.95034 20.6186C6.7959 20.4903 6.69115 20.312 6.6542 20.1147L4.07204 6.35973L3.383 3.59152H1.47092C1.24249 3.59152 1.02341 3.50078 0.861887 3.33925C0.700363 3.17773 0.609619 2.95865 0.609619 2.73022ZM9.22259 20.8175C8.30887 20.8175 7.43258 21.1804 6.78648 21.8265C6.14038 22.4726 5.7774 23.3489 5.7774 24.2627C5.7774 25.1764 6.14038 26.0527 6.78648 26.6988C7.43258 27.3449 8.30887 27.7079 9.22259 27.7079C10.1363 27.7079 11.0126 27.3449 11.6587 26.6988C12.3048 26.0527 12.6678 25.1764 12.6678 24.2627C12.6678 23.3489 12.3048 22.4726 11.6587 21.8265C11.0126 21.1804 10.1363 20.8175 9.22259 20.8175ZM21.2808 20.8175C20.367 20.8175 19.4907 21.1804 18.8446 21.8265C18.1985 22.4726 17.8356 23.3489 17.8356 24.2627C17.8356 25.1764 18.1985 26.0527 18.8446 26.6988C19.4907 27.3449 20.367 27.7079 21.2808 27.7079C22.1945 27.7079 23.0708 27.3449 23.7169 26.6988C24.363 26.0527 24.7259 25.1764 24.7259 24.2627C24.7259 23.3489 24.363 22.4726 23.7169 21.8265C23.0708 21.1804 22.1945 20.8175 21.2808 20.8175ZM9.22259 22.5401C9.67945 22.5401 10.1176 22.7216 10.4407 23.0446C10.7637 23.3677 10.9452 23.8058 10.9452 24.2627C10.9452 24.7195 10.7637 25.1577 10.4407 25.4807C10.1176 25.8038 9.67945 25.9853 9.22259 25.9853C8.76573 25.9853 8.32758 25.8038 8.00454 25.4807C7.68149 25.1577 7.5 24.7195 7.5 24.2627C7.5 23.8058 7.68149 23.3677 8.00454 23.0446C8.32758 22.7216 8.76573 22.5401 9.22259 22.5401ZM21.2808 22.5401C21.7376 22.5401 22.1758 22.7216 22.4988 23.0446C22.8219 23.3677 23.0034 23.8058 23.0034 24.2627C23.0034 24.7195 22.8219 25.1577 22.4988 25.4807C22.1758 25.8038 21.7376 25.9853 21.2808 25.9853C20.8239 25.9853 20.3857 25.8038 20.0627 25.4807C19.7397 25.1577 19.5582 24.7195 19.5582 24.2627C19.5582 23.8058 19.7397 23.3677 20.0627 23.0446C20.3857 22.7216 20.8239 22.5401 21.2808 22.5401Z"
                                            fill="white"
                                        />
                                    </svg>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentForm id={id} />
            </div>
        </div>
    );
}
