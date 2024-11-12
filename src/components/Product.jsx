import React from 'react';

const Product = ({product}) => {
    const{product_title,price,product_image}=product
    return (
        <div>
           <div className="card bg-base-100  shadow-xl">
    <figure className='h-40 object-containover '>
      <img className='w-full'
        src={product_image}
        alt="products" />
    </figure>
    <div className="card-body">
    <div className='p-4'>
          <h1 className='text-xl'>Name: {product_title}</h1>
          <p>price: {price}</p>
          <button className=' text-purple-700  border-purple-700-2 btn border-2'>Veiw </button>
        </div>
    </div>
  </div>
        </div>
    );
};

export default Product;