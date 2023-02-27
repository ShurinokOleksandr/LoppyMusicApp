import React from 'react';
import Link from "next/link";
import {Flex} from "@lp/shared/lib";
import {HeadingLevel, Paragraph} from "@lp/shared/ui";

export const SpecialElementListPlaylist = (
    {
        className,
        link,
        name,
        children

    }) => {
    return (
        <li className={className}>
            <Link href="/pages/home">
                <Flex className={'flex-col '}>
                    <HeadingLevel className={'text-2xl mb-4 font-bold'}>{name}</HeadingLevel>
                    <Paragraph className={'h-[4.5rem]  line-clamp-3 my-5'}>
                        {children}
                    </Paragraph>
                    <Paragraph className={''}>190 tracks</Paragraph>
                </Flex>
            </Link>
        </li>
    );
};

