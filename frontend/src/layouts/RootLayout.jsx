import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import CartPanel from "../components/CartPanel/CartPanel";
import { useEffect } from "react";

const RootLayout = () => {
    const { pathname } = useLocation();
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return (
        <>
            <Header />
            <CartPanel />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default RootLayout;