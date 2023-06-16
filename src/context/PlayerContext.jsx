
import React,{ createContext, useContext, useEffect, useState } from "react";
import {GoogleAuthProvider,signInWithPopup,getAuth,signOut} from 'firebase/auth'
import { app } from "../firebase";
import { Navigate, useNavigate } from "react-router-dom";

const PlayerProvider = createContext()

export const PlayerContext = ({children})=>{
    
    const [player,setPlayer] = useState({
    
    name:'',
    mode:'',
    score:500,
    token:'',
    auth:false
})
    

const handleGoogleSignIn = async () =>{
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)

    try{
        await signInWithPopup(auth,provider).then((res)=>{
            const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken
            const user = res.user
            setPlayer({...player,name:user.displayName,token:token,auth:true})
            sessionStorage.setItem('user',true)
            sessionStorage.setItem('player',{name:user.displayName,token:token})
            
        }).catch((err)=>{
           
            console.log(err)
        return err
        
        })
        
    }catch(error){
        return error
    }
}
const handleGoogleSignOut = async ()=>{
   const auth = getAuth(app)
    await signOut(auth)
    sessionStorage.removeItem('user')
    setPlayer({
        
        name:'',
        mode:'',
        token:'',
        auth:false
    })
}

console.log(player)
useEffect(()=>{
const user = sessionStorage.getItem("player");

    

},[player])
    return (
        <PlayerProvider.Provider value={{player,setPlayer,handleGoogleSignIn,handleGoogleSignOut}}>
            {children}
        </PlayerProvider.Provider>
    );
}
export const playerController =()=>{
    return useContext(PlayerProvider)
}