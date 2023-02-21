import React from 'react';
import Image from "next/image";
import lol from "/public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {BellIcon, HeartIcon} from "@heroicons/react/24/outline";

export  const LeftSidebar = () => {
    return (
        <div className='w-1/6 text-stone-400 w-[18%] overflow-hidden px-4 h-full sticky border-l-2'>
            <div className={'flex flex-col min-h-full'}>
                <div className={'flex justify-between py-2 border-b-2 items-center'}>
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
                <div className={'mt-3 flex-auto'}>
                    <div className={'flex justify-between mb-2'}>
                        <h2 className={'text-xs'}>Недавно прослушано</h2>
                        <button className={'text-xs'}>Посмотреть всё</button>
                    </div>
                    <ul className={'h-[400px] overflow-hidden'}>
                        <li className={'flex items-center justify-between  my-4'}>
                            <div className={'flex '}>
                                <Image src={lol} alt="avatar" className={'w-10 h-10 rounded object-cover mr-2'}/>
                                <div className={'text-[#5b647d]'}>
                                    <p className='text-sm font-semibold'>
                                        Name song
                                    </p>
                                    <p className='text-xs'>
                                        Avtor song
                                    </p>
                                </div>
                            </div>
                            <div className='text-xs text-[#5b647d]'>
                                12 min ago
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={'mb-5'}>
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
            </div>
        </div>
    );
};
