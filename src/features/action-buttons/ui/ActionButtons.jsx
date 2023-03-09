import React from 'react';
import {Button} from "@lp/shared/ui";
import {EllipsisHorizontalIcon, HeartIcon, PlayIcon} from "@heroicons/react/24/outline";
import {Paragraph} from "@lp/shared/ui/paragraph";
import {Flex} from "@lp/shared/lib";

export const ActionButtons = ({className}) => {
    return (
        <Flex className={className}>
            <Button className={'w-12 mx-3  font-bold bg-white border-2 border-red-500 rounded-2xl p-3 text-[red] hover:scale-110 hover:duration-500'}>
                <PlayIcon fill={'red'} />
            </Button>
            <Button className={'w-8 mx-3 hover:scale-110 hover:duration-500'}>
                <HeartIcon />
            </Button>
            <Button className={'w-8 mx-3 hover:scale-110 hover:duration-500'}>
                <EllipsisHorizontalIcon />
            </Button>
            <Paragraph className={''}>
                190 треков
            </Paragraph>
        </Flex>
    );
};

