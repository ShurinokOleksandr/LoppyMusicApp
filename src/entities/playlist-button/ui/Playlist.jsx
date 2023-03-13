import React from 'react';
import {NavigationButton} from "@lp/shared/ui/navigation-button";
import {useUserPlaylistsQuery, useUserProfileQuery} from "@lp/shared/api/rkt-queries";
import Link from "next/link";
import {Loading} from "@lp/shared/ui";

export const Playlist = ({className}) => {
    const userProfile = useUserProfileQuery()
    const playlistsQuery = useUserPlaylistsQuery(userProfile?.data?.id)
    if(playlistsQuery.isLoading){
        return <Loading className={'flex items-center h-[20rem] justify-center'}/>
    }
    return (
        <div className={`${className}`}>
                <>
                    {
                        playlistsQuery?.data?.items.map(({id,name}) =>
                          <Link
                              href={`/playlist/${id}`}
                              key={id}
                              className={' block w-[12.5rem] my-5 text-sm font-semibold truncate'}
                          >
                              {name}
                          </Link>
                        )
                    }
                </>
        </div>
    );
};

