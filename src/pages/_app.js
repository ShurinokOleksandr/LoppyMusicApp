import 'styles/globals.css'
import React from "react";
import Head from "next/head";
import {Layout} from "@lp/widgets/layout";
import {Provider} from "react-redux";
import {store} from "@lp/store";
import {SessionProvider} from "next-auth/react";
const App =  ({ Component,pageProps: { session, ...pageProps } }) => {

    return (
        <>

            <Head>
                <title>Loppy</title>
            </Head>
            <Provider store={store}>
                <SessionProvider session={session}>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </SessionProvider>
            </Provider>
        </>
    )
}
export default App;