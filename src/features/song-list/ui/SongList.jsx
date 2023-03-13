import React, {useState} from 'react';
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {Button, Paragraph, Timestamp} from "@lp/shared/ui";
import {HeartIcon} from "@heroicons/react/24/outline";
import {convertToMin, Flex} from "@lp/shared/lib";
import {SongCard} from "@lp/entities/song-card";
import {date} from "@lp/shared/lib/convert-to-date";






export const SongList = (
    {
        className,
        isBtn = false,
        items=[],
        search=false
    }) => {
    const [save,setSave] = useState(false)
    return (
        <ul className={`${className}`}>
            { isBtn ?
                (items.map(({track},index)=>
                        <li key={track?.id} className={'flex mb-3 px-5 items-center text-[#293046]'}>
                            <Paragraph className={'w-1/12'}>
                                {index}
                            </Paragraph>
                            <Flex className={'w-6/12  items-center'}>
                                <Image
                                    src={track?.album.images[2].url}
                                    width={40}
                                    height={40}
                                    className={'mr-3 shadow-[rgba(0,_0,_0,_0.50)_0px_3px_8px] rounded object-cover'}
                                    alt={'avatar'}
                                />
                                <SongCard
                                    className={'h-10'}
                                    name={track?.name}
                                    artist_id={track?.artists[0].id}
                                    author={track?.artists[0].name}
                                />
                            </Flex>

                            <Paragraph className={'w-6/12 '}>
                                {track?.popularity}
                            </Paragraph>

                            <Paragraph className={'w-6/12 '}>
                                {date('2023-03-10T16:36:50.858Z')}
                            </Paragraph>

                            <Flex className={'w-2/12 justify-end'}>

                                <HeartIcon
                                    onClick={() => setSave(!save)}
                                    fill={save ? 'red' : 'none'}
                                    className={'w-5 mr-3'}
                                />
                                <Timestamp
                                    time={convertToMin(track?.duration_ms)}
                                />
                            </Flex>
                        </li>
                    )

                )
                :
                ( items.map(({track} )=>
                        <li className={'flex items-center justify-between h-16'}
                            key={track?.id}
                        >
                            <Flex className={'items-center'}>
                                <Image
                                    src={track?.album.images[2].url}
                                    width={40}
                                    height={40}
                                    className={'mr-3 shadow-[rgba(0,_0,_0,_0.50)_0px_3px_8px] rounded object-cover'}
                                    alt={'avatar'}
                                />
                                <SongCard
                                    className={'h-10'}
                                    name={track?.name}
                                    artist_id={track?.artists[0].id}
                                    author={track?.artists[0].name}
                                />
                            </Flex>
                            <Flex className={'justify-between'}>
                                {
                                    search
                                        ?
                                        <Button className={'border-2 rounded-2xl px-2 py-2 hover:bg-[#e60000] hover:text-amber-50'}>
                                            Добавить
                                        </Button>
                                        :
                                        <Timestamp time={convertToMin(track?.duration_ms)}/>

                                }
                            </Flex>
                        </li>
                    )
                )
            }
        </ul>
    );
};

