import React from 'react';
import Sidebar from "src/widgets/sidebar/ui";
import Player from "src/widgets/player/ui";
import MainContent from "src/widgets/main/ui";
import SidebarContent from "src/widgets/right-sidebar-content/ui";


const Layout = ({children}) => {
    return (
        <main className={''}>
            <div className='flex h-screen font-mono '>
                <Sidebar/>
                <div className='flex flex-col min-h-full bg-[#f1f2fb] flex-1'>
                    <MainContent>{children}</MainContent>
                    <Player/>
                </div>
                <SidebarContent/>
            </div>
        </main>
    );
};

export default Layout;