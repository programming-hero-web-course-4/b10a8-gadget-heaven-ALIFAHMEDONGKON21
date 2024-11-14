import React from 'react';

const Addcart = ({singleaddcart}) => {
        
    const{product_image,product_title,specifications,price}=singleaddcart
    console.log(singleaddcart)
    return (
        <div className='flex bg-gray-100'>
            <div className='h-40  bg-gray-100'>
                <img className='h-full p-2 rounded-lg' src={product_image} alt="" />
                
            </div>
            <div className=' flex justify-between' >
            <div className=' items-center justify-center'  >
            <p className=' text-xl font-bold p-2'>{product_title}</p>
            <p className='text-gray-400 font-semibold p-2'>{specifications}</p>
            <p  className=' text-xl font-bold p-2' > price :{price}</p>
            </div>
            <div>
                <p>X</p>
            </div>
            </div>
        </div>
    );
};

export default Addcart;