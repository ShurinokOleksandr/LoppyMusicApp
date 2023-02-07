import React from 'react';
import NavigationButton from "@/shared/ui/navigation-button";

const Layout = ({children}) => {
    return (
        <main >
            <div className="flex relative ">
                <div className="w-1/6"></div>
                <div className='w-1/6 border border-stone-300 fixed min-h-screen '>
                    <div className='pl-10 my-7 '>
                        Logo
                    </div>
                    <div className='  '>
                        <NavigationButton/>
                        <NavigationButton/>
                        <NavigationButton/>
                        <NavigationButton/>
                    </div>
                </div>
                <div className='w-4/6    min-h-screen '>
                    {children}
                    <div className=' border-t px-0  border-stone-300 w-full h-20 bg-white absolute sticky bottom-0'>
                        playerfffffffffffffffffff
                    </div>
                </div>
                <div className='w-1/6 min-h-screen border border-stone-300 fixed top-0 right-0 '>
                    <NavigationButton/>
                </div>
            </div>
        </main>
    );
};

export default Layout;