import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {BellIcon} from "@heroicons/react/24/outline";
import {HeadingLevel, Button} from "@lp/shared/ui";
import {useSession} from "next-auth/react";
import {Flex} from "@lp/shared/lib";

export const UserPanel = ({className}) => {
    const {data} = useSession()
    return (
        <Flex className={className}>
            <Flex className={'items-center'}>
                <Image
                    src={data.user.image}
                    width={40}
                    height={10}
                    className={'h-[40px] mr-4 rounded-full object-cover'}
                    alt="avatar"
                />
                <HeadingLevel className={'font-semibold'}>
                    {data.user.name}
                </HeadingLevel>
            </Flex>
            <Button className='w-6 h-6 hover:w-[1.7rem]'>
                <BellIcon />
            </Button>
        </Flex>
    );
};


