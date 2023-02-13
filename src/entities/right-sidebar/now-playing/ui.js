import React from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
import Image from 'next/image'
const NowPlay = ({className}) => {
    return (
        <div className={className}>
            <div>
                <Image src={lol} className={'h-[170px] rounded-2xl  w-30'}/>
            </div>
            <div className={'flex justify-between items-center'}>
                <div className={'text-[#5b647d]'}>
                    <h2 className={'font-semibold'}>Name song</h2>
                    <p> author song </p>
                </div>
                <button>
                    <HeartIcon className={'w-6 h-6'}/>
                </button>
            </div>
        </div>
    );
};

export default NowPlay ;