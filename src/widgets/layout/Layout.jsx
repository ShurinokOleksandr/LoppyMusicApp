import React from 'react';
import {LeftSidebar, Main, Player, RightSidebar,} from "@lp/widgets/layout/ui";
import 'typeface-roboto-mono'


export const Layout = ({children}) => {
    return (
        <main className={'flex h-screen font-mono '}>
                <LeftSidebar className={''}/>
                <div className='flex flex-col min-h-full bg-[#f1f2fb] flex-1'>
                    <Main className={'h-[85%] overflow-auto'}>{children}</Main>
                    <Player/>
                </div>
                <RightSidebar className={'w-1/6 text-stone-400 w-[18%] overflow-hidden  px-4 h-full sticky border-l-2'}/>
        </main>
    );
};