import React from 'react';
import HomePageTitle from "src/shared/ui/home-page-title";
import MusicItem from "src/shared/ui/music-item";

const Musics = ({arar}) => {
    return (
        <>
            <ul className={'p-2 text-[#293046] px-5 relative  '}>
                <HomePageTitle/>
                {
                    arar.map(({number,name},i) =>  <MusicItem key={i} number={number} name={name}/>)
                }
            </ul>
        </>
    );
};

export default Musics;