import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import userDefaultPic from "../../assets/user.png"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => console.log('user logout successful'))
            .catch(error => {
                console.error(error);
            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add Product</NavLink></li>
        <li><NavLink to='/mycart'>My cart</NavLink></li>
        {/* <li><NavLink to='/signIn'>login</NavLink></li>
        <li><NavLink to='/signup'>signUp</NavLink></li> */}
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex">
                                <div className="dropdown dropdown-end mr-3 ">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img src={user?.photoURL ? user.photoURL : userDefaultPic} />
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                                        <Link className="ml-3 mb-2" to="/profile"><li>Profile</li></Link>
                                        <Link className="ml-3" to="/signUp"><li>Register</li></Link>
                                    </ul>
                                </div>
                                <button onClick={handleSignOut}
                                    className="btn text-white bg-blue-500">Logout</button>
                            </div>
                            :
                            <Link to='/signIn'><button className="btn text-white bg-blue-500">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;