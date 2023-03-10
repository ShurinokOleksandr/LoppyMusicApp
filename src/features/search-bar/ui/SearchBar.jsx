import React from 'react';
import {InputSearch} from "@lp/shared/ui/input-search";
import {SongList} from "@lp/features/song-list";
import {useRecentlyPlayedQuery} from "@lp/shared/api/rkt-queries";

export const SearchBar = ({className}) => {
    return (
        <div className={className}>
            <InputSearch className={'w-[70%] rounded p-2 text-sm '}/>
            <SongList className={'w-[70%] h-[210px] overflow-auto'}  search={true}/>
        </div>
    );
};

