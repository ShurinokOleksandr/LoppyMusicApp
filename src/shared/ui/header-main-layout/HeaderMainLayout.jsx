import React from 'react';
import {HeadingLevel} from "@lp/shared/ui";
import Image from "next/image";
import lol from "../../../../public/e0640caa49009147a3d3ca3a99b65c3d.jpg";
import {Search} from "@lp/features/search";
const text = 'Здесь лежат все ваши сохранённые треки. Также не забывайте что есть возможность создавать и сохранять различные плейлисты. Так же вы можете делиться плейлистами с вашими друзьями.'

export const HeaderMainLayout = ({className,children,isInput}) => {
    return (
        <div className={className}>
            <HeadingLevel className={'text-[#5b647d] font-bold text-4xl mb-6'}>
                {children}
            </HeadingLevel>
            <div className={'flex   text-[#5b647d]  font-bold'}>
                <Image src={lol}  className={'w-[250px] h-[250px] mr-10 object-cover rounded-2xl '} alt={'avatar playlist'}/>
                {
                    isInput ?
                        <Search className={'w-full'}/>
                        : <div className={'my-auto'}>
                            <div className={'mb-7'}>{text}</div>
                            <div>190 </div>
                        </div>
                }

            </div>
        </div>
    );
};

