import KButton from '@components/ui/KButton/KButton';
import { useAuth } from '@lib/authProvider';
import type { NextPage } from 'next';
import { Fragment, MouseEvent, useState } from 'react';

const Signup: NextPage = () => {
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
        <Fragment>
            <div className="flex flex-col space-y-4">
                <input
                    type="text"
                    className="text-slate-900"
                    placeholder="Email"
                    pattern="/^\S+@\S+$/i"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div className="flex space-x-4">
                    <KButton
                        type="submit"
                        variant="magic"
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
                <span className="text-center">{auth?.session?.user?.email}</span>
            </div>
        </Fragment>
    );
};

export default Signup;
