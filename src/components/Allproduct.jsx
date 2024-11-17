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
        <div className=' h-auto rounded-lg bg-gray-200 lg:col-span-2'>
           <h1 className=' text-3xl font-bold p-1 '>Explore Cutting-Edge Gadgets</h1>
            <div className='grid grid-cols-3 gap-5'>
                {filteredProducts.map((product) => (
                    <Product key={product.product_id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Allproduct;


