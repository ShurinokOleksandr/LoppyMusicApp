import React from 'react';
import Link from "next/link";
import Image from "next/image";
const BasicButton = ({btn,className,classParent}) => {
    return (
        <div className={classParent}>
            {btn ?
                btn?.map(({link,icon,name,id}) =>
                    <Link
                        key={id}
                        className={className}
                        href={`/${link}`}
                    >
                        <Image src={icon} width={25} height={25} alt={name}/>
                        <p className={'ml-6 text-stone-500 font-semibold'}>{name}</p>
                    </Link>
                )
                :
                <Link href={''} className={className}>
                    Плейлист
                </Link>
            }
        </div>
    );
};


export default BasicButton;