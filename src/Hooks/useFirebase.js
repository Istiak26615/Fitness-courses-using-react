import React, { useState } from 'react';
import { GoogleAuthProvider,getAuth, signInWithPopup, signOut } from "firebase/auth";
import initializeFirebaseApp from '../Firebase/Firebase.init';

initializeFirebaseApp();
const useFirebase = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    const [user, setUser]=useState({})

    const loginUsingGoogle=()=>{
       signInWithPopup(auth, provider)
        .then((result)=>{
               setUser(result.user)
        })
    }

    const handleLogout=()=>{
        signOut(auth).then(()=>{
            setUser({})
        })
    }
    return {loginUsingGoogle, user, handleLogout}
};

export default useFirebase;