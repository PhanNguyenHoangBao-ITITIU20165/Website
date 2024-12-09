import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AuthProvider from './Components/security/AuthContext';
import CartProvider from './Components/CartControl/CartProvider';
import { DefaultLayout } from './Components/layout/defaultLayout';
import { routes } from './routes';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <CartProvider>
                    <BrowserRouter>
                        <Routes>
                            {routes.map((route, index) => {
                                const Page = route.component;
                                let Layout = DefaultLayout;

                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = DefaultLayout;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                                {Page}
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </BrowserRouter>
                </CartProvider>
            </AuthProvider>
        </div>
    );
}

export default App;
