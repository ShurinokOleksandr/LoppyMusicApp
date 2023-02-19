import React from 'react';
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import MusicTime from "src/shared/ui/music-time";
import ButtonAddMusic from "src/shared/ui/button-add-music";

const MusicItem = ({
        number = '',
        name = '',
        author = '',
        popularity = '',
        date = '',
        time = '',
        btnAdd
    }) => {
    return (
        <>
            <li className={'flex items-center h-10 font-5 text-sm my-4 p-3'}>
                <p className={'mr-3 w-[5%]'}>{number}</p>
                <div className={' w-3/6 flex items-center '}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <div><Image src={lol} height={0} className={'w-10 h-10 mr-5 rounded object-cover'} alt={'avatar'}/></div>
                    <div>
                        <div className={'font-bold hover:underline'}>{name}</div>
                        <div className={'hover:underline'}>{author}</div>
                    </div>
                </div>
                <p className={'w-2/6 '}>{popularity}</p>
                <p className={'w-2/6 '}>{date}</p>
                {/*поменять если что популярность с альбом песни */}
                <MusicTime className={'w-[5%] flex justify-end ml-3'}>{time}</MusicTime>
                {
                    btnAdd ?
                        <ButtonAddMusic className={'border-4 rounded-2xl px-4 py-2 '}/>
                        : null
                }
            </li>
        </>
    );
};

export default MusicItem;