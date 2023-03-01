import React, {useState} from 'react';
import {HeaderMainLayout, PanelSongList} from "@lp/shared/ui";
import {ActionButtons} from "@lp/features/action-buttons";
import {SongList} from "@lp/features/song-list";




const Home = () => {
    const [save,setSave] = useState('')
    // запросить и отдать сохраннёные треки
    return (
        <>
            <HeaderMainLayout className={'my-10 mx-16  bg-[#f1f2fb] border-b-3'}>
                <span className={'text-[#e60000] '}>Мои</span> сохранённые треки
            </HeaderMainLayout>
            <ActionButtons className={'items-center  m-5'}/>
            <PanelSongList/>
            <SongList className={'text-[#293046] text-sm mx-5'} popular={'f'} time={1}/>
        </>
    );
};

export default Home;