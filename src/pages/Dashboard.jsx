import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getaddwish } from '../uT/addcartjavasrict';
import Addcart from './Addcart';
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from '../components/Footer';
import { getaddwish2 } from '../uT/addwishcartjavasrict';
import WishCard from './WishCard';

const Dashboard = () => {
    const data=useLoaderData()
    const[productloact, setproductlocat]=useState(data);

    useEffect(()=>{
     const storgeproduct=getaddwish();
     setproductlocat(storgeproduct);
    },[])
    const[productloact2, setproductlocat2]=useState(data);

    useEffect(()=>{
     const storgeproduct2=getaddwish2();
     setproductlocat2(storgeproduct2);
    },[])

    const [totalcost ,setotaolcost]=useState(0);

    useEffect(()=>{
    setotaolcost(0+totalcost);
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
                <Tabs className='bg-none'>
                <TabList className='flex  justify-center' >
                <Tab className='border-2 p-3 rounded-lg'>Card</Tab>
               
               <Tab className='border-2 p-3 rounded-lg'>wish list</Tab>
               </TabList>

               <TabPanel >
               <div className='flex justify-between '>
            <div ><p className='text-2xl font-bold'>Cart</p></div>
            <div className='flex text-center'>
                <p className='text-center font-bold  items-center justify-center mt-2 mr-2'>Totol Cost :</p>
                <button className='btn'>sort by</button>
                <button className='btn bg-purple-700'>parchase</button>
            </div>
        </div>
      <h2>{
        productloact.map((singleaddcart,  index)=><Addcart  key={index} singleaddcart={singleaddcart}></Addcart>)
        }</h2>
    </TabPanel>
    <TabPanel>
        
      <h2>
        {
            productloact2.map((singleaddcart2 ,index)=><WishCard key={index} singleaddcart2={singleaddcart2}></WishCard>)
                
        }
      </h2>
    </TabPanel>
                </Tabs>


                
            </div>
</div>

          
          
        <Footer></Footer>
        </div>
    );
};

export default Dashboard;<p>dashboard here</p>