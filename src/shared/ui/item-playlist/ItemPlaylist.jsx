import React from 'react';
import Link from "next/link";
import Image from "next/image";
import {HeadingLevel, Paragraph} from "@lp/shared/ui";
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'

export const ItemPlaylist = ({
    className,
    genres,
    name,
    tracks,
    img,
    link
                      }) => {
    return (
        <li className={className}>
            <Link href={link}>
                <Image src={img || lol} className={'w-[13rem] h-40 object-cover rounded'} alt={'avatar'}/>
                <div className={'w-40'}>
                    <HeadingLevel className={'truncate m-1'}>{name}</HeadingLevel>
                    <Paragraph className={'h-10 my-1 w-full text-xs truncate pr-5'}>
                        {tracks }
                    </Paragraph>
                </div>
            </Link>
        </li>
    );
};

