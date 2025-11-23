import Hero from '../components/Hero/Hero';
import Newsletter from '../components/Newsletter/Newsletter';
import ProductsList from '../components/ProductsList/ProductsList';
import PromoSection from '../components/PromoSection/PromoSection';
import SectionTitle from '../components/SectionTitle/SectionTitle';

const Home = () => {
    return (
        <>
            <Hero />
            <SectionTitle> Outlet </SectionTitle>
            <ProductsList productsCategory={'outlet'}/>
            <PromoSection />
            <Newsletter />
        </>
    )
}

export default Home;