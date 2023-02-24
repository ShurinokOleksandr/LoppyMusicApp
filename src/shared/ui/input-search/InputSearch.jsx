import React, {useState} from 'react';

export const InputSearch = ({className}) => {
    const [value,setValue] = useState('')
    return (
        <input
            value={value}
            onChange={event => setValue(event.target.value)}
            className={className}
            type="text"
            placeholder={'Поиск треков и выпусков'}
        />
    );
};

