import React from 'react';

const Footer = () => {
    return (
        <div className='p-20 '>
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
    );
};

export default Footer;