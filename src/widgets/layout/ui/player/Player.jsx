import React from 'react';
import {Volume} from "@lp/features/volume";
import {PlayerButtons} from "@lp/entities/player-buttons";
import {OrderListMusic} from "@lp/entities/order-list-music";
import {ProgressMusic} from "@lp/features/progress-music";


export const Player = ({className}) => {

    return (
        <div className={className}>
                <div className='flex w-full justify-between items-center p-3'>
                    <Volume className={'flex w-2/6 items-center'}/>
                    <PlayerButtons className={'flex w-4/6 justify-center items-center text-gray-600'}/>
                    <OrderListMusic className={"flex w-2/6 justify-end "}/>
                </div>
                <ProgressMusic className={'flex items-center justify-center'}/>
        </div>
    );
};