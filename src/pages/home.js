import React, {useState} from 'react';
import Image from "next/image";
import lol from "../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {ClockIcon, HeartIcon} from "@heroicons/react/24/outline";
import {TitleLink} from "@lp/shared/ui/title";
import {HeaderMainLayout, HeadingLevel} from "@lp/shared/ui";
import {SongCard} from "@lp/entities/song-card/ui";
import {ActionButtons} from "@lp/features/action-buttons";




const Home = () => {
    const [save,setSave] = useState('')

    return (
        < >
            <HeaderMainLayout className={'my-10 mx-16  bg-[#f1f2fb] border-b-3'}>
                <span className={'text-[#e60000] '}>Мои</span> сохранённые треки
            </HeaderMainLayout>
            <ActionButtons className={'flex w-[25%] items-center justify-between m-5'}/>
            <ul className={'p-2 text-[#293046] px-5 relative  '}>
                <li className={'flex mb-3 items-center font-semibold  h-15 p-3 sticky top-0 bg-white border-b-2'}>
                    <div className={'mr-3 w-[5%] '}>#</div>
                    <p className={'w-3/6 '}>НАЗВАНИЕ</p>
                    {/*поменять если что популярность с альбом песни */}
                    <div className={'w-2/6 '}>ПОПУЛЯРНОСТЬ</div>
                    <div className={'w-2/6 '}>ДАТА ДОБАВЛЕНИЯ</div>
                    <div className={'w-[10%] flex justify-center ml-3 '}><ClockIcon className={'w-5'}/></div>
                </li>
                <li className={'flex items-center h-10  text-sm my-4  p-3'}>
                    <div className={'mr-3 w-[5%] mx-auto'}>1</div>
                    <div className={' w-3/6 flex items-center '}>
                        <Image src={lol} height={0} className={'w-10 h-10 mr-5 rounded object-cover'} alt={'avatar'}/>
                        <div>
                            <div className={'font-bold hover:underline'}>name</div>
                            <div className={'hover:underline'}>author </div>
                        </div>
                    </div>
                    <p className={'w-2/6 '}>популярность </p>
                    <p className={'w-2/6 '}> дата добавления </p>
                    {/*поменять если что популярность с альбом песни */}
                    <div className={'w-[10%] flex justify-between ml-3'}>
                        <HeartIcon onClick={() => setSave(!save)} fill={save ? 'red' : 'none'} className={'w-5'}/>
                        <div className={''}>2:33</div>
                    </div>
                    {
                        false ?
                            <button className={'border-4 rounded-2xl px-4 py-2 '}></button>
                            : <></>
                    }
                </li>
            </ul>
        </>
    );
};

export default Home;