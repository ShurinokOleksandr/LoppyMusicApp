import React from 'react';

export const Main = ({children,className}) => {
    return (
        <div className={`${className}`}>
            {children}
        </div>
    );
};

