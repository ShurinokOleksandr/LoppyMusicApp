import React from 'react';

export const Paragraph = ({className,children}) => {
    return (
        <p className={`${className} text-[#5b647d]`}>
            {children}
        </p>
    );
};

