import 'styles/globals.css'
import React from "react";
import Head from "next/head";
import {Layout} from "@eh/widgets/layout";
const App =  ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Loppy</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
export default App;