import React from 'react';

const MainContent = ({children}) => {
    return (
        <div className='flex-auto overflow-auto '>
            {children}
        </div>
    );
};

export default MainContent;