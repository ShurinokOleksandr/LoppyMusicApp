import React from 'react';
import {ArrowPathRoundedSquareIcon, BarsArrowDownIcon, PauseCircleIcon, SpeakerWaveIcon, SpeakerXMarkIcon} from "@heroicons/react/24/outline";
import Next from "/public/navigation-icons/nextPrev.svg";
import Mix from "/public/navigation-icons/mix.svg";
import {Timestamp} from "@lp/shared/ui/song-list/song-card/timestamp";

export const Player = () => {
    return (
        <div className='h-[15%] w-full border-t-2 bg-white border-t overflow-hidden'>
            <div>
                <div className='flex w-full justify-between items-center p-3'>
                    <div className={'flex w-2/6 items-center'}>
                        {/*every button will be need  features*/}
                        <SpeakerXMarkIcon class="h-5 h-5 text-gray-500"/>
                        <input type={'range'} className='h-2 w-[150px] mx-4'/>
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
                    <Timestamp time={'1:22'} className={' text-sm text-[#848a96]'}/>
                    <input type={'range'} className='h-2 w-[500px] mx-2'/>
                    <Timestamp time={'3:09'} className={'text-sm  text-[#848a96]'}/>
                </div>
            </div>
        </div>
    );
};