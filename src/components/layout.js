import React from 'react';
import Sidebar from "src/widgets/sidebar/ui";
import Player from "src/widgets/player/ui";
import MainContent from "src/widgets/main/ui";
import SidebarContent from "src/widgets/right-sidebar-content/ui";


const Layout = ({children}) => {
    return (
        <main>
            <div className='flex h-screen'>
                <Sidebar/>
                <div className='flex-1 w-4/6  bg-blue-100'>
                    <MainContent>{children}</MainContent>
                    <Player/>
                </div>
                <SidebarContent/>
            </div>
        </main>
    );
};

export default Layout;