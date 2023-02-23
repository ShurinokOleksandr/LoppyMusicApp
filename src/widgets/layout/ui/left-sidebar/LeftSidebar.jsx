import React from 'react';
import {BookOpenIcon, ComputerDesktopIcon, HeartIcon, MagnifyingGlassIcon, SquaresPlusIcon} from "@heroicons/react/24/outline";
import {Logo} from "@lp/shared/ui/logo";
import {Navigation} from "@lp/entities/navigation/ui";
import {Playlist} from "@lp/entities/playlist/ui";
import {useRouter} from "next/router";
import {isActiveLink} from "@lp/shared/lib/is-active-link";



export const LeftSidebar = ({className}) => {

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
            <div className={className}>
                <Logo className={'my-10 text-2xl font-bold text-stone-700'}/>
                <Navigation navLinks={navLinks}/>
                <Playlist className={'h-80 overflow-auto border-t-2 border-gray-400'}/>
            </div>
        </>
    )
};
