import React from 'react';
import Musics from "src/widgets/musics/ui";
import HeaderPlaylist from "src/widgets/header-playlist/ui";
const Home = () => {
    return (
        <div className={'bg-[#f1f2fb]'}>
            <HeaderPlaylist><span className={'text-[#e60000]'}>Твои</span> сохранённые треки</HeaderPlaylist>
            <Musics/>
        </div>
    );
};

export default Home;