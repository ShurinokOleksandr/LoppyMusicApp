import React from 'react';
import BasicButton from "src/shared/ui/navbar-buttons/basic-button";
import { HeartIcon,  SquaresPlusIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/router";


const SecondBlock = () => {
    const {pathname} = useRouter()
    const handleClick = () => console.log(1)
    return (
        <div className={'border-b-2 border-gray-400'}>
            <BasicButton link={'home'} name={'Домашняя '} className={'flex items-center my-5'}>
                <HeartIcon width={'25'}  stroke={'#293046'} fill={`${pathname.slice(1) === 'home' ? `#e60000` : "none"}`}/>
            </BasicButton>
            <BasicButton onClick={handleClick} name={'Создать плейлист'} className={'flex items-center my-5'}>
                <SquaresPlusIcon width={'25'} stroke={'#293046'}/>
            </BasicButton>
        </div>
    );
};

export default SecondBlock;