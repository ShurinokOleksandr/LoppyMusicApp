import React, {useState} from 'react';
import {
    ArrowPathRoundedSquareIcon,
    BarsArrowDownIcon,
    PauseCircleIcon,
    SpeakerWaveIcon,
    SpeakerXMarkIcon
} from "@heroicons/react/24/outline";
import Next from '/public/navigation-icons/nextPrev.svg'
import Mix from '/public/navigation-icons/mix.svg'
import PlayerRange from "src/shared/ui/player-range";
import MusicTime from "src/shared/ui/music-time";
const Player = () => {
    const [state,setState]= useState()
    return (
        <div className='h-[15%] w-full border-t bg-white border-t overflow-hidden'>
            <div>
                <div className='flex w-full justify-between items-center p-3'>
                    <div className={'flex w-2/6 items-center'}>
                        {/*every button will be need  features*/}
                        <SpeakerXMarkIcon class="h-5 h-5 text-gray-500"/>
                        <PlayerRange className='h-2 w-[150px] mx-4'/>
                        <SpeakerWaveIcon class="h-5 h-5 text-gray-500"/>
                    </div>
                    <div className={'flex w-4/6 justify-center items-center'}>
                        <ArrowPathRoundedSquareIcon className={' h-5 text-gray-500 mx-4'}/>
                        <Next className={'w-6 [transform:scaleX(-1)] h-6 mx-1'}/>
                        <PauseCircleIcon  className={'w-9 h-9 text-gray-500 mx-1'}/>
                        <Next className={'w-6 h-6 mx-1'}/>
                        <Mix  className={'w-5 h-5 mx-4'}/>
                    </div>
                    <div className="flex w-2/6 justify-end ">
                        <BarsArrowDownIcon className={'w-6 h-6 text-gray-500'}/>
                    </div>
                </div>
                <div className={'flex items-center justify-center'}>
                    <MusicTime className={'text-[#848a96]'}>
                        1:22
                    </MusicTime>
                    <PlayerRange className='h-2 w-[500px] mx-2'/>
                    <MusicTime className={'text-[#848a96]'}>
                        3:09
                    </MusicTime>
                </div>
            </div>
        </div>
    );
};

export default Player;