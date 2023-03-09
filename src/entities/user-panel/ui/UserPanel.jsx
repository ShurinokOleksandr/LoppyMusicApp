import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {BellIcon} from "@heroicons/react/24/outline";
import {HeadingLevel, Button} from "@lp/shared/ui";

export const UserPanel = ({className}) => {
    return (
        <div className={className}>
            <div className={'flex'}>
                <Image src={lol} width={0} height={0} className={'w-11 h-11 mr-4 rounded-full object-cover'} alt="avatar"/>
                <HeadingLevel className={'font-semibold'}>name</HeadingLevel>
            </div>
            <Button className='w-6 h-6 hover:w-[1.7rem]'>
                <BellIcon />
            </Button>
        </div>
    );
};

