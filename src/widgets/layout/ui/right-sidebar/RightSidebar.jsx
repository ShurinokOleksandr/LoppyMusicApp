import React from 'react';
import {BookOpenIcon, ComputerDesktopIcon, HeartIcon, MagnifyingGlassIcon, SquaresPlusIcon} from "@heroicons/react/24/outline";
import {Navigation} from "@eh/entities/navigation/ui";
import {isActiveLink} from "@eh/shared/lib/is-active-link";
import {useRouter} from "next/router";
import {Logo} from "@eh/shared/ui/logo";
import {Playlist} from "@eh/entities/playlist/ui";


export const RightSidebar = () => {

    const {pathname} = useRouter()


    const navLinks = [
        { link: '', name: 'Главная', icon: <ComputerDesktopIcon width={'25'}  stroke={'#293046'} fill={isActiveLink(pathname,'')}/> },
        { link: 'search', name: 'Поиск', icon: <MagnifyingGlassIcon width={'25'} stroke={'#293046'} fill={isActiveLink(pathname,'search')}/> },
        { link: 'collection', name: 'Моя медиатека', icon: <BookOpenIcon width={'25'} stroke={'#293046'} fill={isActiveLink(pathname,'collection')}/> },
        { link: 'home', name: 'Домашняя', icon: <HeartIcon width={'25'}  stroke={'#293046'} fill={isActiveLink(pathname,'home')}/> },
        { link: null, name: 'Создать плейлист', icon: <SquaresPlusIcon width={'25'} stroke={'#293046'} /> },
    ];

    return (
        <>
            <div className='bg-white text-stone-400 border-r-2 w-[15%] overflow-hidden sticky flex flex-col ml-4 pr-5'>
                <Logo/>
                <Navigation navLinks={navLinks}/>
                <Playlist className={'h-80 overflow-auto border-t-2 border-gray-400'}/>
            </div>
        </>
    )
};
