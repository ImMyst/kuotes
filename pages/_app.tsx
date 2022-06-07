import { AuthProvider } from '@lib/authProvider';
import type { AppProps } from 'next/app';
import '@styles/globals.css';

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AuthProvider>
            <div className="bg-[#1A202C]">
                <Component {...pageProps} />
            </div>
        </AuthProvider>
    );
}

export default App;
