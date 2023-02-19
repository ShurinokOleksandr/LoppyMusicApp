import React from 'react';
import Musics from "src/widgets/musics/ui";
import HeaderPlaylist from "src/widgets/header-playlist/ui";


const arar = [
    {number:221,name:'asda',},
    {number:21,name:'asda',},
    {number:221,name:'asda',},
    {number:12,name:'asda',},
]

const text = 'Здесь лежат все ваши сохранённые треки. Также не забывайте что есть возможность создавать и сохранять различные плейлисты. Так же вы можете делиться плейлистами с вашими друзьями.'
const Home = () => {
    return (
        <div className={'bg-[#f1f2fb]'}>
            <HeaderPlaylist text={text}><span className={'text-[#e60000]'}>Твои</span> сохранённые треки</HeaderPlaylist>
            <Musics arar={arar}/>
        </div>
    );
};

export default Home;