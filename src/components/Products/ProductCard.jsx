

const ProductCard = ({ product }) => {
    const { name, brandName, type, price, description, rating, photo } = product;
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
                        <button className="btn btn-primary">details</button>
                        <button className="btn btn-primary">Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;