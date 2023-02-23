import React from 'react';
import {Timestamp} from "@lp/shared/ui/timestamp";
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {SongCard} from "@lp/entities/song-card/ui";
import {MusicControlButton} from "@lp/shared/ui";

export const SongList = ({className,isBtn,}) => {
    return (
        <ul className={className}>
            <li className={'flex items-center justify-between  my-4'}>
                <div className={'flex'}>
                    <Image src={lol} alt="avatar" className={'w-10 h-10 rounded object-cover mr-2'}/>
                    <SongCard className={'text-[#5b647d]'} name={'name'} author={'author'}/>
                </div>
                { isBtn ?
                    <MusicControlButton className={'border-2 border-gray-500 rounded-2xl px-3 py-1 hover:bg-[#cc040b] hover:border-[#cc040b] hover:text-white'}>Добавить</MusicControlButton>
                    :
                    <Timestamp className={'text-xs text-[#5b647d]'} time={2}/>
                }
            </li>
        </ul>
    );
};

