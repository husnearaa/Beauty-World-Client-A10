import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import swal from 'sweetalert';


const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
    

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);


         // reset error and success
         setRegisterError('');
         setSuccess('');


         if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?]).{6,}$/.test(password)) {
            setRegisterError,
            swal("Oops!", "Your password should have length at least 6 character one upper case and one special characters!", "error");
            return;
        }
        

          // create user
          createUser(email, password)
          .then(result =>{
              console.log(result.user);
              setSuccess,
                swal("Good job!", "User Created Successfully!", "success");
              
          })
          .catch(error =>{
              console.error(error);
            setRegisterError(error.message);
            // swal("Sorry!", "Your email or password is invalid!", "error");
          })

    }

    return (
        <div>
            <div  className="bg-[#C2A973] lg:w-1/3 md:w-1/3 w-4/5 mb-10  mx-auto rounded-md">
                <h2 className="text-2xl my-10 font-bold pt-5 text-center">Please Register!</h2>
                <form onSubmit={handleRegister} className="w-4/5 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn bg-black text-white">Register</button>
                    </div>
                </form>
                {
                    registerError && <p className="text-red-700">{registerError}</p>
                }
                {
                    success && <p className="text-green-600">{success}</p>
                }
                <p className="text-center mt-4 mb-20 pb-5">Already have an Account? <Link
                    className="text-black font-bold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;