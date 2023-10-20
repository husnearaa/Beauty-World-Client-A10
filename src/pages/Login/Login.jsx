
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useState } from "react";
import swal from 'sweetalert';





const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location in the login page', location);
    const [loginError, setLoginError] = useState('');
    const [success, setSuccess] = useState('');


    const handleLogin = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        // console.log(form);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);



         // reset error and success
         setLoginError('');
         setSuccess('');



        // add validation and log in
        signIn(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('User Logged in Successfully.')
                setSuccess,
                swal("Good job!", "User Logged in Successfully!", "success");

                // navigate after login 
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error);
                // setLoginError(error.message);
                setLoginError,
                swal("Oops!", "Your email or password is invalid!", "error");
            })
    }



    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                setSuccess,
                swal("Good job!", "User Logged in Successfully!", "success");


                // navigate after login 
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                console.error(error)
            })
    }




    return (
        <div>
            <div className="bg-[#C2A973] lg:w-1/3 md:w-1/3 w-4/5 mb-10 mx-auto rounded-md">
                <h2 className="text-2xl my-10 font-bold pt-5 text-center">Please Login!</h2>
                <form onSubmit={handleLogin} className="w-4/5 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="Password" name="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-black text-white">Login</button>
                    </div>
                    <div className="form-control mt-6">
                        <button onClick={handleGoogleSignIn} className="btn bg-black text-white">Google</button>
                    </div>
                </form>
                {
                    loginError && <p className="text-red-700">{loginError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p className="text-center mt-4 mb-20 pb-5">Don't have an Account? <Link
                    className="text-black font-bold" to='/register'>Register</Link></p>
                    
            </div>
        </div>
    );
};

export default Login;