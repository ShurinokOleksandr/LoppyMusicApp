import React, {memo, useEffect} from 'react';
import {LeftSidebar, Main, Player, RightSidebar,} from "@lp/widgets/layout/ui";
import 'typeface-roboto-mono'
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {setToken} from "@lp/features/auth";
import Auth from "@lp/pages/auth";
import {AUTH_ENDPOINT, CLIENT_ID, CLIENT_SECRET, REDIRECT} from "@lp/shared/config";
import Link from "next/link";

export const Layout = ({children}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    const {token} = useSelector(state => state.authSlice)

    useEffect(() => {
        let token = window.localStorage.getItem("code")
        if (!token && router.asPath.split("?code=")[1]) {
            let token = router.asPath.split("?code=")[1]

            const params =new URLSearchParams({
                "grant_type": 'authorization_code',
                "code": token,
                "redirect_uri": `${REDIRECT}`
            })
                fetch(`${AUTH_ENDPOINT}/api/token`,{
                    method: "POST",
                    body:params,
                    headers:{
                        'Authorization': 'Basic ' + (Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(response => response.json()).then(data=> dispatch(setToken(data)))
            window.localStorage.setItem("code", token)

        }
    }, [])
    return (
        <main className={'flex h-screen font-mono '}>

                    <>
                        <LeftSidebar className={'bg-white text-stone-500 border-r-2 w-[235px] overflow-hidden sticky flex flex-col justify-between ml-4 pr-5'}/>
                        <div className='flex flex-col justify-between  bg-[#f1f2fb] flex-1 w-[1000px]'>
                            <Main className={'h-full overflow-auto'}>{children}</Main>
                            <Player className={'h-[100px] w-full border-t-2 bg-white border-t overflow-hidden'}/>
                        </div>
                        <RightSidebar className={'w-1/6 text-stone-400 w-[18%] overflow-hidden  px-4 h-full sticky border-l-2'}/>
                    </>
            <Link
                className={'font-bold italic bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-[150px] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 rounded-lg border-4 border-[#ff6723] px-5 py-2.5 text-center text-4xl'}
            href={`${AUTH_ENDPOINT}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&scope=user-library-read&response_type=code`}>

                Зайти
            </Link>

        </main>
    );
};