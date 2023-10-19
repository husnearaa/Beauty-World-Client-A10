import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addProduct',
                element: <Home></Home>
            },
            {
                path: '/myCart',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Home></Home>
            },
            {
                path: '/faq',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Home></Home>
            },
        ]
    }
])

export default myCreatedRoute;