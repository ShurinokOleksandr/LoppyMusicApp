import React from 'react';
import {UserPanel} from "@lp/entities/user-panel/ui";
import {RecentlyPlayed} from "@lp/features/recenty-played/ui";
import {NowPlaying} from "@lp/features/now-playing/ui";
import {Flex} from "@lp/shared/lib";

export  const RightSidebar = ({className}) => {

    return (
        <div className={className}>
            <Flex className={'flex-col justify-between min-h-full'}>
                <UserPanel className={'justify-between py-2 border-b-2 items-center'}/>
                <RecentlyPlayed className={'mt-3 flex-auto'}/>
                <NowPlaying className={'mb-6'}/>
            </Flex>
        </div>
    );
};
