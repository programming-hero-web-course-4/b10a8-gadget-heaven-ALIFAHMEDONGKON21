// import React from 'react';
// import { Link } from 'react-router-dom';

// const Product = ({product}) => {
//     const{product_title,price,product_image,product_id}=product
//     return (
//        <Link to={`/product/${product_id}`}>
//            <div className="card bg-base-100  shadow-xl">
//     <figure className='h-40 object-containover '>
//       <img className='w-full'
//         src={product_image}
//         alt="products" />
//     </figure>
//     <div className="card-body">
//     <div className='py-2'>
//           <h1 className='text-xl'>Name: {product_title}</h1>
//           <p>price: {price}</p>
//           <button className=' text-purple-700  border-purple-700-2 btn border-2'>Veiw </button>
//         </div>
//     </div>
//   </div>
//   </Link>
//     );
// };

// export default Product;


import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { product_title, price, product_image, product_id } = product;
    return (
        <Link to={`/product/${product_id}`}>
            <div className="card bg-base-100 shadow-xl w-60 h-80">
                {/* Fixed height for image container */}
                <figure className="h-40 overflow-hidden">
                    <img
                        className="w-full h-full object-cover"
                        src={product_image}
                        alt="products"
                    />
                </figure>
                <div className="card-body">
                    <div className="py-2">
                        <h1 className="text-xl">Name: {product_title}</h1>
                        <p>Price: {price}</p>
                        <button className="text-purple-700 border-purple-700 btn border-2">
                            View
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Product;
