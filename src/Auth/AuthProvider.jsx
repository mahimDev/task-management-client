import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
const getSystemTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
const googleProvider = new GoogleAuthProvider()
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isDark, setIsDark] = useState(getSystemTheme());


    // create user 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // login user 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // update user 
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }
    // logout user
    const userSignOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    // stay user
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false);
        })
        return () => {
            unSubscribe()
        }
    }, [])



    const authInfo = {
        user,
        loading,
        isDark,
        setIsDark,
        createUser,
        loginUser,
        userSignOut,
        googleLogin,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;