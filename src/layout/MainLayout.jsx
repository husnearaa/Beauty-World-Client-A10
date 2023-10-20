import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useState } from "react";



const MainLayout = () => {

    const [darkMood, setDarkMode] = useState(false);
    console.log(darkMood);
    const handleDark = () => {
      setDarkMode(!darkMood)
    };


    return (
        <div className="max-w-[1300px] mx-auto ">
            <Navbar handleDark={handleDark} darkMood={darkMood}></Navbar>
            <Outlet darkMood={darkMood} ></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;