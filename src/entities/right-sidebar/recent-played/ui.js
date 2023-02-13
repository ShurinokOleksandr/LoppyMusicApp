import React from 'react';
import lol from '/public/e0640caa49009147a3d3ca3a99b65c3d.jpg'
import Image from 'next/image'
import RecentPlayedItem from "src/shared/ui/recent-played-item";
const ResentPlayed = ({className}) => {
    return (
        <div className={className}>
            <div className={'flex justify-between mb-2'}>
                <h2 className={'text-xs'}>Недавно прослушано</h2>
                <button className={'text-xs'}>Посмотреть всё</button>
            </div>
            <ul className={'h-[400px] overflow-hidden'}>
                <RecentPlayedItem/>
                <RecentPlayedItem/>
                <RecentPlayedItem/>
                <RecentPlayedItem/>
                <RecentPlayedItem/>
                <RecentPlayedItem/>
                <RecentPlayedItem/>
            </ul>
        </div>
    );
};

export default ResentPlayed;