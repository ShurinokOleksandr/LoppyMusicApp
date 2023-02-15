import React from 'react';
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
import Image from "next/image";
import Link from "next/link";
const Collection = () => {
    return (
        <div className={' '}>
            <div className={'m-5 '}>
                <h2 className={'mb-5  text-[#5b647d] font-bold text-4xl'}><span className={'text-[#e60000]'}>Твои</span> Плейлисты</h2>
                <ul className={'grid grid-rows-1 grid-cols-4 gap-4'}>
                    <li className={'bg-gradient-to-r from-blue-500 to-blue-300  rounded-2xl w-[13rem] p-5'}>
                        <Link href="/home">
                            <Image src={lol} className={'w-[13rem] h-40 object-cover rounded'} alt={'avatar'}/>
                            <div className={' w-40'}>
                                <h2 className={'truncate'}>Name playlist</h2>
                                <p className={'h-10 text-xs  truncate '}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad, dolor doloribus ea est explicabo laborum, magni maiores odio quae reiciendis velit, voluptas. Ex magni, molestias!</p>
                            </div>
                        </Link>
                    </li>

                </ul>
            </div>
        </div>
    );
};

export default Collection;