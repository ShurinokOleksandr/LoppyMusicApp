import React from 'react';
import {UserPanel} from "@lp/entities/user-panel/ui";
import {RecentlyPlayed} from "@lp/features/recenty-played/ui";
import {NowPlaying} from "@lp/features/now-playing/ui";

export  const RightSidebar = ({className}) => {
    return (
        <div className={className}>
            <div className={'flex flex-col min-h-full'}>
                <UserPanel className={'flex justify-between py-2 border-b-2 items-center'}/>
                <RecentlyPlayed className={'mt-3 flex-auto'}/>
                <NowPlaying className={'mb-5'}/>
            </div>
        </div>
    );
};
