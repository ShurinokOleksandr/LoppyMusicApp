import React from 'react';
import HeaderPlaylist from "src/widgets/header-playlist/ui";



const text = 'Здесь ты можешь создать свой плейлист. Имена могут быть не уникальные,создавай хоть 5 плейлистов с одинаковым именем.Так не забывай им делитсья с друзьями.'
const Playlist = () => {
    return (
        <div>
            <HeaderPlaylist text={text}><span className={'text-[#e60000]'}>Твой</span> свой плейлист</HeaderPlaylist>

        </div>
    );
};

export default Playlist;