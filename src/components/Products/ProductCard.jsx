import { Link } from "react-router-dom";


const ProductCard = ({ product }) => {
    const { _id, name, brandName, type, price, description, rating, photo } = product;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="h-40 w-40" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>type: {type}</p>
                    <p>description: {description}</p>
                    <p>rating: {rating}</p>
                    <p>price: {price}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/productDetails/${_id}`}>
                            <button className="btn btn-primary">details</button>
                        </Link>
                        <Link to={`/updateproduct/${_id}`}><button className="btn btn-primary">EDIT</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;