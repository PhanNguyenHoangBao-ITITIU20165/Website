import cs from './Product.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import product from '../../../../src/assests/homepage/product.png';
import { useAuth } from '../../security/AuthContext';
import { useNavigate } from 'react-router-dom';
import { addProductOnCart } from '../../apiClient/CartApi';
import { useCart } from '../../CartControl/CartProvider';

export default function Product({ data }) {
    const navigate = useNavigate();
    const authContext = useAuth();
    const cartContext = useCart();
    const { id, productName, productQuantity, productCategory, productPrice, productImageUrl } = data;
    const maxStars = [1, 1, 1, 1, 1];

    async function handleAddToCart(e) {
        e.preventDefault();
        if (authContext.isAuthenticated) {
            cartContext.addFromProductToCart(id);
        } else {
            navigate('/login');
        }
    }

    const linkStyle = {
        backgroundImage: `url(${productImageUrl})`,
    };

    return (
        <div className="wrapper">
            {/* <Link to={`/Product/Detail/${id}`} className={cs['product_item']}>
                <div className={cs['product_img_wrap']}>
                    <div style={linkStyle} className={cs['product_item_img']}></div>
                    <div onClick={handleAddToCart} className={cs['product_item_add_btn']}>
                        Add To Cart
                    </div>
                </div>
                <p className={cs['product_item_name']}>
                    {' '}
                    {productName.length > 20 ? `${productName.slice(0, 30)}...` : productName}
                </p>
                <p className={cs['product_item_description']}>{productCategory}</p>
                <p className={cs['product_item_price']}>${productPrice}</p>
            </Link> */}

            <Link to={`/Product/Detail/${id}`} className={cs['product-card']}>
                <div className={cs['product-img']}>
                    {/* <img src={productImageUrl} alt=""></img> */}
                    {/* <img src={productImageUrl} alt=""></img> */}    
                    <img src={productImageUrl} alt=""></img>
                </div>
                <p className={cs['product-name']}>
                    {productName.length > 20 ? `${productName.slice(0, 30)}...` : productName}
                </p>
                <div className={cs['product-price']}>
                    <p className={cs['price-after']}>${productPrice}</p>
                </div>
                <button onClick={handleAddToCart} className={cs['add-to-cart']}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path
                            d="M0.609619 2.73022C0.609619 2.50179 0.700363 2.28272 0.861887 2.1212C1.02341 1.95967 1.24249 1.86893 1.47092 1.86893H4.05481C4.24693 1.86898 4.43352 1.93327 4.58491 2.05156C4.73629 2.16986 4.84377 2.33538 4.89027 2.52179L5.58792 5.31412H25.5872C25.7137 5.31423 25.8386 5.3422 25.953 5.39603C26.0675 5.44986 26.1687 5.52823 26.2494 5.62557C26.3301 5.72291 26.3884 5.83684 26.4202 5.95926C26.4519 6.08168 26.4563 6.20959 26.433 6.33389L23.8491 20.1147C23.8122 20.312 23.7075 20.4903 23.553 20.6186C23.3986 20.7469 23.2042 20.8173 23.0034 20.8175H7.5C7.2992 20.8173 7.10478 20.7469 6.95034 20.6186C6.7959 20.4903 6.69115 20.312 6.6542 20.1147L4.07204 6.35973L3.383 3.59152H1.47092C1.24249 3.59152 1.02341 3.50078 0.861887 3.33925C0.700363 3.17773 0.609619 2.95865 0.609619 2.73022ZM9.22259 20.8175C8.30887 20.8175 7.43258 21.1804 6.78648 21.8265C6.14038 22.4726 5.7774 23.3489 5.7774 24.2627C5.7774 25.1764 6.14038 26.0527 6.78648 26.6988C7.43258 27.3449 8.30887 27.7079 9.22259 27.7079C10.1363 27.7079 11.0126 27.3449 11.6587 26.6988C12.3048 26.0527 12.6678 25.1764 12.6678 24.2627C12.6678 23.3489 12.3048 22.4726 11.6587 21.8265C11.0126 21.1804 10.1363 20.8175 9.22259 20.8175ZM21.2808 20.8175C20.367 20.8175 19.4907 21.1804 18.8446 21.8265C18.1985 22.4726 17.8356 23.3489 17.8356 24.2627C17.8356 25.1764 18.1985 26.0527 18.8446 26.6988C19.4907 27.3449 20.367 27.7079 21.2808 27.7079C22.1945 27.7079 23.0708 27.3449 23.7169 26.6988C24.363 26.0527 24.7259 25.1764 24.7259 24.2627C24.7259 23.3489 24.363 22.4726 23.7169 21.8265C23.0708 21.1804 22.1945 20.8175 21.2808 20.8175ZM9.22259 22.5401C9.67945 22.5401 10.1176 22.7216 10.4407 23.0446C10.7637 23.3677 10.9452 23.8058 10.9452 24.2627C10.9452 24.7195 10.7637 25.1577 10.4407 25.4807C10.1176 25.8038 9.67945 25.9853 9.22259 25.9853C8.76573 25.9853 8.32758 25.8038 8.00454 25.4807C7.68149 25.1577 7.5 24.7195 7.5 24.2627C7.5 23.8058 7.68149 23.3677 8.00454 23.0446C8.32758 22.7216 8.76573 22.5401 9.22259 22.5401ZM21.2808 22.5401C21.7376 22.5401 22.1758 22.7216 22.4988 23.0446C22.8219 23.3677 23.0034 23.8058 23.0034 24.2627C23.0034 24.7195 22.8219 25.1577 22.4988 25.4807C22.1758 25.8038 21.7376 25.9853 21.2808 25.9853C20.8239 25.9853 20.3857 25.8038 20.0627 25.4807C19.7397 25.1577 19.5582 24.7195 19.5582 24.2627C19.5582 23.8058 19.7397 23.3677 20.0627 23.0446C20.3857 22.7216 20.8239 22.5401 21.2808 22.5401Z"
                            fill="white"
                        />
                    </svg>
                    Add to Cart
                </button>
            </Link>
        </div>
    );
}
