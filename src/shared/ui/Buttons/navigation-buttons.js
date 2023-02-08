import React from 'react';
import home from '/public/navigation-icons/home.svg'
import search from '/public/navigation-icons/search.svg'
import myMedia from '/public/navigation-icons/my-media.svg'
import BasicButton from "./basic-button";

const btn = [
    {id:0,name:"Home",icon:home,link:'home'},
    {id:1,name:"Поиск",icon:search,link:'search'},
    {id:2,name:"Моя медиатека",icon:myMedia,link:'collection'},
]

const NavigationButtons = () => {
    return (
        <div>
            {
                btn.map(({id,name,icon,link}) => <BasicButton img={icon} link={link} key={id}>{name}</BasicButton>)
            }
        </div>
    );
};

export default NavigationButtons;