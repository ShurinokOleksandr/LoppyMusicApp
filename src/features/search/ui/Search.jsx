import React from 'react';
import {InputSearch} from "@lp/shared/ui/input-search";
import {SongList} from "@lp/features/song-list";

export const Search = ({className}) => {
    return (
        <div className={className}>
            <InputSearch className={'w-[70%] rounded p-2 text-sm '}/>
            <SongList className={'w-[70%] h-[210px] overflow-auto px-3'} isBtn={true}/>
        </div>
    );
};

