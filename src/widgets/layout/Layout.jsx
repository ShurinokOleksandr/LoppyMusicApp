import React, {useEffect, useState} from 'react';
import 'typeface-roboto-mono'
import {LeftSidebar, Main, Player, RightSidebar} from "@lp/widgets/layout/ui";
import {useSession} from "next-auth/react";
import {Auth} from "@lp/features/auth";
import {useDispatch} from "react-redux";
import {setToken} from "@lp/features/auth/model/authSlice";


export const Layout = ({children}) => {
    const dispatch = useDispatch()
    const {data,status} = useSession()
    useEffect(() =>{
        if (status ==='authenticated'){
            dispatch(setToken(data.accessToken))
        }
    },[status])

    if (status === "loading") {
        return <p>Hang on there...</p>
    }
    return (
        <>
            {
                status === 'authenticated'
                    ?
                    <main className={'flex h-screen font-mono '}>
                        <LeftSidebar className={'bg-white text-stone-500 border-r-2 w-[235px] overflow-hidden sticky flex flex-col justify-between ml-4 pr-5'}/>
                        <div className='flex flex-col justify-between  bg-[#f1f2fb] flex-1 w-[1000px]'>
                            <Main className={'h-full overflow-auto'}>{children}</Main>
                            <Player className={'h-[100px] w-full border-t-2 bg-white border-t overflow-hidden'}/>
                        </div>
                        <RightSidebar className={'w-1/6 text-stone-400 w-[18%] overflow-hidden  px-4 h-full sticky border-l-2'}/>
                    </main>
                    :
                    <Auth/>
            }
        </>

    );
};
