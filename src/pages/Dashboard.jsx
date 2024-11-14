import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getaddwish } from '../uT/addcartjavasrict';
import Addcart from './Addcart';
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

const Dashboard = () => {
    const data=useLoaderData()
    const[productloact, setproductlocat]=useState(data);

    useEffect(()=>{
     const storgeproduct=getaddwish();
     setproductlocat(storgeproduct);
    },[])
    
    return (
        <div>
           <div className=" bg-purple-700 h-auto text-center text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center bg-white text-black
             px-8  py-4">
                <h1 className="text-xl font-bold">Gadget Heaven</h1>
                <div className="hidden lg:flex space-x-8">
                    <Link to="/" className="hover:text-gray-300">Home</Link>
                    <Link to="/statistics" className="hover:text-gray-300">Statistics</Link>
                    <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
                </div>
                <div className="flex space-x-4">
                    <button><i className="fas fa-shopping-cart"></i> <FaCartPlus></FaCartPlus></button>
                    <button><i className="fas fa-heart"></i><GiSelfLove></GiSelfLove></button>
                </div>
            </nav>

            {/* Main Banner Text */}
            <div className=" max-w-2xl mx-auto ">
                <h1 className="text-4xl font-bold mb-4">
                Product Details
                </h1>
                <p className="mb-8">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                {/* Shop Now Button */}
                
            </div>

            <div className='flex gap-5 items-center justify-center py-5'>
                <button className='btn p-2'>  cart</button>
                <button className='btn p-2'> wishlist</button>
            </div>
            
            
       
    
            
        </div>
        
            {
                productloact.map((singleaddcart ,index)=><Addcart key={index} singleaddcart={singleaddcart}></Addcart>)

                
            }
        
        </div>
    );
};

export default Dashboard;<p>dashboard here</p>