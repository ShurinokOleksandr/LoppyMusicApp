import React from 'react';
import {TitleLink} from "@lp/shared/ui/song-list/song-card/title";

export const SongCard = ({className,name,author}) => {
    return (
            <div className={className}>
                <TitleLink link={'#'} className={'block text-sm font-bold'}>
                    {name}
                </TitleLink>
                <TitleLink link={'#'} className={'block text-xs'}>
                    {author}
                </TitleLink>
            </div>
    );
};
