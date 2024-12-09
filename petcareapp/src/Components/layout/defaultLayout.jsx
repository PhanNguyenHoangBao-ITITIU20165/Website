import React, { Children } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export const DefaultLayout = ({ children }) => {
    console.log(children)
    return (
        <div>
            <Header />
             {children}
            <Footer />
        </div>
    );
};
