import React from 'react';
import BasicButton from "src/shared/ui/navbar-buttons/basic-button";
import {useRouter} from "next/router";
import {ComputerDesktopIcon} from "@heroicons/react/24/outline";
import {BookOpenIcon, MagnifyingGlassIcon} from "@heroicons/react/24/solid";

const FirstBlock = () => {
    const {pathname} = useRouter()
    return (
        <div>
            <BasicButton link={''} name={'Главная'} className={'flex items-center my-5'}>
                <ComputerDesktopIcon width={'25'}  stroke={'#293046'} fill={`${pathname.slice(1) === '' ? `#e60000` : "none"}`}/>
            </BasicButton>
            <BasicButton link={'search'} name={'Поиск'} className={'flex items-center my-5'}>
                <MagnifyingGlassIcon width={'25'} stroke={'#293046'} fill={`${pathname.slice(1) === 'search' ? `#e60000` : "none"}`}/>
            </BasicButton>
            <BasicButton link={'collection'} name={'Моя медиатека'} className={'flex items-center my-5'}>
                <BookOpenIcon width={'25'} stroke={'#293046'} fill={`${pathname.slice(1) === 'collection' ? `#e60000` : "none"}`}/>
            </BasicButton>
        </div>
    );
};

export default FirstBlock;