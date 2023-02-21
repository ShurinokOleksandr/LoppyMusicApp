import React, {useState} from 'react';
import { ClockIcon, EllipsisHorizontalIcon, HeartIcon, PlayIcon} from "@heroicons/react/24/outline";
import Image from "next/image";
import lol from "../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";

const Playlist = () => {
    const [save,setSave] = useState('')

    return (
        <div>
            <div className={`my-10 mx-16  bg-[#f1f2fb] border-b-3`}>
                <div className={''}>
                    <h1 className={'text-[#5b647d] w-[30%] font-bold text-4xl mb-6'}><span className={'text-[#e60000] '}>Мой</span> плейлист</h1>
                    <div className={'flex   text-[#5b647d]  font-bold'}>
                        <Image src={lol}  className={'w-[250px] h-[250px] mr-10 object-cover rounded-2xl '} alt={'avatar playlist'}/>
                        <div className={'w-full'}>
                            <input type="text" placeholder={'Поиск треков и выпусков'} className={'w-[70%] rounded p-2 text-sm '}/>
                            <ul className={'w-[70%] h-[210px] overflow-auto px-3'}>
                                <li className={'flex items-center justify-between my-5'}>
                                    <div className={'flex'}>
                                        <Image src={lol} height={0} className={'w-10 h-10 mr-3 rounded object-cover'} alt={'avatar'}/>
                                        <div className={'text-sm'}>
                                            <p className={'font-bold  hover:underline'}>name</p>
                                            <p className={' hover:underline'}>author </p>
                                        </div>
                                    </div>
                                    <button className={'border-2 border-gray-500 rounded-2xl px-3 py-1 hover:bg-[#cc040b] hover:border-[#cc040b] hover:text-white'}>Добавить</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ul className={'flex w-[25%] items-center justify-between m-5'}>
                <li>
                    <button>
                        <PlayIcon fill={'red'} className={'w-12 font-bold bg-white border-2 border-red-500 rounded-2xl p-3 text-[red] hover:scale-110 hover:duration-500'}/>
                    </button>
                </li>
                <li>
                    <button>
                        <HeartIcon className={'w-8 hover:scale-110 hover:duration-500'}/>
                    </button>
                </li>
                <li>
                    <button>
                        <EllipsisHorizontalIcon className={'w-8 hover:scale-110 hover:duration-500'}/>
                    </button>
                </li>
                <li>
                    190 треков
                </li>
            </ul>
            <ul className={'p-2 text-[#293046] px-5 relative  '}>
                <li className={'flex mb-3 items-center font-semibold  h-15 p-3 sticky top-0 bg-white border-b-2'}>
                    <div className={'mr-3 w-[5%] '}>#</div>
                    <p className={'w-3/6 '}>НАЗВАНИЕ</p>
                    {/*поменять если что популярность с альбом песни */}
                    <div className={'w-2/6 '}>ПОПУЛЯРНОСТЬ</div>
                    <div className={'w-2/6 '}>ДАТА ДОБАВЛЕНИЯ</div>
                    <div className={'w-[10%] flex justify-center ml-3 '}><ClockIcon className={'w-5'}/></div>
                </li>
                <li className={'flex items-center h-10  text-sm my-4  p-3'}>
                    <div className={'mr-3 w-[5%] mx-auto'}>1</div>
                    <div className={' w-3/6 flex items-center '}>
                        <Image src={lol} height={0} className={'w-10 h-10 mr-5 rounded object-cover'} alt={'avatar'}/>
                        <div>
                            <div className={'font-bold hover:underline'}>name</div>
                            <div className={'hover:underline'}>author </div>
                        </div>
                    </div>
                    <p className={'w-2/6 '}>популярность </p>
                    <p className={'w-2/6 '}> дата добавления </p>
                    {/*поменять если что популярность с альбом песни */}
                    <div className={'w-[10%] flex justify-between ml-3'}>
                        <HeartIcon onClick={() => setSave(!save)} fill={save ? 'red' : 'none'} className={'w-5'}/>
                        <div className={''}>2:33</div>
                    </div>
                    {
                        false ?
                            <button className={'border-4 rounded-2xl px-4 py-2 '}></button>
                            : <></>
                    }
                </li>
            </ul>
        </div>
    );
};

export default Playlist;