import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from '../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({ children }) => {

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile=(name)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName:name
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            if (currentUser) {
                const userInfo = { email: currentUser.email };
                console.log(userInfo);
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        console.log(res.data.token);
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false);
                        }
                    })

            }else{
                localStorage.removeItem('access-token');
                setLoading(false)
            }

        })
        return () => {
            return unSubscribe;
        }
    }, [axiosPublic])

    const logOut = () => {
        return signOut(auth);
    }

    const authInfo = {
        user,
        loading,
        googleSignIn,
        logOut,
        createUser,
        signIn,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;