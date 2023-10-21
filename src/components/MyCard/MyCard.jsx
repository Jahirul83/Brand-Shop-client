import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";


const MyCard = () => {
    const cartData = useLoaderData();
    return (
        <div>
            {/* <h2>this is my cart:{cartData.length}</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    cartData.map(cart => <Cart
                        key={cart._id}
                        cart={cart}
                    ></Cart>)
                }
            </div>
        </div>
    );
};

export default MyCard;