import React from 'react';
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import MusicTime from "src/shared/ui/music-time";

const MusicItem = () => {
    return (
        <>
            <li className={'flex items-center h-10 font-5 text-sm my-4 p-3'}>
                <div className={'mr-3 w-[5%]'}>1</div>
                <div className={' w-3/6 flex items-center '}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <div><Image src={lol} height={0} className={'w-10 h-10 mr-5 rounded object-cover'} alt={'avatar'}/></div>
                    <div>
                        <div className={'font-bold hover:underline'}>Name</div>
                        <div className={'hover:underline'}>author</div>
                    </div>
                </div>
                <div className={'w-2/6 '}>323  32 3 32</div>
                <div className={'w-2/6 '}>22 сентября</div>
                {/*поменять если что популярность с альбом песни */}
                <MusicTime className={'w-[5%] flex justify-end ml-3'}>4:43</MusicTime>
            </li>
        </>
    );
};

export default MusicItem;