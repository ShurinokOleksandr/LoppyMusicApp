import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {HeadingLevel} from "@lp/shared/ui/heading-level";
import {BellIcon} from "@heroicons/react/24/outline";

export const UserPanel = ({className}) => {
    return (
        <div className={className}>
            <div className={'flex'}>
                <Image src={lol} width={0} height={0} className={'w-11 h-11 mr-4 rounded-full object-cover'} alt="avatar"/>
                <HeadingLevel className={'font-semibold'}>name</HeadingLevel>
            </div>
            <button className='w-6 h-6 hover:w-[1.7rem]'>
                <BellIcon />
            </button>
        </div>
    );
};

