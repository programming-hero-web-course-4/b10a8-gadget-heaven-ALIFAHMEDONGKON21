import React from 'react';
import { Link,  } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import { GiSelfLove } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';



const HomePageBanner = () => {
    const navigate = useNavigate();

    const dashboardRoute = () => {
        navigate("/dashboard");
      };
    return (
        <div className="relative bg-purple-700 h-96 text-center text-white">
            {/* Navbar */}
            <nav className="flex justify-between items-center px-8  py-4">
                <h1 className="text-xl font-bold">Gadget Heaven</h1>
                <div className="hidden lg:flex space-x-8">
                    <Link to="/" className='hover:bg-gray-300'>Home</Link>
                    <Link to="/statistics" className="hover:text-gray-300">Statistics</Link>
                    <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
 
                    <Link to="/contact-us" className="hover:text-gray-300">contact-us</Link>
                </div>
                <div className="flex space-x-4">
                    <button><i className="fas fa-shopping-cart"></i> <FaCartPlus></FaCartPlus></button>
                    <button><i className="fas fa-heart"></i><GiSelfLove></GiSelfLove></button>
                </div>
            </nav>

            {/* Main Banner Text */}
            <div className="relative z-10 max-w-2xl mx-auto ">
                <h1 className="text-4xl font-bold mb-4">
                    Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
                </h1>
                <p className="mb-8">
                    Explore the latest gadgets that will take your experience to the next level. <br />
                    From smart devices to the coolest accessories, we have it all!
                </p>
                {/* Shop Now Button */}
                <button onClick={dashboardRoute}  className="px-8 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition transform hover:scale-105">
                    Shop Now
                </button>
            </div>

            {/* VR Headset Image Positioned Below Banner Text */}
            
        </div>
    );
};

export default HomePageBanner;
