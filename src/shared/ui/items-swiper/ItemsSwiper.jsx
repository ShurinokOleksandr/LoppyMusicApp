import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";

export const ItemsSwiper = (
    {
        className,
        a,
    }) => {
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={2}
            className="mySwiper "
        >
            <SwiperSlide className={'bg-blue'}>Slide 1</SwiperSlide>
            <SwiperSlide className={'bg-yellow'}>Slide 1</SwiperSlide>
        </Swiper>
    );
};

