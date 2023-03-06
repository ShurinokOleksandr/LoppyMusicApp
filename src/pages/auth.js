import React, {useEffect} from 'react';
import {HeadingLevel, Paragraph} from "@lp/shared/ui";
import {AUTH_ENDPOINT, CLIENT_ID, REDIRECT, RESPONSE_TYPE, SCOPES} from "@lp/shared/config";
import Link from "next/link";


const Auth = () => {
    useEffect(()=>{
        window.localStorage.removeItem('code')
    },[])
    return (
        <>
            <HeadingLevel className={'h-full w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600   text-center shadow-2xl shadow-blue-800/80 py-36 px-20'}>
                <Paragraph className={'italic font-bold  text-4xl mb-5'}>
                    🔥Приветствую тебя в своём приложении✌️
                </Paragraph>
                <Paragraph className={'font-bold text-md mb-20'}>
                    Для того чтобы пользоваться им, тебе нужно просто нажать кнопочку ниже
                </Paragraph>
                <Link
                    className={'font-bold italic bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-[150px] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 rounded-lg border-4 border-[#ff6723] px-5 py-2.5 text-center text-4xl'}
                    href={`${AUTH_ENDPOINT}/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&scope=user-library-read&response_type=code`}>
                    Зайти
                </Link>
            </HeadingLevel>

        </>
    );
};

export default Auth;