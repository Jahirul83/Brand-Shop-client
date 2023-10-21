import Swal from "sweetalert2";


const AddProduct = () => {


    const handleSubmit = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const photo = form.photo.value;

        const newProduct = { name, brandName, type, price, description, rating, photo };
        console.log(newProduct);

        // send data to the server

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
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
            <h2 className="text-3xl font-extrabold text-center mb-8">Add A Product</h2>
            <form onSubmit={handleSubmit}>
                {/* form name and brand name row */}
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Brand Name</span>
                        </label>
                        {/* main */}
                        <label className="input-group">

                            <select name="brandName" className="input input-bordered w-full">
                                <option value="Apple">Apple</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                                <option value="Sony">intel</option>
                                <option value="Sony">Google</option>
                                <option value="Sony">Xiaomi</option>
                            </select>
                            {/* <input type="text" name="brandName" placeholder="brand name" className="input input-bordered w-full" /> */}
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
                            <input type="text" name="type" placeholder="Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
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
                            <input type="text" name="description" placeholder="short description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* reting */}
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input
                                type="number"
                                name="rating"
                                placeholder="Rating"
                                className="input input-bordered w-full"
                                min="1"
                                max="5"
                                step="1"
                            />

                           {/*  <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" /> */}
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
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" className="btn btn-block bg-green-500" value="add product" />
            </form>
        </div>
    );
};

export default AddProduct;