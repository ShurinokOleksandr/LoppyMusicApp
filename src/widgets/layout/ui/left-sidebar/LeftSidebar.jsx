import React from 'react';
import {
    ArrowLeftOnRectangleIcon,
    BookOpenIcon,
    ComputerDesktopIcon,
    HeartIcon,
    MagnifyingGlassIcon,
    SquaresPlusIcon
} from "@heroicons/react/24/outline";
import {Logo} from "@lp/shared/ui/logo";
import {Navigation} from "@lp/entities/navigation/ui";
import {Playlist} from "@lp/entities/playlist-button/ui";
import {useRouter} from "next/router";
import {isActiveLink} from "@lp/shared/lib/is-active-link";
import {NavigationButton} from "@lp/shared/ui";
import {useDispatch} from "react-redux";
import {setToken} from "@lp/features/auth";
import {signOut, useSession} from "next-auth/react";



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
                <div>
                    <Logo className={'my-10 text-2xl font-bold text-stone-700'}/>
                    <Navigation navLinks={navLinks}/>
                    <Playlist className={'h-80 overflow-auto border-t-2 border-gray-400'}/>
                </div>
                <NavigationButton
                    className={isActiveLink(pathname,'auth','hidden','text-lg text-[#293046] font-bold my-5 hover:scale-110 hover:duration-500 flex')}
                    name={'Выйти'}
                    icon={<ArrowLeftOnRectangleIcon className={'w-6'}/>}
                    onClick={() => signOut()}
                />
            </div>
        </>
    )
};
