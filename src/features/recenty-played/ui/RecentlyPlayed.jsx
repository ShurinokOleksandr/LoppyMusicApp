import React from 'react';
import {HeadingLevel} from "@lp/shared/ui/heading-level";
import {NavigationButton} from "@lp/shared/ui/navigation-button";
import {SongList} from "@lp/features/song-list/ui";

export const RecentlyPlayed = ({className}) => {
    return (
        <div className={className}>
            <div className={'flex justify-between mb-2'}>
                <HeadingLevel level={'h6'} className={'text-xs'}>Недавно прослушано</HeadingLevel>
                <NavigationButton className={'text-xs'} link={'#'} name={'Посмотреть всё'}/>
            </div>
            <SongList/>
        </div>
    );
};

