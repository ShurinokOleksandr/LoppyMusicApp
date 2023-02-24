import React from 'react';
import {HeadingLevel, NavigationButton} from "@lp/shared/ui";
import {SongList} from "@lp/features/song-list";
import {Flex} from "@lp/shared/lib";

export const RecentlyPlayed = ({className}) => {
    return (
        <div className={className}>
            <Flex className={'justify-between mb-2'}>
                <HeadingLevel level={'h6'} className={'text-xs'}>Недавно прослушано</HeadingLevel>
                <NavigationButton className={'text-xs'} link={'#'} name={'Посмотреть всё'}/>
            </Flex>
            <SongList search={true} time={1} className={' text-[#293046] text-sm'}/>
        </div>
    );
};

