import React from 'react';
import Logo from "src/shared/ui/Logo";
import NavigationButtons from "src/shared/ui/Navbar-Buttons/navigation-buttons";
import PlayLists from "src/entities/left-sidebar/playlists/ui";

const Sidebar = () => {
    return (
        <div className='bg-white text-stone-400 border-r-2 w-[15%] overflow-hidden sticky flex flex-col ml-4 pr-5'>
            <Logo/>
            <NavigationButtons/>
            <PlayLists/>
        </div>
    );
};

export default Sidebar;