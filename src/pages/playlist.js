import React from 'react';
import HeaderPlaylist from "src/widgets/header-playlist/ui";
import Musics from "src/widgets/musics/ui";
import {Bars4Icon, EllipsisHorizontalIcon, HeartIcon, PlayIcon} from "@heroicons/react/24/outline";


const arar = [
    {number:1,name:'asda',},
    {number:1,name:'asda',},
    {number:1,name:'asda',},
    {number:1,name:'asda',},
]
const Playlist = () => {
    return (
        <div>
            <HeaderPlaylist className={'border-b-3'} showList={true}><span className={'text-[#e60000] '}>Мой</span> плейлист</HeaderPlaylist>
            <ul className={'flex w-[25%] items-center justify-between m-5'}>
                <li>
                    <button>
                        <PlayIcon fill={'red'} className={'w-12 font-bold bg-white border-2 border-red-500 rounded-2xl p-3 text-[red] hover:scale-110 hover:duration-500'}/>
                    </button>
                </li>
                <li>
                    <button>
                        <HeartIcon className={'w-8 hover:scale-110 hover:duration-500'}/>
                    </button>
                </li>
                <li>
                    <button>
                        <EllipsisHorizontalIcon className={'w-8 hover:scale-110 hover:duration-500'}/>
                    </button>
                </li>
                <li>
                    190 треков
                </li>
            </ul>
            <Musics arar={arar}/>
        </div>
    );
};

export default Playlist;