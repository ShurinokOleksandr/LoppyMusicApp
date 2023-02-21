import React from 'react';
import {NavigationButton} from "@eh/shared/ui/navigation-button";

export  const Navigation = ({navLinks,className}) => {
    return (
        <div className={className}>
            {navLinks.map(({ link, name, icon },index) => (
                <NavigationButton
                    key={link}
                    link={link}
                    name={name}
                    icon={icon}
                    className={`flex items-center my-5 ${index === 3 ? 'mt-10': ''}`}
                />
            ))}
        </div>
    );
};

