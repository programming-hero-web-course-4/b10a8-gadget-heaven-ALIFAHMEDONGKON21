import React from 'react';
import HomePageBanner from '../HomePageBanner/HomePageBanner';
import HomeBanner from '../HomePageBanner/HomeBanner';
import Footer from '../../components/Footer';
import { Outlet, useLoaderData } from 'react-router-dom';
import Category from '../../components/Category';
import Allproduct from '../../components/Allproduct';

const Home = () => {
    const categores=useLoaderData();
    console.log(categores)
    return (
        <div>
           
            <HomePageBanner></HomePageBanner>
            <HomeBanner></HomeBanner>
            <div className=' min-h-[calc(100vh-242px)]  container mx-auto py-12 px-12'>
            <Outlet></Outlet>
            </div>

            <div className='flex w-11/12 mx-auto'>
            <Category categores={categores} ></Category>
            <Allproduct></Allproduct>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;