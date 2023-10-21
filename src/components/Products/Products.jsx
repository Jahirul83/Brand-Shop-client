import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./productCard";
import apple from "../../assets/apple-branding-history.png"
import samsung from "../../assets/samsung-brand.jpg"
import sony from "../../assets/main-pic-BrandBanner.jpg"
import google from "../../assets/istockphoto-1163973538-1024x1024.jpg"
// import intel from "../../assets/intel-5g-pcs-1024x678.jpg"
// import xiaomi from "../../assets/Xiaomi-Logo-Branding-2021.jpg"


const Products = () => {
    const { id } = useParams();
    const products = useLoaderData();
    return (
        <div>
            {id}
            {/* carousel */}

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={apple} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={samsung} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={sony} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={google} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>

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