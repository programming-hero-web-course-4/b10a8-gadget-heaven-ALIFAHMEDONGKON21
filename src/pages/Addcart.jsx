import React from 'react';


import { MdDeleteForever } from "react-icons/md";

const Addcart = ({singleaddcart}) => {
        
    const{product_image,product_title,specifications,price}=singleaddcart
    console.log(singleaddcart)
    return (
        <div className='flex bg-gray-100 gap-5 border-b-2'>
            <div className='h-40 w-40  bg-gray-100'>
                <img className='h-full w-full p-2 rounded-lg' src={product_image} alt="" />
                
            </div>
            <div className=' w-1/2  flex justify-between' >
            <div className=' items-center justify-center'  >
            <p className=' text-xl font-bold p-2 text-black'>{product_title}</p>
            <p className='text-gray-400 font-semibold p-2'>{specifications}</p>
            <p  className=' text-xl font-bold p-2 text-black' > price :{price}</p>
            </div>
            <div className= 'w-1/2 text-center justify-center items-center p-20'>
                <MdDeleteForever className='text-red-400 text-2xl  justify-center'></MdDeleteForever>
            </div>
            </div>
        </div>
    );
};

export default Addcart;