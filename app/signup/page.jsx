"use client"
import React, { useEffect, useState } from 'react'
import { auth, provider } from '@/firebase/config';
import { signInWithPopup } from "firebase/auth";
import Home from '../page';

function signup() {
    const [value, setValue] = useState("")
    const handleSignIn = async () => {
      try {
        signInWithPopup(auth, provider).then((data)=>{
            setValue(data.user.email)
            console.log(data.user)
            localStorage.setItem('email', data.user.email)
            localStorage.setItem('name', data.user.displayName)
            localStorage.setItem('photoURL',data.user.photoURL)
        })
      } catch (error) {
        console.error("Error signing in:", error);
      }
    };

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    }, [])

  return (
    <div>
        {   value   ?   <Home/> :
            <button onClick={handleSignIn}>Sign in with Google</button>
        }
    </div>
  );
}

export default signup