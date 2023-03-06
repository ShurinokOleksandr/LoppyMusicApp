import 'styles/globals.css'
import React from "react";
import Head from "next/head";
import {Layout} from "@lp/widgets/layout";
import {Provider} from "react-redux";
import {store} from "@lp/store";
const App =  ({ Component, pageProps }) => {

    return (
        <>

                <Head>
                    <title>Loppy</title>
                </Head>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </>
    )
}
export default App;