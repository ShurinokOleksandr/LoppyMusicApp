import React from 'react';

const PlayerRange = ({className}) => {
    return (
        <>
            <input type="range" className={`rangeInput ${className}`}/>
        </>
    );
};

export default PlayerRange;