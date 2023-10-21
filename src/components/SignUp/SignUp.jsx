import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const SignUp = () => {

    const [SignUpError, setSignUpError] = useState('');
    const [SignUpSuccess, setSignUpSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const { createUser } = useContext(AuthContext);
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);


        if (password.length < 6) {
            setSignUpError('password should be more then 6 characters');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setSignUpError('password should have at lest one upper case characters');
            return;
        }

        // reset error
        setSignUpError('');
        setSignUpSuccess('');

        // creating users
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                setSignUpSuccess('user created successfully');
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(error => {
                console.error(error);
                setSignUpError(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input type={showPass ? "text" : "password"} name='password' placeholder="password" className="input input-bordered w-full" required />
                                    <span className="absolute top-4 right-4" onClick={() => setShowPass(!showPass)}>
                                        {
                                            showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn btn-primary">Register</button>
                                {
                                    SignUpError && <p className="text-red-600">{SignUpError}</p>
                                }
                                {
                                    SignUpSuccess && <p className="text-green-600">{SignUpSuccess}</p>
                                }
                            </div>
                        </form>
                        <div className="px-6 pb-4">
                            <p>have an account. please<Link
                                to='/signIn'>
                                <button className="btn btn-link">Login</button>
                            </Link></p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default SignUp;