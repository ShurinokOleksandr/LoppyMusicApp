import React from 'react';
import {CollectionPlaylists} from "@lp/entities/collection-playlist";
import {SpecialElementListPlaylist} from "@lp/shared/ui";


const a = [
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssdfsdf'},
]

export const MyCollection = () => {
    // тут получаю данные и передаю пропсами , таким образом у меня переиспользуемый список любых элементов
    return (
        <CollectionPlaylists className={'grid grid-cols-4 grid-rows-2 gap-5'} a={a}>
            <SpecialElementListPlaylist
                className={'bg-gradient-to-r from-blue-500 to-blue-300  text-[#293046] font-semibold col-span-2 rounded-2xl p-5'}
                name={'Любимые треки'}
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam ea eius esse est, facilis perspiciatis saepe similique. A ad aliquam dolorem eos error est, illum magnam modi nihil obcaecati quae quas rem, repudiandae similique unde velit voluptatibus. Accusamus architecto, dolores dolorum est ipsum itaque iure laudantium minus mollitia nihil perferendis possimus rem velit voluptas voluptates! Earum ipsam iste minima non odit, perferendis veritatis! Aliquid culpa cumque esse iusto labore laboriosam modi odit suscipit? Assumenda blanditiis eos in ipsam maxime minus nemo, non numquam optio quam qui quibusdam repudiandae, vitae! Adipisci dolor excepturi fugiat illum molestiae reprehenderit sapiente suscipit voluptates!
            </SpecialElementListPlaylist>
        </CollectionPlaylists>
    );
};

