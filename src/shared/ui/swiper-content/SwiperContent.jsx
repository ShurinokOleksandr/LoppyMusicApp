import React from 'react';
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import {HeadingLevel, ItemPlaylist} from "@lp/shared/ui";
import {Navigation} from "swiper";
import 'swiper/css';
import "swiper/css/navigation";
import {SwiperButtonNext} from "@lp/shared/ui/swiper-content/ui/SwiperButtonNext";
import {SwiperButtonPrev} from "@lp/shared/ui/swiper-content/ui/SwiperButtonPrev";


export const SwiperContent = (
    {
        className,
        a= [],
        children
    }) => {

    return (
        <>
            <HeadingLevel className={'my-5 text-3xl text-[#e60000] font-bold'}>{children}</HeadingLevel>
            <Swiper
                className={className}
                spaceBetween={20}
                slidesPerView={4.5}
            >
                {
                    a.map(({name,tracks}) =>
                        <SwiperSlide key={name} className={''}>
                        <ItemPlaylist className={'bg-gradient-to-r from-blue-500 to-blue-300 text-[#293046] font-semibold  rounded-2xl  p-5'} name={name} tracks={tracks} link={'/'} />
                    </SwiperSlide> )
                }

            </Swiper>
        </>

    );
};


