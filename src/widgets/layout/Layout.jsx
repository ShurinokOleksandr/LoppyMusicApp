import React, {useEffect, useState} from 'react';
import 'typeface-roboto-mono'
import {LeftSidebar, Main, Player, RightSidebar} from "@lp/widgets/layout/ui";
import {useRouter} from "next/router";
import {getSession, useSession} from "next-auth/react";
import {Auth} from "@lp/features/auth";


export const Layout = ({children,userInfo}) => {
    const router = useRouter();
    const {data,status} = useSession()

    // console.log(userInfo)
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
async function getUserInfo(accessToken) {
    const response = await fetch("https://api.spotify.com/v1/me", {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    });

    const data = await response.json();
    return data;
}
export async function getServerSideProps(context) {
    const session = await getSession(context);
    const accessToken = session.accessToken;
    const userInfo = await getUserInfo(accessToken);

    return {
        props: {
            userInfo,
        },
    };
}