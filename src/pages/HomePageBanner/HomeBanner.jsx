import React from 'react';
import bannerphoto from '../../assets/banner.jpg'

const HomeBanner = () => {
    return (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-20 z-20">
            
            <img src={bannerphoto} alt="VR Headset" className="max-w-[500px] w-full border-4 border-white rounded-lg shadow-lg" />
            
       
    </div>
    );
};

export default HomeBanner;