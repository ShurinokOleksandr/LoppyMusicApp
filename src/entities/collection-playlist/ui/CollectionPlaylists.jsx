import React from 'react';
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {ItemPlaylist} from "@lp/shared/ui";

export const CollectionPlaylists = (
    {
        className,
        children,
        a,
    }) => {
    return (
        <ul className={className}>
            {children}
            {
                a.map(({name,tracks}) =>
                    <ItemPlaylist
                        key={name}
                        className={'bg-gradient-to-r from-blue-500 to-blue-300 text-[#293046] font-semibold  rounded-2xl p-5'}
                        link={'/home'}
                        img={lol}
                        name={name}
                        tracks={tracks}
                    />
                )
            }
        </ul>
    );
};

