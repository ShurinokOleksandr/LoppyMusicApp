import React from 'react';
import Image from "next/image";
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
import MusicItem from "src/shared/ui/music-item";
import FoundMusic from "src/shared/ui/found-music";
import SearchBar from "src/features/search/ui";
const HeaderPlaylist = ({children,className,showList,text}) => {
    return (
        <div className={`my-10 mx-16  bg-[#f1f2fb] ${className}`}>
            <div className={''}>
                <h1 className={'text-[#5b647d] font-bold text-4xl mb-6'}>{children}</h1>
                <div className={'flex  text-[#5b647d]  font-bold'}>
                    <Image src={lol}  className={'w-[250px] h-[250px] mr-10 object-cover rounded-2xl '} alt={'avatar playlist'}/>
                    <div className={''}>
                        {
                            showList ?
                                <div className={'mb-7 '}>
                                    <SearchBar/>
                                </div> : <></>
                        }
                        {
                            text ? <p className={'mb-7'}>{text}</p> : <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPlaylist;