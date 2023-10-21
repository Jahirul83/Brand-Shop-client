import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Brands = ({ data }) => {
    const { id, brandName, cardImage } = data;
    return (
        <div>
            <Link to={`/products/${id}`}>
                <div className="card bg-base-100 shadow-xl my-10">
                    <figure><img className="h-40 w-full" src={cardImage} alt="apple" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {brandName}
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Brands;
Brands.propTypes = {
    data: PropTypes.object

};