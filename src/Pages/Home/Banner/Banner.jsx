import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import banner1 from '../../../assets/Banner/1.jpg'
import banner2 from '../../../assets/Banner/2.jpg'

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
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner2} />
                </div>
            </Carousel>
      
    );
};

export default Banner;