import React from 'react';
import {SpeakerWaveIcon, SpeakerXMarkIcon} from "@heroicons/react/24/outline";

export const Volume = ({className}) => {
    return (
        <div className={className}>
            {/*every button will be need  features*/}
            <SpeakerXMarkIcon className="h-5 h-5 text-gray-500"/>
            <input type={'range'} className='h-2 w-[100px] mx-4'/>
            <SpeakerWaveIcon className="h-5 h-5 text-gray-500"/>
        </div>
    );
};

