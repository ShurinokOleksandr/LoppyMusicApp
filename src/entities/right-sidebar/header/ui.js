import React from 'react';
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {BellIcon} from "@heroicons/react/24/outline";

const Header = ({className}) => {
    return (
        <>
            <div className={'flex justify-between py-2 border-b-2 items-center' + className}>
                <div className={'flex'}>
                    <div className={'mr-4'}>
                        <Image src={lol} width={0} height={0} className={'w-11 h-11 rounded-full object-cover'} alt="avatar"/>
                    </div>
                    <div>
                        <h2 className={'font-semibold '}>name </h2>
                    </div>
                </div>
                <div className={''}>
                    <button className='w-6 h-6 hover:w-[1.7rem]'>
                        <BellIcon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;