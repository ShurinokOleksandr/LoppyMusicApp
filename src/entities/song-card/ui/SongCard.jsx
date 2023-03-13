import React from 'react';
import {Paragraph, TitleLink} from "@lp/shared/ui";

export const SongCard = (
    {
        className,
        name,
        author,
        artist_id
    }) => {
    return (
        <div className={className}>
            <Paragraph link={`tr`} className={'block truncate w-[8rem] text-sm font-bold'}>
                {name}
            </Paragraph>
            <TitleLink link={`/artist/${artist_id}`} className={'block truncate w-[8rem] text-xs'}>
                {author}
            </TitleLink>
        </div>
    );
};
