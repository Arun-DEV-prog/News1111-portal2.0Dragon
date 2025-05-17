import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../Page/Home";
import CatagoryNews from "../Page/CatagoryNews";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AuthLayout from "../layouts/AuthLayout";

const router=createBrowserRouter([
    {
        path:'/',
        Component:Homelayout,
        children:[
            {
               path:'/',
               Component:Home
            },
            {
               path:'/catagory/:id',
               Component:CatagoryNews,
               loader:()=>fetch('/news.json')
            }
        ]
    },
    {
        path:'/auth',
        Component:AuthLayout,
        children:[
             {
                path:'/auth/login',
                Component:Login
             },
             {
                path:'/auth/register',
                Component:Register
             }
        ]
    },
    {
        path:'/news-details/:id',
        element:<h2>News Layout</h2>
    },
    {
        path:'/*',
        element:<h3>Error 404</h3>
    }
])

export default router