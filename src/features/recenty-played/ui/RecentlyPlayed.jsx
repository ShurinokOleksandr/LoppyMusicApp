import React from 'react';
import {HeadingLevel, NavigationButton} from "@lp/shared/ui";
import {SongList} from "@lp/features/song-list";
import {Flex} from "@lp/shared/lib";
import {useRecentlyPlayedQuery} from "@lp/shared/api/rkt-queries";
import {Loading} from "@lp/shared/ui/loading";

export const RecentlyPlayed = ({className}) => {
    const {data,isLoading} = useRecentlyPlayedQuery()
    if(isLoading){
        return <Loading className={'text-center'}/>
    }
    return (
        <div className={className}>
            <Flex className={'justify-between mb-2'}>
                <HeadingLevel level={'h6'} className={'text-xs'}>
                    Недавно прослушано
                </HeadingLevel>
                <NavigationButton
                    className={'text-xs'}
                    link={'#'}
                    name={'Посмотреть всё'}
                />
            </Flex>
            <SongList
                {...data}
                className={'text-[#293046] text-sm'}
            />
        </div>
    );
};
