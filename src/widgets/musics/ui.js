import React from 'react';
import HomePageTitle from "src/shared/ui/home-page-title";
import MusicItem from "src/shared/ui/music-item";

const Musics = () => {
    return (
        <>
            <ul className={'p-2 text-[#293046] px-5 relative  '}>
                <HomePageTitle/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/><MusicItem/><MusicItem/><MusicItem/><MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
                <MusicItem/>
            </ul>
        </>
    );
};

export default Musics;