import React from 'react';
import {MusicControlButton} from "@lp/shared/ui";
import {EllipsisHorizontalIcon, HeartIcon, PlayIcon} from "@heroicons/react/24/outline";
import {Paragraph} from "@lp/shared/ui/paragraph";

export const ActionButtons = ({className}) => {
    return (
        <div className={className}>
            <MusicControlButton className={'w-12 font-bold bg-white border-2 border-red-500 rounded-2xl p-3 text-[red] hover:scale-110 hover:duration-500'}>
                <PlayIcon fill={'red'} />
            </MusicControlButton>
            <MusicControlButton className={'w-8 hover:scale-110 hover:duration-500'}>
                <HeartIcon />
            </MusicControlButton>
            <MusicControlButton className={'w-8 hover:scale-110 hover:duration-500'}>
                <EllipsisHorizontalIcon />
            </MusicControlButton>
            <Paragraph className={''}>
                190 треков
            </Paragraph>
        </div>
    );
};

