import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';



const Category = ({categores}) => {
   
    return (
        <div className=' mx-auto'>
         
     <div>
     <aside className="w-1/4 p-4 ">
          
          <nav className=' border-red-200'>
            <NavLink to="/" className="   text-xl font-bold ">All Products</NavLink>
            <NavLink to="/category/laptop" className="block mb-2 ">Laptops</NavLink>
            <NavLink to="/category/phone" className="block mb-2  ">Phones</NavLink>
            <NavLink to="/category/iphone" className="block mb-2 ">iPhones</NavLink>
            <NavLink to="/category/smartwatch" className="block mb-2 ">Smart Watches</NavLink>
            <NavLink to="/category/tv" className="block mb-2 " >TVs</NavLink>
            <NavLink to="/category/headphones" className="block mb-2 ">Headphones</NavLink>
          </nav>
        </aside>
    </div>
        

        <div>
            
           
        </div>
        </div>
    );
};

export default Category;