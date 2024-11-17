import React from 'react';
import { MdDeleteForever } from "react-icons/md";


const WishCard = ({singleaddcart2}) => {
    const{product_image,product_title,specifications,price}=singleaddcart2
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
            
            
            <button className='bg-purple-700 text-white p-2 rounded-lg '>add cart</button>
            </div>
            
            </div>

            </div>
        
    );
};

export default WishCard;