import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
export const NavigationButton = (
    {
        name,
        link,
        className,
        classParent,
        icon,
    }) => {
    const {pathname} = useRouter()
    return (
        <div className={classParent}>
            {
                typeof(link) === 'string' ?
                    (
                        <Link
                            className={className}
                            href={`/${link}`}
                        >
                            {icon}
                            <p className={`${pathname.slice(1) === link ? `font-bold text-[#293046]` : ""} ml-4  hover:font-bold `}>
                                {name}
                            </p>
                        </Link>
                    )
                    : (<button
                            className={className}
                        >
                            {icon}
                            <p className={`${pathname.slice(1) === link ? `font-bold text-[#293046]` : ''} ml-4  hover:font-bold `}>
                                {name}
                            </p>
                        </button>)
            }
        </div>
    );
};


