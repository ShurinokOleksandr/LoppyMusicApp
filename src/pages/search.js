import React from 'react';
import Link from "next/link";
import Image from "next/image";
import lol from "../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";

const Search = () => {
    return (
        <div className={'m-5'}>
            <div className={'my-5 w-[30%]'}>
                <input type="text" placeholder={'Поиск треков и выпусков'} className={' rounded p-2 text-sm   w-full focus:outline-2 focus:bg-gray-50'}/>
            </div>
            <div className={''}>
                <h1 className={'my-5 text-xl font-medium'}>История поиска</h1>
                <div className={''}>
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
        </div>
    );
};

export default Search;