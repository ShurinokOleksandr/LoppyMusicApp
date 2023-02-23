import React from 'react';
import {Timestamp} from "@lp/shared/ui/timestamp";

export const ProgressMusic = ({className}) => {
    return (
        <div className={className}>
            <Timestamp time={'1:22'} className={' text-sm text-[#848a96]'}/>
            <input type={'range'} className='h-2 w-[500px] mx-2'/>
            <Timestamp time={'3:09'} className={'text-sm  text-[#848a96]'}/>
        </div>
    );
};

