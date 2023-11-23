import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

import category1 from '../../../assets/category/1.jpg'
import category2 from '../../../assets/category/2.jpg'
import category3 from '../../../assets/category/3.jpg'
import category4 from '../../../assets/category/4.jpg'
import category5 from '../../../assets/category/5.jpg'
import category6 from '../../../assets/category/6.jpg'
import category7 from '../../../assets/category/7.jpg'
import category8 from '../../../assets/category/8.jpg'

const Category = () => {
    return (
        <div className='mt-50'>
            <h1 className='text-4xl font-bold mb-10 text-center'>Category</h1>
            <Swiper
             slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={category1} alt="" />
                    <p className='-mt-16'>EyeBlue</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category5} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category6} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category7} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={category8} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;