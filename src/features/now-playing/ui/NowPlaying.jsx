import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {HeartIcon, UserIcon} from "@heroicons/react/24/outline";
import {Button} from "@lp/shared/ui/music-control-btn";
import {SongCard} from "@lp/entities/song-card/ui";
import {Flex} from "@lp/shared/lib";
import {useCurrentPlayingQuery} from "@lp/shared/api/rkt-queries";

export const NowPlaying = ({className}) => {
    const {data} = useCurrentPlayingQuery()
    return (
        <div className={className}>
            {
                data ?
                    <>
                        <Image
                            src={data?.item.album.images[1].url}
                            alt={'avatar'}
                            width={300}
                            height={'100'}
                            className={'h-[170px] shadow-[rgba(0,_0,_0,_0.50)_0px_3px_8px]   rounded-2xl object-fill'}
                        />
                        <Flex className={'justify-between items-center mt-3 px-3'}>
                            <SongCard
                                name={data?.item?.name}
                                author={data?.item?.artists[0].name}
                                className={'text-[#5b647d]'}
                            />
                            <Button className={'w-6'}>
                                <HeartIcon/>
                            </Button>
                        </Flex>
                    </>
                    :
                    <UserIcon
                        alt={'avatar'}
                        width={250}
                        height={'100'}
                        className={'h-[170px] shadow-[rgba(0,_0,_0,_0.50)_0px_3px_8px]  rounded-2xl object-cover'}
                    />
            }
        </div>
    );
};

