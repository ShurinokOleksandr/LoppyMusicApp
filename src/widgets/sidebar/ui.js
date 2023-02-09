import React from 'react';
import Logo from "src/shared/ui/Logo";
import NavigationButtons from "src/shared/ui/Navbar-Buttons/navigation-buttons";
import PlayLists from "src/entities/playlists/ui";

const Sidebar = () => {
    return (
        <div className='bg-white text-stone-400 w-1/6 overflow-hidden sticky flex flex-col ml-5 pr-5'>
            <Logo/>
            <NavigationButtons/>
            <PlayLists/>
        </div>
    );
};

export default Sidebar;