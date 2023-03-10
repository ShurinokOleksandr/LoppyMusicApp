import React, {useEffect} from 'react';
import {HeadingLevel, NavigationButton} from "@lp/shared/ui";
import {SongList} from "@lp/features/song-list";
import {Flex} from "@lp/shared/lib";
import {useSession} from "next-auth/react";

export const RecentlyPlayed = ({className}) => {
    const session = useSession()
    // console.log(session)
    useEffect(()=>{
        const response = fetch(`https://api.spotify.com/v1/me/player/recently-played`,{
                    headers: {
                        'Authorization': `Bearer ${session.data?.accessToken}`,
                        'Content-Type': 'application/json'
                    }
                }).then(data => data.json()).then(data => data)

        console.log(response)
    },[])
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

