import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {HeartIcon} from "@heroicons/react/24/outline";
import {Button} from "@lp/shared/ui/music-control-btn";
import {SongCard} from "@lp/entities/song-card/ui";

export const NowPlaying = ({className}) => {

    return (
        <div className={className}>
            <Image src={lol} alt={'avatar'} className={'h-[170px] rounded-2xl object-cover'}/>
            <div className={'flex justify-between items-center px-3'}>
                <SongCard name={'namee'} author={'afdsdfs'} className={'text-[#5b647d]'}/>
                <Button className={'w-6'}>
                    <HeartIcon/>
                </Button>
            </div>
        </div>
    );
};

