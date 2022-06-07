import KButton from '@components/ui/KButton/KButton';
import { useAuth } from '@lib/authProvider';
import type { NextPage } from 'next';
import Head from 'next/head';
import { MouseEvent, useState } from 'react';

const Home: NextPage = () => {
    const [email, setEmail] = useState('');
    const auth = useAuth();

    const onSubmit = (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>, email: string) => {
        event.preventDefault();
        if (auth?.session) {
            auth.signOut();
        } else {
            auth?.signInWithEmail({ email });
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center py-2">
            <Head>
                <title>Kuotes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
                <input
                    type="text"
                    placeholder="Email"
                    pattern="/^\S+@\S+$/i"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex space-x-4">
                    <KButton
                        type="submit"
                        variant="primary"
                        onClick={(e) => {
                            onSubmit(e, email);
                        }}
                    >
                        Envoyer un Magic Link
                    </KButton>
                    {auth?.session && (
                        <KButton
                            type="submit"
                            onClick={(e) => {
                                onSubmit(e, email);
                            }}
                        >
                            Deconnexion
                        </KButton>
                    )}
                </div>
                <span>{auth?.session?.user?.email}</span>
            </main>
        </div>
    );
};

export default Home;
