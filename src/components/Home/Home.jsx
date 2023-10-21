import Banner from "./Banner/Banner";
// import apple from "../../assets/apple-branding-history.png"
// import samsung from "../../assets/samsung-brand.jpg"
// import sony from "../../assets/main-pic-BrandBanner.jpg"
// import google from "../../assets/istockphoto-1163973538-1024x1024.jpg"
// import intel from "../../assets/intel-5g-pcs-1024x678.jpg"
// import xiaomi from "../../assets/Xiaomi-Logo-Branding-2021.jpg"
import { useLoaderData } from "react-router-dom";
import FAQ from "./FAQ";
import ContactUs from "./ContactUs";
import Brands from "./brands";

const Home = () => {
    const loadData = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            {/* <div>
                <h2>
                    {loadData.length}
                </h2>
            </div> */}
            <h2 className="text-3xl font-semibold text-center mt-5">Brands</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                {
                    loadData.map(data => <Brands
                        key={loadData.id}
                        data={data}
                    ></Brands>)
                }
            </div>

            {/* brand without json */}
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
               
                <Link to='/products'>
                    <div className="card bg-base-100 shadow-xl my-10">
                        <figure><img className="h-40" src={apple} alt="apple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                        </div>
                    </div>
                </Link>

                
                <Link to='/products'>
                    <div className="card bg-base-100 shadow-xl my-10">
                        <figure><img className="h-40 w-full" src={samsung} alt="apple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                        </div>
                    </div>
                </Link>
                
                <Link to='/products'>
                    <div className="card bg-base-100 shadow-xl my-10">
                        <figure><img className="h-40" src={sony} alt="apple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                        </div>
                    </div>
                </Link>
                
                <Link to='/products'>
                    <div className="card bg-base-100 shadow-xl my-10">
                        <figure><img className="h-40 w-full" src={intel} alt="apple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                        </div>
                    </div>
                </Link>
               
                <Link to='/products'>
                    <div className="card bg-base-100 shadow-xl my-10">
                        <figure><img className="h-40 w-full" src={google} alt="apple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                        </div>
                    </div>
                </Link>
                
                <Link to='/products'>
                    <div className="card bg-base-100 shadow-xl my-10">
                        <figure><img className="h-40 w-full" src={xiaomi} alt="apple" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Shoes!
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                        </div>
                    </div>
                </Link>
            </div> */}

            {/* FAQ */}
            <div className="my-5">
                <FAQ></FAQ>
            </div>

            {/* contact Us */}
            <div>
                <ContactUs></ContactUs>
            </div>
        </div>
    );
};

export default Home;