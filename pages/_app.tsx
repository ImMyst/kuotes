import { AuthProvider } from "@lib/auth";
import "@styles/globals.css";
import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default App;
