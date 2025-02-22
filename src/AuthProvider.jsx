import React, { createContext, useEffect, useState } from 'react';
import { auth } from './Firebase.init';
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
export const AuthContext = createContext();


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoogle = () => {
        // setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser)
            
            setLoading(false)


        });
        return () => {
            unsubscribe()

        }
    }, [])


    const authInfo = {
        signInWithGoogle,user,loading
    }
    return (
  <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>
    );
};

export default AuthProvider;