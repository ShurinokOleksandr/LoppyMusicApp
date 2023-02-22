import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {SongCard} from "@lp/shared/ui/song-list/song-card";
import {HeartButton} from "@lp/shared/ui/heart-button";

export const NowPlaying = ({className}) => {
    return (
        <div className={className}>
            <Image src={lol} className={'h-[170px] rounded-2xl object-cover'}/>
            <div className={'flex justify-between items-center px-3'}>
                <SongCard name={'namee'} author={'afdsdfs'} className={'text-[#5b647d]'}/>
                <HeartButton className={'w-6'} />
            </div>
        </div>
    );
};

