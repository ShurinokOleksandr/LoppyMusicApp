import React, {useState} from 'react';
import {HeaderMainLayout, PanelSongList} from "@lp/shared/ui";
import {ActionButtons} from "@lp/features/action-buttons";
import {SongList} from "@lp/features/song-list";

const Playlist = () => {
    const [save,setSave] = useState('')

    return (
        <>
            <HeaderMainLayout className={'my-10 mx-16  bg-[#f1f2fb] border-b-3'} isInput={true}>
                <span className={'text-[#e60000] '}>Мой</span> плейлист
            </HeaderMainLayout>
            <ActionButtons className={'flex w-[25%] items-center justify-between m-5'}/>
            <PanelSongList/>
            <SongList className={'text-[#293046] text-sm mx-5'} popular={'f'} data={[]} time={1}/>
        </>
    );
};

export default Playlist;