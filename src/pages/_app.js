import '@/styles/globals.css'
import Layout from "@/components/layout";

const App =  ({ Component, pageProps }) => {
    return (
        <div className=''>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}
export default App;