import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const ProductDetails = () => {
    const product = useLoaderData()
    const { name, brandName, type, price, description, rating, photo } = product;

    const handleAddTocart = () => {

        fetch('https://brand-shop-server-3yevjqmt2-jahirul83.vercel.app/carts',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.insertedId)
                {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cart has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })
                      
                }
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl w-full" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-3">description: {description}</p>
                    <p className="py-3">Brand Name: {brandName}</p>
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