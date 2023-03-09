import React, {useEffect} from 'react';
import {signIn, useSession} from "next-auth/react";
import {Button, HeadingLevel, Paragraph} from "@lp/shared/ui";
import {useRouter} from "next/router";


export const Auth = () => {
    const router = useRouter()
    const s = useSession()
    if (s.status === "loading") {
        return <p>Hang on there...</p>
    }

    return (
            <HeadingLevel className={'h-screen font-mono w-full  text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600   text-center shadow-2xl shadow-blue-800/80 py-36 px-20'}>
                <Paragraph className={'italic font-bold  text-4xl mb-5'}>
                    🔥Приветствую тебя в своём приложении✌️
                </Paragraph>
                <Paragraph className={'font-bold text-md mb-20'}>
                    Для того чтобы пользоваться им, тебе нужно просто нажать кнопочку ниже
                </Paragraph>
                <Button
                    className={'font-bold italic bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 w-[150px] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 rounded-lg border-4 border-[#ff6723] px-5 py-2.5 text-center text-4xl'}
                    handleClick={() => signIn("spotify")}
                >
                    Зайти
                </Button>
            </HeadingLevel>
    );
}


