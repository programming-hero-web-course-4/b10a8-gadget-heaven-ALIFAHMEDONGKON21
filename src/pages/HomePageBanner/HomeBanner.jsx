import React from 'react';
import bannerphoto from '../../assets/banner.jpg';

const HomeBanner = () => {
    return (
        <div className="relative ">
            <div className="absolute -bottom-64 left-1/2 transform -translate-x-1/2 ">
                <img 
                    src={bannerphoto} 
                    alt="VR Headset" 
                    className="max-w-[500px] w-full border-4 border-white rounded-lg shadow-lg" 
                />
            </div>
        </div>
    );
};

export default HomeBanner;
