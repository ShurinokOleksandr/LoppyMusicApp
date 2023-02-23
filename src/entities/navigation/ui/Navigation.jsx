import React from 'react';
import {NavigationButton} from "@lp/shared/ui";

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

