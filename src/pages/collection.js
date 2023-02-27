import React from 'react';
import {HeadingLevel} from "@lp/shared/ui";
import {MyCollection} from "@lp/features/collection";




const Collection = () => {


    return (
        <div className={'m-5'}>
            <HeadingLevel className={'mb-5  text-[#5b647d] font-bold text-4xl'}>
                <span className={'text-[#e60000]'}>Твои</span> Плейлисты
            </HeadingLevel>
            <MyCollection/>
        </div>
    );
};

export default Collection;