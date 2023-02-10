import React from 'react';
import main from '/public/navigation-icons/main.svg'
import search from '/public/navigation-icons/search.svg'
import myMedia from '/public/navigation-icons/my-media.svg'
import createPlaylist from '/public/navigation-icons/create-playlist.svg'
import savedSongs from '/public/navigation-icons/saved-songs.svg'
import BasicButton from "./basic-button";

const FirstNavigation = [
    {id:0,name:"Главная",icon:main,link:''},
    {id:1,name:"Поиск",icon:search,link:'search'},
    {id:2,name:"Моя медиатека",icon:myMedia,link:'collection'},
]
const SecondNavigation = [
    {id:3,name:"Создать плейлист",icon:createPlaylist,link:'create-playlist'},
    {id:4,name:"Домашняя",icon:savedSongs,link:'home'},
]
const NavigationButtons = () => {
    return (
        <>
            <BasicButton btn={FirstNavigation} className={'flex items-center my-5'}/>
            <BasicButton classParent={'my-5 border-b'} btn={SecondNavigation} className={'flex items-center my-5'}/>
        </>
    );
}
export default NavigationButtons;