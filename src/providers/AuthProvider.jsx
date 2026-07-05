/**
 * ==========================================================
 * Provider: AuthProvider
 * ==========================================================
 *
 * Purpose:
 * Makes authentication information available
 * to the entire application.
 * ==========================================================
 */


import { useEffect, useState } from "react";

import AuthContext from "../context/AuthContext";

import { auth } from "../firebase/firebaseConfig";

import { onAuthStateChanged } from "firebase/auth";

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(

            auth,

            (user) => {

                console.log("Authentication changed:", user);

                setCurrentUser(user);
                setLoading(false);

            }

        );

        return () => unsubscribe();

    }, []);

    const value = {

        currentUser,

    };

    return (

        <AuthContext.Provider
            value={{
                currentUser,
                loading,
            }}
        >
            
            {children}

        </AuthContext.Provider>
    );
}

export default AuthProvider;