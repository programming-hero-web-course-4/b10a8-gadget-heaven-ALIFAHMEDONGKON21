import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";

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

  const { product_title } = productDetails;

  console.log("Product title:", product_title);  // Log the product title

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
            
            
            <div className=' border-red-200 -mt-52 bg-white'>
           <p className=' text-black'>{product_title}</p>
            </div>
       
    </div>
            
        </div>
    </div>
  );
};

export default Productdetails;
