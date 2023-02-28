import React from 'react';
import {InputSearch, SwiperContent} from "@lp/shared/ui";


const a = [
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssssssssssssssssssdfsdf'},
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssdfsdf'},
]

const Search = () => {

    return (
        <div className={'m-5'}>
            <InputSearch className={'my-5 w-[50%] rounded p-2 text-sm font-semibold text-[#2b3247]'}/>
            <SwiperContent className={'relative p-5'} a={a}>
                История поиска
            </SwiperContent>
            <SwiperContent className={'relative p-5'} a={a}>
                Жанры
            </SwiperContent>
        </div>
    );
};

export default Search;