import { useAuth } from "@lib/auth";
import type { NextPage } from "next";
import Head from "next/head";
import { FormEvent, MouseEvent, useState } from "react";

const Home: NextPage = () => {
    const [email, setEmail] = useState("");
    const auth = useAuth();

    const onSubmit = (
        event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
        email: string
    ) => {
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
                <title>Create Next App</title>
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
                    <button
                        type="submit"
                        onClick={(e) => {
                            onSubmit(e, email);
                        }}
                        className="bg-blue-700 px-4 py-2 text-white"
                    >
                        S'enregistrer
                    </button>
                    {auth?.session && (
                        <button
                            type="submit"
                            onClick={(e) => {
                                onSubmit(e, email);
                            }}
                            className="bg-blue-700 px-4 py-2 text-white"
                        >
                            Deconnexion
                        </button>
                    )}
                </div>
                <span>{auth?.session?.user?.email}</span>
            </main>
        </div>
    );
};

export default Home;
