import data from '../../data/products.json';
import ProductCard from './ProductCard';

const ProductsList = ({ productsCategory  }) => {
    const filteredProducts = (() => {
        switch (productsCategory) {
            case "men":
                return data.filter(p => p.gender === "men");

            case "women":
                return data.filter(p => p.gender === "women");

            case "outlet":
                return data.filter(p => p.outlet);

            default:
                return data; 
        }
    })();

    if (filteredProducts.length === 0) {
        return <p>Brak produktów do wyświetlenia.</p>;
    }

    return (
        <section className="products_list">
            {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </section>
    );
};

export default ProductsList;
