import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import MyReviews from "../components/Reviews/MyReviews";
import UpdateReview from "../components/Reviews/UpdateReview";
import AddServices from "../components/Services/AddServices";
import ServiceDetails from "../components/Services/ServiceDetails";
import Services from "../components/Services/Services";
import Main from "../layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: () => fetch('https://dental-whiz-server.vercel.app/services')
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://dental-whiz-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
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
                path: '/addservices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
            },
            {
                path: '/updatereview/:id',
                element: <PrivateRoutes><UpdateReview></UpdateReview></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://dental-whiz-server.vercel.app/reviews/${params.id}`)
            },
        ]
    }
])