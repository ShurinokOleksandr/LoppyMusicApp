import Head from 'next/head'
import { Inter } from '@next/font/google'
import NavigationButton from "@/shared/ui/navigation-button";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Head>
                <title>Music React App</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={''}>
            </div>
        </>

    )
}
