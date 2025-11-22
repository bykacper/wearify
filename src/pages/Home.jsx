import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import ProductsList from '../components/ProductsList/ProductsList';

const Home = () => {
    return (
        <>
            <Header />
            <Hero />
            <ProductsList productsCategory={'outlet'}/>
        </>
    )
}

export default Home;