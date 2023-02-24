import React from 'react';
import {Paragraph} from "@lp/shared/ui";
import {Flex} from "@lp/shared/lib";
import {ClockIcon} from "@heroicons/react/24/outline";

export const PanelSongList = () => {
    return (
        <Flex className={'mb-3 mx-5 items-center font-semibold text-[#293046] h-15 px-5 py-3 sticky top-0 bg-white border-b-2'}>
            <Paragraph className={'w-1/12'}>#</Paragraph>
            <Paragraph className={'w-6/12'}>НАЗВАНИЕ</Paragraph>
            <Paragraph className={'w-6/12'}>ПОПУЛЯРНОСТЬ</Paragraph>
            <Paragraph className={'w-6/12'}>ДАТА ДОБАВЛЕНИЯ</Paragraph>
            <Flex className={'w-2/12 flex justify-end'}><ClockIcon className={'w-5'}/></Flex>
        </Flex>
    );
};

