import React from 'react';
import BasicButton from "src/shared/ui/Navbar-Buttons/basic-button";

const PlayLists = () => {
    return (
        <div className=' h-80 overflow-auto'>
            {/*потом как буду получать данные с сервера переделать */}
            <BasicButton  className={'flex items-center text-stone-700 font-bold my-4'}>
                playlist 1
            </BasicButton>
        </div>
    );
};

export default PlayLists;