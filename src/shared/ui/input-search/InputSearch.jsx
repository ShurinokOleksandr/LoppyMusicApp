import React from 'react';

export const InputSearch = ({className}) => {
    return (
        <input
            className={className}
            type="text"
            placeholder={'Поиск треков и выпусков'}
        />
    );
};

