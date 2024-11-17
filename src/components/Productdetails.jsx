import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { CiShoppingCart } from "react-icons/ci";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { addtowishlist } from '../uT/addcartjavasrict';
import { addtowishlist2 } from '../uT/addwishcartjavasrict';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Productdetails = () => {
  const data = useLoaderData();
  const { productId } = useParams();
  const id = parseInt(productId);
  

  console.log("Product ID from URL:", productId);  // Log the URL product ID
  console.log("Converted Product ID:", id);  // Log the converted ID

  // Log the full fetched data to inspect its structure
  console.log("Fetched data:", data);

  // Verify the keys and values of the product data
  data.forEach(product => {
    console.log("Product in data:", product);  // Log each product object
    console.log("Product ID in data:", product.product_id);  // Ensure the product_id exists
  });

  // Find the product using strict matching of product_id (convert product_id to a number)
  const productDetails = data.find(product => {
    console.log("Checking product_id:", product.product_id, "against", id);
    return parseInt(product.product_id) === id;  // Convert product_id to a number
  });

  console.log("Found product details:", productDetails);  // Log the found product details

  if (!productDetails) {
    return <div>Product not found for ID: {id}</div>;
  }


  
  const { product_title ,product_image,category,price,description,specifications,availability,rating} = productDetails;

  console.log("Product title:", product_title);  // Log the product title
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const handleread=(id)=>{
    addtowishlist(id)
    toast.success("Product added to the cart!");
}
 const hanlewish=(id)=>
 {
  addtowishlist2(id);
  toast.success("Product added to the wish!");
 }


 const handleAddToCart = (product) => {
  const exists = cart.some((item) => item.product_id === product.product_id);
  if (exists) {
    toast.error("Product is already in the cart!");
  } else {
    setCart([...cart, product]);
    addtowishlist(product)
    toast.success("Product added to the cart!");
  }
};


const handleAddToWishlist = (product) => {
  const exists = wishlist.some(
    (item) => item.product_id === product.product_id
  );
  if (exists) {
    toast.error("Product is already in the wishlist!");
  } else {
    setWishlist([...wishlist, product]);
    addtowishlist2(product)
    toast.success("Product added to the wishlist!");
    
  }
};

  return (
    <div>
      <div className="relative bg-purple-700 h-96 text-center text-white">
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
            <div className="relative z-10 max-w-2xl mx-auto ">
                <h1 className="text-4xl font-bold mb-4">
                Product Details
                </h1>
                <p className="mb-8">
                Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                {/* Shop Now Button */}
                
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-20 z-20 bg-white border-2 ">
            
            
            <div className=' rounded-lg flex  -mt-52 bg-white p-5'>
           
           <div className='w-1/2 p-5 rounded-lg '>
            <img className='w-full rounded-lg' src={product_image} alt="" />
           </div>
           <div  className='text-black text-center w-1/2'>
            <p className='font-bold text-xl'>{product_title}</p>
            <p className='font-bold text-sm'> price: $ {price}</p>
            <button className='text-green-400'>{availability}</button>
            <p>specifications</p>
            <p className='text-gray-400'>{specifications.map(s=><h1>{s}</h1>)}</p>
            <p>rating</p>
            
            <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input
    type="radio"
    name="rating-2"
    className="mask mask-star-2 bg-orange-400"
    defaultChecked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
<div className='flex gap-10  items-center justify-center text-center'>
  
  <button  onClick={() => handleAddToCart(productDetails)} className='bg-purple-700 text-white p-1  items-center justify-center rounded-lg flex  gap-2'>add to card <CiShoppingCart />
           </button>
           <p onClick={()=>handleAddToWishlist(productDetails)} ><IoHeartDislikeOutline />
           </p>
           </div>
           </div>
          
            </div>
       
    </div>
            
        </div>


        {/* footer */}

        <div className='p-20 mt-10 '>
            <p className='text-2xl  font-bold text-center'>Gadget Heaven</p>
            <p className=' text-center'>Leading the way in cutting-edge technology and innovation.</p>
            <div className=' border-b-2 py-2'></div>
            <div className='flex justify-between mt-10'>
                <div className='py-2'>
                    <h3 className='font-bold'>Services</h3>
                    <p>Product Support</p>
                    <p>Order Tracking</p>
                    <p>Shipping & Delivery</p>
                    <p>Returns</p>

                </div>
                <div>
                   <p className='font-bold'>Company</p>
                   <p>About Us</p>
                   <p>Careers</p>
                   <p>Contact</p>
                </div>

                <div>
                    <p className='font-bold'>Legal</p>
                    <p>Terms of Servicey</p>
                   <p>Privacy Policy
                   </p>
                   <p>Cookie Policy</p>
                </div>
            </div>

            
        </div>
        
        <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default Productdetails;
