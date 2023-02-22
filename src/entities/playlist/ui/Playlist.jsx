import React from 'react';
import {NavigationButton} from "@lp/shared/ui/navigation-button";

export const Playlist = ({className}) => {
    return (
        <div className={`${className}`} >
            {/*потом как буду получать данные с сервера переделать */}
            <NavigationButton link={'playlist'} name={'playist 1'} className={'flex items-center my-2 text-sm'}/>
        </div>
    );
};

