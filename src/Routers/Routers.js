import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";


export const routers = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
              path:'/',
              element:<Home/>
            }
    ]
    }
])