import React from 'react';
import ResentPlayed from "src/entities/right-sidebar/recent-played/ui";
import Header from "src/entities/right-sidebar/header/ui";
import NowPlay from "src/entities/right-sidebar/now-playing/ui";
const SidebarContent = () => {
    return (
        <div className='w-1/6 text-stone-400 w-[18%] overflow-hidden px-4 h-full sticky border-l-2'>
            <div className={'flex flex-col min-h-full'}>
                <Header className={''} />
                <ResentPlayed className={'mt-3 flex-auto'}/>
                <NowPlay className={'mb-5'}/>
            </div>
        </div>
    );
};

export default SidebarContent;