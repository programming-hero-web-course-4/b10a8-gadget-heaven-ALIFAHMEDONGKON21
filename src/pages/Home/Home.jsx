import React from 'react';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomeBanner from '../HomePageBanner/HomeBanner';
import Footer from '../../components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../../components/Category';
import Allproduct from '../../components/Allproduct';

const Home = () => {
    const data =useLoaderData();
    console.log(data)
    
    return (
        <div>
           
            <HomePageBanner></HomePageBanner>
            <HomeBanner></HomeBanner>
            <div className=' min-h-[calc(100vh-900px)]  container mx-auto py-12 px-12'>
            
           

            <div className='flex w-11/12 mx-auto mt-80'>
            <Category ></Category>
            <Allproduct></Allproduct>
            
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;