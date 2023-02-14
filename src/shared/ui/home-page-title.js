import React from 'react';
import {ClockIcon} from "@heroicons/react/24/outline";

const HomePageTitle = () => {
    return (
        <>
            <li className={'flex mb-3 items-center font-semibold  h-15 p-3 sticky top-0 bg-white border-b-2'}>
                <div className={'mr-3 w-[5%] '}>#</div>
                <p className={'w-3/6 '}>НАЗВАНИЕ</p>
                {/*поменять если что популярность с альбом песни */}
                <div className={'w-2/6 '}>ПОПУЛЯРНОСТЬ</div>
                <div className={'w-2/6 '}>ДАТА ДОБАВЛЕНИЯ</div>
                <div className={'w-[5%] flex justify-end ml-3 '}><ClockIcon className={'w-5'}/></div>
            </li>
        </>
    );
};

export default HomePageTitle;