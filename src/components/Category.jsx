import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';



const Category = ({categores}) => {
   
    return (
        <div className=' mx-auto'>
         
     <div>
     <aside className='rounded-lg bg-gray-200 h-auto p-5' >
          
          <nav className=' border-red-200 flex flex-col gap-5 '>
            <NavLink to="/"    className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`
        }>All Products</NavLink>
            <NavLink to="/category/laptop" className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`} >Laptops</NavLink>
            <NavLink to="/category/phone" className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`}>Phones</NavLink>
            <NavLink to="/category/iphone" className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`}>iPhones</NavLink>
            <NavLink to="/category/smartwatch" className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`}>Smart Watches</NavLink>
            <NavLink to="/category/tv" className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`}>TVs</NavLink>
            <NavLink to="/category/headphones" className={({ isActive }) => 
          ` ${isActive ? 'bg-purple-500 btn p-2 text-center font-semibold' : ' btn'}`}>Headphones</NavLink>
          </nav>
        </aside>
    </div>
      
        </div>
    );
};

export default Category;