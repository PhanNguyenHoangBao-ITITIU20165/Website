import Home from '../Components/Body/Home/Home';
import Service from '../Components/Body/Service/Service';
import Cat from '../Components/Body/petInformation/Cat';
import Dog from '../Components/Body/petInformation/Dog';
import Bird from '../Components/Body/petInformation/Bird';
import Hamster from '../Components/Body/petInformation/Hamster';
import Account from '../Components/Body/account/Account';
import ProductShop from '../Components/Body/Products/ProductShop';
import About from '../Components/Body/about/About';
import ProductDetail from '../Components/Body/Products/ProductDetail';
import Checkout from '../Components/Body/checkout/Checkout';
import Login from '../Components/Body/Login/signIn/Login';
import Register from '../Components/Body/Login/signUp/Register';
import Product from '../Components/Body/Products/Product';
import { DefaultLayout } from '../Components/layout/defaultLayout';
import { SignInLayout } from '../Components/layout/signInLayout';
import { SignUpLayout } from '../Components/layout/signUpLayout';

export const routes = [
    { path: '/', component: Home },
    { path: '/Home', component: Home },
    { path: '/Service', component: Service },
    { path: '/Cat', component: Cat },
    { path: '/Dog', component: Dog },
    { path: '/Bird', component: Bird },
    { path: '/Hamster', component: Hamster },
    { path: '/Account', component: Account },
    // { path: '/Products/All' ,component: ProductShop},
    { path: '/Products/:type', component: ProductShop },
    { path: '/Product/Detail/:id', component: ProductDetail },
    { path: '/About', component: About },
    { path: '/Checkout', component: Checkout },
    { path: '/Login', component: Login, layout: SignInLayout },
    { path: '/Register', component: Register, layout: SignUpLayout },
];
