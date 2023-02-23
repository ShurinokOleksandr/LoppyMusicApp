import React from 'react';

export const MusicControlButton = ({className,children,handleClick}) => {
    return (
        <button onClick={() => handleClick()} className={className} >
            {children}
        </button>
    );
};

