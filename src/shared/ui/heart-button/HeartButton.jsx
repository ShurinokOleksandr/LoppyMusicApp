import React from 'react';
import {HeartIcon} from "@heroicons/react/24/outline";

export const HeartButton = ({className}) => {
    return (
        <button >
            <HeartIcon className={className}/>
        </button>
    );
};

