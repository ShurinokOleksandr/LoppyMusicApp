import React from 'react';
import {Timestamp} from "@lp/shared/ui/song-list/song-card/timestamp";
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {SongCard} from "@lp/shared/ui/song-list/song-card";

export const SongList = ({className}) => {
    return (
        <ul className={className}>
            <li className={'flex items-center justify-between  my-4'}>
                <div className={'flex'}>
                    <Image src={lol} alt="avatar" className={'w-10 h-10 rounded object-cover mr-2'}/>
                    <SongCard className={'text-[#5b647d]'} name={'name'} author={'author'}/>
                </div>
                <Timestamp className={'text-xs text-[#5b647d]'} time={2}/>
            </li>
        </ul>
    );
};

