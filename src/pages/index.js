import React, {useEffect, useState} from 'react';
import {HeadingLevel, SwiperContent} from "@lp/shared/ui";
import Link from "next/link";

const a = [
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssssssssssssssssssdfsdf'},
    {name:'asds',tracks:'dfsdfsssssdfsdf'},
    {name:'ewe',tracks:'dfsdfssssssssssdfsdf'},
    {name:'aqweqsds',tracks:'dfsdsssssssssfssdfsdf'},
    {name:'asfffhhh',tracks:'dfsssssssssssdfssdfsdf'},
]
const Index = () => {




    const [token, setToken] = useState("")
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }
     const fetchData = async () => {
        await fetch('https://api.spotify.com/v1/tracks/2TpxZ7JUBn3uw46aR7qd6V',{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location = ""
            window.localStorage.setItem("token", token)
        }if(token){
            fetchData()
        }

        setToken(token)
        console.log(token)

    }, [])
    if(token){
        fetchData()
    }
    return (
        <div className=''>
            <HeadingLevel className={'text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 italic shadow-2xl shadow-blue-800/80 font-bold text-center text-4xl py-20 mb-20'}>
                🔥Приветствую тебя в своём приложении✌️
            </HeadingLevel>
            {!token ?
                <Link href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT}&response_type=${RESPONSE_TYPE}`}>
                    Loginsfy
                </Link>
                : <button onClick={logout}>Logout</button>}

            {token ?
                <>
                    <h1>зарегался {process.env.REACT_APP_CLIENT_ID}</h1>
                    <div className={''}>
                        <SwiperContent key={2} className={'pl-5'} a={a}>
                            Только для тебя
                        </SwiperContent>
                        <SwiperContent key={13} className={''} a={a}>
                            Только для тебя
                        </SwiperContent>
                        <SwiperContent key={14} className={''} a={a}>
                            Только для тебя
                        </SwiperContent>
                        <SwiperContent key={1} className={''} a={a}>
                            Только для тебя
                        </SwiperContent>
                    </div>
                </>


                : <h2>Please login</h2>
            }


        </div>
    );
};

export default Index;