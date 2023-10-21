import Swal from "sweetalert2";


const Cart = ({ cart }) => {
    const { _id, name, brandName, type, price, description, rating, photo } = cart;

    const handleDelete = _id => {

        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://brand-shop-server-3yevjqmt2-jahirul83.vercel.app/carts/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0)
                            Swal.fire(
                                'Deleted!',
                                'Your cart has been deleted.',
                                'success'
                            )
                    })


            }
        })

    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img className="w-2/3" src={photo} alt="product" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p>{type}</p>
                    <p>{price} tk</p>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn btn-primary">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;