import React from 'react';
import {HeadingLevel, InputSearch, ItemsSwiper} from "@lp/shared/ui";
import {Swiper, SwiperSlide} from "swiper/react";

const a = [
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssdfsdf'},
]

const Search = () => {
    return (
        <div className={'m-5'}>
            <InputSearch className={'my-5 w-[50%] rounded p-2 text-sm font-semibold text-[#2b3247]'}/>
            <div>
                <HeadingLevel className={'my-5 text-2xl font-bold'}>История поиска</HeadingLevel>

            </div>
        </div>
    );
};

export default Search;