import React from 'react';

const MainContent = ({children}) => {
    return (
        <div className='h-[85%] overflow-auto'>
            {children}
        </div>
    );
};

export default MainContent;