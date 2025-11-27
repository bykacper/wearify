import PageTitle from "../components/PageTitle/PageTitle"
import ProductsList from "../components/ProductsList/ProductsList";

const Women = () => {
    return (
        <>
            <PageTitle> Kolekcja damska </PageTitle>
            <ProductsList productsCategory={'women'} />
        </>
    )
}

export default Women;