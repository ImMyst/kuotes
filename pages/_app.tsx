import { AuthProvider } from '@lib/authProvider';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import KNavbar from '@components/KNavbar/KNavbar';
import '@styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
    return (
        <AuthProvider>
            <Head>
                <title>Kuotes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <KNavbar />

            <main className="flex h-[calc(100vh_-_88px)] flex-col items-center justify-center">
                <Component {...pageProps} />
            </main>
        </AuthProvider>
    );
};

export default App;
