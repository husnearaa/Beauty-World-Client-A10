import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {



    const { user, logOut } = useContext(AuthContext);


    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error)
            })

    }



    return (
        <div>
            <nav className="flex justify-between items-center flex-col gap-3 md:flex-row py-5 px-6 text-lg ">
                <Logo></Logo>
                <ul className="flex gap-5 flex-col md:flex-row font-bold">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973] " : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/addProduct"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973] " : ""
                            }
                        >
                            Add Product
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/myCart"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973] " : ""
                            }
                        >
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973]  " : ""
                            }
                        >
                            Blog
                        </NavLink>
                    </li>

                    <li>
                        <NavLink
                            to="/faq"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973]  " : ""
                            }
                        >
                            FAQ
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/login"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-[#C2A973]  " : ""
                            }
                        >
                            Login
                        </NavLink>
                    </li>
                </ul>     
                 {/* <button className="btn bg-[#C2A973] text-white px-10 rounded-none">Login</button> */}
                 {
                    user ? <>
                        <span>{user.email}</span>
                        <button onClick={handleSignOut} className="btn bg-[#C2A973] text-white px-10 rounded-none">Sign Out</button>
                    </>
                        :
                        <Link to='/login'>
                            <button className="btn bg-[#C2A973] text-white px-10 border-black rounded-none">Login</button>
                        </Link>
                }
            </nav>
        </div>
    );
};

export default Navbar;