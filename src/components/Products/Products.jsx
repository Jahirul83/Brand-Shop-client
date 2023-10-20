import { useLoaderData } from "react-router-dom";
import ProductCard from "./productCard";


const Products = () => {
    const products = useLoaderData();
    return (
        <div>
            <h2>tis is product page:{products.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-24">
            {
                products.map(product => <ProductCard
                key={product._id}
                product={product}
                ></ProductCard>)
            }
            </div>
        </div>
    );
};

export default Products;