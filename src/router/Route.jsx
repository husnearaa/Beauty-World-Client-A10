import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AskedQuestions from "../pages/AskedQuestions/AskedQuestions";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import BrandDetails from "../pages/BrandDetails/BrandDetails";
import DetailsPage from "../pages/DetailsPage/DetailsPage";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";


const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brands.json')
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>

            },
            {
                path: '/myCart',
                element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
                loader: () => fetch('https://beauty-world-server.vercel.app/addToCart')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <AskedQuestions></AskedQuestions>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/brands/:brand',
                element: <BrandDetails></BrandDetails>,
                loader: () => fetch('https://beauty-world-server.vercel.app/brands')
            },
            {
                path: '/products/:id',
                element: <PrivateRoute><DetailsPage></DetailsPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://beauty-world-server.vercel.app/brands/${params.id}`)
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://beauty-world-server.vercel.app/brands/${params.id}`)
            },

        ]
    }
])

export default myCreatedRoute;