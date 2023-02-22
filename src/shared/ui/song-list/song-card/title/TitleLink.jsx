import React from 'react';
import Link from "next/link";

export  const TitleLink = ({link,className,children}) => {
    return (
        <Link href={link} className={`${className}  hover:scale-105  hover:duration-200 `}>
            {children}
        </Link>
    );
};

