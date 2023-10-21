import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {

    const product = useLoaderData()
    const { _id, name, brandName, type, price, description, rating, photo } = product;


    const handleEdits = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const UpdatedProduct = { name, brandName, type, price, description, rating, photo };
        console.log(UpdatedProduct);

        // send data to the server

        fetch(`https://brand-shop-server-3yevjqmt2-jahirul83.vercel.app/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(UpdatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Data inserted successful',
                        'You clicked the button!',
                        'success'
                    )
                }
            })
    }

    return (
        <div className="bg-blue-200 p-20">
            <h2 className="text-3xl font-extrabold text-center mb-8">Edit Product</h2>
            <form onSubmit={handleEdits}>
                {/* form name and brand name row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" defaultValue={name} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="brandName" placeholder="brand name" className="input input-bordered w-full" defaultValue={brandName} />
                        </label>
                    </div>
                </div>
                {/* form type and price row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" defaultValue={type} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" defaultValue={price} />
                        </label>
                    </div>
                </div>
                {/* form description and rating row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">short description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" defaultValue={description} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" defaultValue={rating} />
                        </label>
                    </div>
                </div>
                {/* form Photo URL row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" defaultValue={photo} />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block bg-green-500" value="Edit Product" />
            </form>
        </div>
    );
};

export default UpdateProduct;