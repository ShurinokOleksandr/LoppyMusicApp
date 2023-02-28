import React from 'react';
import {HeadingLevel, SwiperContent} from "@lp/shared/ui";
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
const Index = () => {

    return (
        <div className=''>
            <HeadingLevel className={'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 italic shadow-2xl shadow-blue-800/80 font-bold text-center text-4xl py-20 mb-20'}>
                🔥Приветствую тебя в своём приложении✌️
            </HeadingLevel>
            <div className={''}>
                <SwiperContent className={'pl-5'} a={a}>
                    Только для тебя
                </SwiperContent>
                <SwiperContent className={''} a={a}>
                    Только для тебя
                </SwiperContent>
                <SwiperContent className={''} a={a}>
                    Только для тебя
                </SwiperContent>
                <SwiperContent className={''} a={a}>
                    Только для тебя
                </SwiperContent>
            </div>
        </div>
    );
};

export default Index;