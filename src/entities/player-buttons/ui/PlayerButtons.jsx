import React from 'react';
import {ArrowPathRoundedSquareIcon, ArrowsUpDownIcon, PauseCircleIcon, PlayIcon} from "@heroicons/react/24/outline";
import {Button} from "@lp/shared/ui/music-control-btn";

export const PlayerButtons = ({className}) => {
    const handleClick = (text) => {
        console.log(`takoe vot deystivie ${text}`)
    }
    return (
        <div className={className}>
            <Button handleClick={() => handleClick('повторить')} className={'w-6 mx-3'}>
                <ArrowPathRoundedSquareIcon/>
            </Button>
            <Button handleClick={() => handleClick('назад')} className={'w-7 [transform:scaleX(-1)] '}>
                <PlayIcon />
            </Button>
            <Button handleClick={() => handleClick('пауза-плей')} className={'w-10'}>
                <PauseCircleIcon  />
            </Button>
            <Button handleClick={() => handleClick('вперёд')} className={'w-7'}>
                <PlayIcon />
            </Button>
            <Button handleClick={() => handleClick('перемешать')} className={'w-6 mx-3'}>
                <ArrowsUpDownIcon/>
            </Button>
        </div>
    );
};

