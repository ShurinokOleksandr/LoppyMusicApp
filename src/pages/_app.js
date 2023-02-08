import 'styles/globals.css'
import Layout from "components/layout";
import React from "react";
import Head from "next/head";

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