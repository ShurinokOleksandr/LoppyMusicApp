import React from 'react';
import Image from "next/image";
import lol from "../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";

const RecentPlayedItem = () => {
    return (
        <>
            <li className={'flex items-center justify-between  my-4'}>
                <div className={'flex '}>
                    <Image src={lol} alt="avatar" className={'w-10 h-10 rounded object-cover mr-2'}/>
                    <div className={'text-[#5b647d]'}>
                        <p className='text-sm font-semibold hover:underline'>
                            Name song
                        </p>
                        <p className='text-xs hover:underline'>
                            Avtor song
                        </p>
                    </div>
                </div>
                <div className='text-xs text-[#5b647d]'>
                    12 min ago
                </div>
            </li>
        </>
    );
};

export default RecentPlayedItem;