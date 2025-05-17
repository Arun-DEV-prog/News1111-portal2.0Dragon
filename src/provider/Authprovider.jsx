import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebas.config';
 export const AuthContext=createContext();
 const auth=getAuth(app)
 const creatUser=(email,password)=>{
     return createUserWithEmailAndPassword(auth,email,password)
 }
 const singIn=(email,password)=>{
   return signInWithEmailAndPassword(auth,email,password)
 }
 const logOut=()=>{
   return signOut(auth);
 }
const Authprovider = ({children}) => {
    const[user,setUser]=useState(null)
     useEffect(()=>{
      const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=>{
             unSubscribe();
        }
    },[])
    const authData={
         user,
         setUser,
         creatUser,
         logOut,
         singIn

    }
    console.log(user)
   
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
}

export default Authprovider
