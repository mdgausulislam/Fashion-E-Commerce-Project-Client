import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import banner1 from '../../../assets/Banner/1.jpg'
import banner2 from '../../../assets/Banner/2.jpg'
import banner3 from '../../../assets/Banner/3.jpg'
import banner4 from '../../../assets/Banner/4.jpg'
import banner5 from '../../../assets/Banner/5.jpg'
import banner6 from '../../../assets/Banner/6.jpg'
import banner7 from '../../../assets/Banner/7.jpg'
import banner8 from '../../../assets/Banner/8.jpg'

const Banner = () => {
    return (
            <Carousel>
                <div>
                    <img src={banner1} />
        
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner4} />
                </div>
                <div>
                    <img src={banner5} />
                </div>
                <div>
                    <img src={banner6} />
                </div>
                <div>
                    <img src={banner7} />
                </div>
                <div>
                    <img src={banner8} />
                </div>
            
            </Carousel>
      
    );
};

export default Banner;