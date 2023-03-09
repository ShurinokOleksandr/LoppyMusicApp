import React, {useEffect, useState} from 'react';
import {HeadingLevel, SwiperContent} from "@lp/shared/ui";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";


const a = [
    {name:'aqsds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssssssssssssssssssdfsdf'},
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewse',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqasds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffdhhh',tracks:'dfsssssssssssdfssdfsdf'},
]
const Index = () => {
    const dispatch = useDispatch()
    const router = useRouter();

    // const handleClick =  () =>{
    //     console.log(access_token)
    //      fetch(`https://api.spotify.com/v1/me/tracks`,{
    //         headers: {
    //             Authorization: `Bearer ${access_token}`,
    //             'Content-Type': 'application/json'
    //         }
    //
    //     }).then(res => res.json()).then(data => console.log(data)).catch(error => {console.error('Error:', error);});
    // }
    return (
        <div className=''>
            <HeadingLevel className={'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 italic shadow-2xl shadow-blue-800/80 font-bold text-center text-4xl py-20 mb-20'}>
                🔥Приветствую тебя в своём приложении✌️
            </HeadingLevel>
            {/*<button onClick={handleClick}>*/}
            {/*    загрузить*/}
            {/*</button>*/}
            <SwiperContent a={a}>
                    контент
            </SwiperContent>
        </div>
    );
};

export default Index;