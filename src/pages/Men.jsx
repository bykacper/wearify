import PageTitle from "../components/PageTitle/PageTitle"
import ProductsList from "../components/ProductsList/ProductsList";

const Men = () => {
    return (
        <>
            <PageTitle> Kolekcja męska </PageTitle>
            <ProductsList productsCategory={'men'} />
        </>
    )
}

export default Men; 