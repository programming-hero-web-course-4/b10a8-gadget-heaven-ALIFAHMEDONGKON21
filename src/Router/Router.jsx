import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import React from 'react';
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Allproduct from "../components/Allproduct";
import Productdetails from "../components/Productdetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      
      errorElement: <ErrorPage></ErrorPage>,
      
      children: [
       
       {
       path:'/home',
       element:<Allproduct></Allproduct>
       },
       {
          path:"/category/:slug",
          element:<Allproduct></Allproduct>
       },
      ],
    },
    {
    path:'/product/:productId',
    element:<Productdetails></Productdetails>,
    loader:()=>fetch('/product.json')
    },
    
  ],
  // {
  //   future: {
  //     v7_skipActionErrorRevalidation: true,
  //   },
  // }
);
  
export default router
