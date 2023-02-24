import React, {useState} from 'react';
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {MusicControlButton, Paragraph, Timestamp} from "@lp/shared/ui";
import {HeartIcon} from "@heroicons/react/24/outline";
import {Flex} from "@lp/shared/lib";
import {SongCard} from "@lp/entities/song-card";






export const SongList = ({
                             className,
                             isBtn = false,
                             popular,
                             dateAdd,
                             search = false,
                             time}) => {
    const [save,setSave] = useState(false)
    return (
        <ul className={`${className}`}>
            { popular ?
                (
                    <>
                        <li className={'flex mb-3 px-5 items-center  text-[#293046]    '}>
                            <Paragraph className={'w-1/12'}>1</Paragraph>
                            <Flex className={'w-6/12  items-center '}>
                                <Image src={lol} height={0} className={'w-10 h-10 mr-5 rounded object-cover'} alt={'avatar'}/>
                                <SongCard name={'name'} author={'author'}/>
                            </Flex>
                            <Paragraph className={'w-6/12 '}>популярность </Paragraph>
                            <Paragraph className={'w-6/12 '}> дата добавления </Paragraph>
                            {/*поменять если что популярность с альбом песни */}
                            <Flex className={'w-2/12 justify-end'}>
                                <HeartIcon onClick={() => setSave(!save)} fill={save ? 'red' : 'none'} className={'w-5 mr-3'}/>
                                <Timestamp time={'2:44'}/>
                            </Flex>
                        </li>

                    </>
                )
                :
                (
                    <>
                        <li className={'flex items-center justify-between h-10 my-4'}>
                            <Flex className={'items-center'}>
                                <Image src={lol} height={0} className={'w-10 h-10 mr-5 rounded object-cover'} alt={'avatar'}/>
                                <SongCard name={'name'} author={'author'}/>
                            </Flex>
                            <Flex className={'justify-between'}>
                                {
                                    time
                                        ? <Timestamp time={'2:44'}/>
                                        : <MusicControlButton className={'border-2 rounded-2xl px-2 py-2 '}>Добавить</MusicControlButton>
                                }
                            </Flex>
                        </li>
                    </>
                )
            }
        </ul>
    );
};

