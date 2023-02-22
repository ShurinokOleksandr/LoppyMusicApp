import React from 'react';

export  const HeadingLevel = ({level,className,children}) => {
    const Tag = level || 'h1'
    return (
        <Tag className={className}>
            {children}
        </Tag>
    );
};

