import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Booking from "../pages/Booking/Booking";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: async () => {
                    return fetch(`https://tripsomonia-backend.vercel.app/api/trip-data`);
                  },
            },
            {
                path: '/details/:id',
                element: <Details />,
                loader: async ({ params }) => {
                    return fetch(`https://tripsomonia-backend.vercel.app/api/trip-data/${params.id}`);
                  },
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Signup />
            },
            {
                path: '/booking',
                element: <PrivateRoutes><Booking /></PrivateRoutes>
            }
        ]
    }
])