import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails"
import products from '../data/products.json';

const Product = () => {
    const { productId } = useParams();
    const product = products.find(product => product.id === Number(productId));

    return (
        <>
            <ProductDetails product={product} />
        </>
    )
}

export default Product;