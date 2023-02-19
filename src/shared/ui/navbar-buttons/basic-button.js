import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
const BasicButton = ({link,className,classParent,children,name,onClick}) => {
    const {pathname} = useRouter()
    return (
        <div className={classParent}>
            {
                link ?
                    <Link
                        className={className}
                        href={`/${link}`}
                    >
                        {children}
                        <p className={`${pathname.slice(1) === link ? `font-bold text-[#293046]` : "font-semibold"} ml-6 duration-50 hover:font-bold `}>
                            {name}
                        </p>
                    </Link>
                    :
                    <button className={className}
                    >
                        {children}
                        <p className={`${pathname.slice(1) === link ? `font-bold text-[#293046]` : "font-semibold"} ml-6 duration-50 hover:font-bold `}>
                            {name}
                        </p>
                    </button>
            }
        </div>
    );
};


export default BasicButton;