import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer";
import CartPanel from "../components/CartPanel/CartPanel";

const RootLayout = () => {
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