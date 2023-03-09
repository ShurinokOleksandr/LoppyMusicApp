import React from 'react';

export const Button = ({className,children,handleClick}) => {
    return (
        <button onClick={() => handleClick()} className={className} >
            {children}
        </button>
    );
};

