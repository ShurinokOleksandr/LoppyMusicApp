import React from 'react';
import {LeftSidebar, Main, Player, RightSidebar} from "@eh/widgets/layout/ui";
import 'typeface-roboto-mono'


export const Layout = ({children}) => {
    return (
        <main className={'flex h-screen font-mono '}>
                <RightSidebar/>
                <div className='flex flex-col min-h-full bg-[#f1f2fb] flex-1'>
                    <Main className={'h-[85%] overflow-auto'}>{children}</Main>
                    <Player/>
                </div>
                <LeftSidebar/>
        </main>
    );
};