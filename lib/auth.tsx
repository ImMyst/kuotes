import React from "react";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { supabaseClient } from "@lib/supabaseClient";
import {
    ApiError,
    Session,
    User,
    UserCredentials
} from "@supabase/supabase-js";

interface IAuthContext {
    signInWithEmail({ email }: UserCredentials): Promise<User | null>;
    signOut: () => Promise<ApiError | null>;
    errors: ApiError | null;
    session: Session | null;
}

const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: FC = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = (): IAuthContext | null => useContext(AuthContext);

function useProvideAuth(): IAuthContext {
    const [session, setSession] = useState<Session | null>(null);
    const [errors, setErrors] = useState<ApiError | null>(null);

    async function signInWithEmail(
        props: UserCredentials
    ): Promise<User | null> {
        const { email } = props;
        const { user, error } = await supabaseClient.auth.signIn({ email });
        setErrors(error);
        return user;
    }

    async function signOut(): Promise<ApiError | null> {
        const { error } = await supabaseClient.auth.signOut();
        setErrors(error);
        return error;
    }

    useEffect(() => {
        setSession(supabaseClient.auth.session());

        supabaseClient.auth.onAuthStateChange((_, session) => {
            setSession(session);
        });
    }, []);

    return {
        signInWithEmail,
        signOut,
        errors,
        session
    };
}
