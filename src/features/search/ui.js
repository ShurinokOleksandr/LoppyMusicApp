import React from 'react';
import FoundMusic from "src/shared/ui/found-music";

const SearchBar = ({className}) => {
    return (
        <div className={className}>
            <input type="text" placeholder={'Поиск треков и выпусков'} className={' rounded p-2 text-sm   w-full focus:outline-2 focus:bg-gray-50'}/>
            {/*<FoundMusic className={'w-[500px] h-[200px] my-2 overflow-auto'}/>*/}
        </div>
    );
};

export default SearchBar;