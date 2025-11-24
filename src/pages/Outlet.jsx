import PageTitle from "../components/PageTitle/PageTitle"
import ProductsList from "../components/ProductsList/ProductsList"

const Outlet = () => {
    return (
        <>
            <PageTitle> Wyprzedaż </PageTitle>
            <ProductsList productsCategory={'outlet'} />
        </>

    )
}

export default Outlet;