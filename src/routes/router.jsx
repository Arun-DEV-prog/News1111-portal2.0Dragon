import { createBrowserRouter } from "react-router";
import Homelayout from "../layouts/Homelayout";
import Home from "../Page/Home";
import CatagoryNews from "../Page/CatagoryNews";

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
        element:<h2>Authtication </h2>
    },
    {
        path:'/news',
        element:<h2>News Layout</h2>
    },
    {
        path:'/*',
        element:<h3>Error 404</h3>
    }
])

export default router