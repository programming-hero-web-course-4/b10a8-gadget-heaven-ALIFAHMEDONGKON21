import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getaddwish } from '../uT/addcartjavasrict';
import Addcart from './Addcart';
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

import { useNavigate } from 'react-router-dom';


import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Footer from '../components/Footer';
import { getaddwish2 } from '../uT/addwishcartjavasrict';
import WishCard from './WishCard';

import modalphoto from '../assets/Group.png'


const Dashboard = () => {
    const navigate = useNavigate();

    const [totalPrice, setTotalPrice] = useState(0);
    const [showModal, setShowModal] = useState(false);
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

    const [view, setView] = useState('cart');

    useEffect(()=>{
    setotaolcost(0+totalcost);
    },[])
    

 

  
    const handlesort= (type) => {
        const sortedData = [...productloact];
        if (type === 'price') {
            sortedData.sort((a, b) => a.price - b.price); // Assuming each item has a `price` property
        }
        setproductlocat(sortedData);
    };

    useEffect(() => {
        const calculateTotalPrice = productloact.reduce((sum, item) => sum + (item.price || 0), 0);
        setTotalPrice(calculateTotalPrice);
    }, [productloact]);

    const handlePurchase = () => {
        if (totalPrice > 0) {
            setShowModal(true); // Show the modal
            
            setTimeout(() => {
        
                setproductlocat([]); 
                localStorage.removeItem("wish-list"); // Adjust the key name if needed
                
                
                setTotalPrice(0);
            }, 5000);


        } else {
            toast("Your cart is empty. Please add items before purchasing!");
        }
    };



   
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
                    <Link to="/contact-us" className="hover:text-gray-300">contact us</Link>
                </div>
                <div className="flex space-x-4">
                    <button><i className="fas fa-shopping-cart"></i> <FaCartPlus></FaCartPlus></button>
                    <button><i className="fas fa-heart"></i><GiSelfLove></GiSelfLove></button>
                </div>
            </nav>

            {/* Main Banner Text */}
            <div className=" max-w-2xl mx-auto ">
                <h1 className="text-4xl font-bold mb-4">
                Dasboard
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
                <p className='text-center font-bold  items-center justify-center mt-2 mr-2'>Totol Cost :  ${totalPrice.toFixed(2)}</p>
                <button onClick={()=>handlesort('price')} className='btn  text-black'>Sort by price</button>
                <button onClick={handlePurchase} className="btn bg-purple-700">Purchase</button>
            </div>
        </div>
      <h2>{
        productloact.map((singleaddcart,  index)=><Addcart  key={index} singleaddcart={singleaddcart}></Addcart>)
        }</h2>
    </TabPanel>
    <TabPanel>
    <p className='text-2xl font-bold flex justify-start'>WishCard</p>
      <h2>
        {
            productloact2.map((singleaddcart2 ,index)=><WishCard key={index}  singleaddcart2={singleaddcart2}></WishCard>)
                
        }
      </h2>
    </TabPanel>
                </Tabs>



              

            
</div>
</div>
           
{showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg text-center">
                        <img className=' mx-auto' src={modalphoto}alt="" />
                        <h2 className="text-2xl font-bold mb-4">Purchase Confirmation</h2>
                        <p className="mb-4">Your total price is: ${totalPrice.toFixed(2)}</p>
                        <button
                            onClick={() =>{ setShowModal(false);       navigate('/'); // Navigate to home
                            }}
                            className="btn bg-purple-700 text-white px-4 py-2 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
    
        <Footer></Footer>
        <ToastContainer
     position="top-center"
     autoClose={5000}
     hideProgressBar={false}
     newestOnTop={false}
     closeOnClick
     rtl={false}
     pauseOnFocusLoss
     draggable
     pauseOnHover
     theme="light"
     transition: Bounce
     ></ToastContainer>
        </div>
    );
};

export default Dashboard;<p>dashboard here</p>