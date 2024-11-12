import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import React from 'react';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Allproduct from "../components/Allproduct";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      loader:()=>fetch('/category.json'),
      children: [
        
        {
          path:'/Home',
          element:<Allproduct></Allproduct>,
          
        },
        {
          path:'category/:category',
          element:<Allproduct></Allproduct>,
          
        },
       
      ],
    },
  ]);
  
export default router
