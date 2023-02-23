import React from 'react';
import {BarsArrowDownIcon} from "@heroicons/react/24/outline";

export const OrderListMusic = ({className}) => {
    return (
        <button className={className} >
            <BarsArrowDownIcon className={'w-6 h-6 text-gray-500'}/>
        </button>
    );
};

