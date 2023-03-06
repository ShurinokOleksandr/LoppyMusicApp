import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {isActiveLink} from "@lp/shared/lib";
export const NavigationButton = (
    {
        name,
        link,
        className,
        classParent,
        icon,
        onClick,
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
                            <p className={isActiveLink(pathname,link,`font-bold ml-2 text-[#293046]`,'')+ ` ml-4  hover:font-bold `}>
                                {name}
                            </p>
                        </Link>
                    )
                    : (<button
                    onClick={onClick}
                            className={className}
                        >
                            {icon}
                            <p className={isActiveLink(pathname,link,`font-bold ml-2 text-[#293046]`,'')+ ` ml-3 hover:font-bold `}>
                                {name}
                            </p>
                        </button>)
            }
        </div>
    );
};


