import React, { useState, useEffect } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import Product from './Product';
import { SiSinglestore } from 'react-icons/si';

const Allproduct = () => {
    const { slug } = useParams(); 
    console.log(slug)
    const [allpro, setallpro] = useState([]);
    
    
    useEffect(() => {
        fetch('/product.json') // Ensure this path is correct
            .then((res) => {
                // Check if response is JSON before parsing
                if (res.headers.get('content-type')?.includes('application/json')) {
                    return res.json();
                } else {
                    throw new Error('Invalid JSON response');
                }
            })
            .then((data) => setallpro(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []); 

    
    
    const filteredProducts = slug
        ? allpro.filter((product) => product.category.toLowerCase() === slug.toLowerCase())
        : allpro;

    return (
        <div className='w-3/4 mx-auto'>
           
            <div className='grid grid-cols-3 gap-5'>
                {filteredProducts.map((product) => (
                    <Product key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Allproduct;


