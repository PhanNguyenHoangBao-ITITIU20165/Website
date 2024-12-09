import cs from './ProductShop.module.css';
import { useEffect, useState } from 'react';
import PetShopProduct from '../../../assests/productpage/petshopproduct.png';
import { Switch } from 'antd';
import { Link, useParams } from 'react-router-dom';
import Product from './Product';
import { Box, Pagination } from '@mui/material';
import { useAuth } from '../../security/AuthContext';
import { getProductByConstraint, getProductByInStock, getProducts } from '../../apiClient/ProductApi';
import { useNavigate } from 'react-router-dom';
export default function ProductShop() {
    const { type } = useParams();
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const authContext = useAuth();

    const [loading, setLoading] = useState(true); // Start with loading set to true
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(18);
    const productPage = Math.ceil(products.length / productsPerPage);
    const token = localStorage.getItem('token');

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        setLoading(true);
        // handleChangePage(1)
        retrieveProducts();
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [type]);

    async function retrieveProducts() {
        await getProductByConstraint(type)
            .then((response) => successfully(response))
            .catch((error) => console.log(error));

        // await getProductByConstraint(type)
        //     .then((response) => successfully(response))
        //     .catch((error) => console.log(error));

        // console.log(localStorage.getItem('token'));
    }

    function successfully(response) {
        setProducts(response.data);
    }

    function handleChangeSelect(e) {
        navigate(`/Products/${e.target.value}`);
    }

    function handleSort(e) {
        if (e.target.value == 'ascending') {
            const newProducts = products.sort((a, b) => a.productPrice - b.productPrice);

            setProducts([...newProducts]);
        } else if (e.target.value == 'descending') {
            const newProducts = products.sort((a, b) => b.productPrice - a.productPrice);

            setProducts([...newProducts]);
        }
    }

    async function handleChangeToggle(e) {
        if (e == true) {
            try {
                const response = await getProductByInStock();
                if (response.status == 200) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const response = await getProducts(token);
                if (response.status == 200) {
                    setProducts(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const handleChangePage = (event, value) => {
        window.scrollTo({
            top: 50,
            left: 0,
            behavior: 'smooth',
        });

        setCurrentPage(value);
    };

    return (
        <div className={cs['body']}>
            <img src={PetShopProduct} alt=""></img>
            <div className="grid">
                <div className={cs['body_sort']}>
                    <div className={cs['body_sort_left']}>
                        <div className={cs['sortGroup']}>
                            <label>Sorted by</label>
                            <select name="" className={cs['select']} id="selectSort" onChange={handleSort}>
                                <option value="ascending">Ascendingly</option>
                                <option value="descending">Descendingly</option>
                            </select>
                        </div>
                    </div>

                    <div className={cs['body_sort_right']}>
                        <div className={cs['sortGroup']}>
                            <label htmlFor="selectFilter">Filtered by</label>
                            <select name="" id="selectFilter" onChange={handleChangeSelect}>
                                <option value="all">All</option>
                                <option value="food">Food</option>
                                <option value="fashion">Fashion</option>
                                <option value="toy">Toy</option>
                                <option value="grooming">Grooming</option>
                            </select>
                        </div>

                        <div className={cs['sortGroup']}>
                            <label>In Stock</label>
                            <Switch onChange={handleChangeToggle} className={cs['switchToggle']} />
                        </div>
                    </div>
                </div>

                <div className={cs['home-product']}>
                    {currentProducts.map((product) => (
                        <Product key={product.id} data={product} />
                    ))}
                </div>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '70px',
                    }}
                >
                    <Pagination
                        count={productPage}
                        shape="rounded"
                        size="large"
                        color="primary"
                        sx={{
                            fontWeight: 'bold',
                        }}
                        page={currentPage}
                        onChange={handleChangePage}
                    />
                </Box>
            </div>

            {/* <div className={cs['pagination']}>
                <div className={cs['pagination-wrap']}>
                    {Array.from({ length: Math.ceil(products.length / productsPerPage) }, (_, index) => (
                        <button
                            className={currentPage === index + 1 ? cs['active'] : ''}
                            key={index + 1}
                            onClick={() => paginate(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div> */}

            {loading ? (
                <div className={cs['spinner-overlay']}>
                    <div className={cs['spinner-container']}>
                        <div className={cs['spinner']}></div>
                    </div>
                </div>
            ) : (
                <div>{/* Render your data when not loading */}</div>
            )}
        </div>
    );
}
