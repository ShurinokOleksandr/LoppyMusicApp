import React from 'react';
import Link from "next/link";
import Image from "next/image";
const BasicButton = ({children,link,img}) => {
    return (
        <>
            <Link
                className="w-full flex pl-10 my-7 items-center"
                href={`/${link}`}
            >
                <Image src={img} width={25} height={25} alt={children}/>
                <p className={'ml-6 text-stone-500 font-semibold'}>{children}</p>
            </Link>
        </>
    );
};

export default BasicButton;