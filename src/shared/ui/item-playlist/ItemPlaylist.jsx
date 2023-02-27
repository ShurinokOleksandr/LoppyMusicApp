import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {HeadingLevel, Paragraph} from "@lp/shared/ui";

export const ItemPlaylist = ({
    className,
    name,
    tracks,
    img,
    link
                      }) => {
    return (
        <li className={className}>
            <Link href={link}>
                <Image src={img} className={'w-[13rem] h-40 object-cover rounded'} alt={'avatar'}/>
                <div className={'w-40'}>
                    <HeadingLevel className={'truncate'}>{name}</HeadingLevel>
                    <Paragraph className={'h-10 text-xs  truncate '}>
                        {tracks}
                    </Paragraph>
                </div>
            </Link>
        </li>
    );
};

