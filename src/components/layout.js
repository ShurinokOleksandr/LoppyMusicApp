import React from 'react';
import NavigationButtons from "shared/ui/Buttons/navigation-buttons";

const Layout = ({children}) => {
    return (
        <>
            <main>
                <div className='flex h-screen'>
                    <div className='bg-white text-stone-400 w-1/6 overflow-hidden   sticky'>
                        <div className=''>
                            Logo
                        </div>
                        <div className=' '>
                            <NavigationButtons/>
                        </div>
                    </div>
                    <div className='flex-1 w-4/6  bg-blue-100'>
                        <div className='h-[85%] overflow-auto'>
                            {children}
                        </div>
                        <div className='h-[15%] w-full border-t bg-white border-t'>
                            playerfffffffffffffffffff
                        </div>
                    </div>
                    <div className='w-1/6 text-stone-400 w-1/6 overflow-hidden   sticky'>

                    </div>
                </div>
            </main>
        </>
    );
};

export default Layout;