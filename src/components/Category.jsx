import React from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router-dom';
import Allproduct from './Allproduct';


const Category = ({categores}) => {
   
    return (
        <div className=' mx-auto'>
            <div className="grid grid-col
         py-5 w-1/4 gap-6" aria-label="Tabs">
        {   
            
            categores.map(category=><NavLink
                to={`category/${category.category}`}
                className={({ isActive }) =>
                    `shrink-0 rounded-lg p-2 text-sm font-medium text-center ${
                        isActive ? "bg-purple-600  text-black" : "hover:bg-purple-700 hover:text-black "
                    }`
                }
                aria-current="page"
                key={category.category}
            >
                {category.category}
            </NavLink>)
        }

    </div>
        
        <div>
            <Outlet></Outlet>
           
        </div>
        </div>
    );
};

export default Category;
