import { AuthProvider } from '@lib/authProvider';
import type { AppProps } from 'next/app';
import '@styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AuthProvider>
            <div className="bg-[#1A202C] text-slate-100">
                <div className="flex min-h-screen flex-col items-center justify-center py-2">
                    <Head>
                        <title>Kuotes</title>
                        <link rel="icon" href="/favicon.ico" />
                    </Head>

                    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                        <div>
                            <Component {...pageProps} />
                        </div>
                    </main>
                </div>
            </div>
        </AuthProvider>
    );
}

export default App;
