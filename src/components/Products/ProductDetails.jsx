import { useLoaderData } from "react-router-dom";


const ProductDetails = () => {
    const product = useLoaderData()
    const { _id, name, brandName, type, price, description, rating, photo } = product;

    const handleAddTocart = () =>{

    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-3">description: {description}</p>
                    <p className="py-3">type: {type}</p>
                    <p className="py-3">price: {price} tk</p>
                    <p className="py-3">rating: {rating}</p>
                    <button onClick={handleAddTocart} className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;