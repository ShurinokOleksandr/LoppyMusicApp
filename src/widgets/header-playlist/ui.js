import React from 'react';
import Image from "next/image";
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
const HeaderPlaylist = ({children,text}) => {
    return (
        <div className={'p-10 bg-[#f1f2fb] '}>
            <div className={' justify-center  '}>
                <div className={''}>
                    <h1 className={'text-[#5b647d] font-bold text-4xl mb-6'}>{children}</h1>
                </div>
                <div className={'flex  text-[#5b647d]  font-bold'}>
                    <Image src={lol}  className={'w-[300px] mr-10 object-cover rounded-2xl '} alt={'avatar playlist'}/>
                    <div className={'text-sm overflow-auto py-3'}>
                        <div className={'mb-7'}>
                            {text}
                        </div>
                        <div className={'font-bold'}>
                            190 треков
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderPlaylist;